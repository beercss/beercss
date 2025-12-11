#!/usr/bin/env node

/**
 * BeerCSS Documentation Generator for LLMs
 * 
 * This script concatenates all BeerCSS documentation files into a single
 * llms.md file that AI/LLM systems can use to understand the framework.
 * 
 * Usage: node generate-llms-md.js
 * 
 * The script will:
 * - Read all .md files from the docs/ directory
 * - Extract headings and create a table of contents
 * - Remove navigation footers
 * - Output a clean, concatenated llms.md file
 * 
 * Note: Original heading levels are preserved (multiple H1s are fine)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration - paths relative to project root
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(PROJECT_ROOT, 'docs');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'llms.md');

// Define the order of files for logical flow
const FILE_ORDER = [
  'INDEX.md',          // Installation and setup
  'SETTINGS.md',       // Configuration and theming
  'ELEMENTS.md',       // Overview of elements
  'HELPERS.md',        // Overview of helper classes
  // Components will be inserted alphabetically here
  'JAVASCRIPT.md'      // API reference at the end
];

// Files to exclude from the alphabetical section (already in FILE_ORDER)
const ORDERED_FILES = new Set(FILE_ORDER);

// Generate header for the output file
function generateHeader() {
  const now = new Date().toISOString().split('T')[0];
  return `# BeerCSS - Complete Documentation for AI/LLM Systems

This file is auto-generated from the BeerCSS documentation.
Generated on: ${now}

BeerCSS is a CSS framework based on Material Design 3 that uses semantic HTML elements with optional helper classes.

- [BeerCSS website](https://www.beercss.com)
- [GitHub repository](https://github.com/beercss/beercss)
- [Material Design 3 guidelines](https://m3.material.io)

---

## Documentation Contents

The following documentation sections are included in order:

`;
}

// Extract the first heading from content
function extractFirstHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : null;
}

// Generate a simple table of contents listing
function generateTOC(filesWithHeadings) {
  const tocItems = filesWithHeadings
    .filter(file => file.heading)
    .map(file => `- ${file.heading}`)
    .join('\n');
  
  return tocItems + '\n\n---\n\n';
}


// Remove navigation footer from content
function removeNavigationFooter(content) {
  // Split content into lines
  const lines = content.split('\n');
  
  // Find where navigation starts (usually after "Go to" or similar)
  let cutoffIndex = lines.length;
  
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    
    // Check if this line contains navigation links
    if (line.match(/^\[.+?\]\(.+?\.md\)/)) {
      cutoffIndex = i;
    }
    // Check for "Go to" or "#### Go to" headers
    else if (line.match(/^#+\s*Go to\s*$/i) || line === 'Go to') {
      cutoffIndex = i;
    }
    // If we hit content that's not navigation, stop
    else if (line && !line.match(/^[\s,]*$/)) {
      break;
    }
  }
  
  // Return content up to the navigation section
  return lines.slice(0, cutoffIndex).join('\n').trimEnd();
}

// Process a single documentation file
function processFile(filename, docsDir) {
  const filepath = path.join(docsDir, filename);
  
  try {
    let content = fs.readFileSync(filepath, 'utf8');
    const firstHeading = extractFirstHeading(content);
    
    // Remove navigation footer
    content = removeNavigationFooter(content);
    
    // Ensure proper spacing between sections
    if (!content.endsWith('\n\n')) {
      content += '\n\n';
    }
    
    content += '---\n\n';
    
    return { content, heading: firstHeading };
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return { 
      content: `\n## Error reading ${filename}\n\n${error.message}\n\n---\n\n`,
      heading: null 
    };
  }
}

// Main function
function generateLLMSDoc() {
  console.log('🍺 Generating llms.md from BeerCSS documentation...\n');
  
  // Check if docs directory exists
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`Error: Documentation directory '${DOCS_DIR}' not found!`);
    process.exit(1);
  }
  
  // Read all markdown files from docs directory
  let allMdFiles;
  try {
    allMdFiles = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading docs directory: ${error.message}`);
    process.exit(1);
  }
  
  console.log(`Found ${allMdFiles.length} documentation files\n`);
  
  // Separate files into ordered and alphabetical
  const orderedFiles = FILE_ORDER.filter(file => allMdFiles.includes(file));
  const alphabeticalFiles = allMdFiles
    .filter(file => !ORDERED_FILES.has(file))
    .sort();
  
  // Combine in the desired order
  const allFilesInOrder = [
    ...orderedFiles.slice(0, -1),  // All ordered files except JAVASCRIPT.md
    ...alphabeticalFiles,           // All component files alphabetically
    ...orderedFiles.slice(-1)       // JAVASCRIPT.md at the end
  ];
  
  // Process all files and collect headings
  const processedFiles = [];
  allFilesInOrder.forEach((file, index) => {
    console.log(`Processing ${index + 1}/${allFilesInOrder.length}: ${file}`);
    const result = processFile(file, DOCS_DIR);
    if (result.heading) {
      processedFiles.push({
        filename: file,
        content: result.content,
        heading: result.heading
      });
    } else {
      // Fallback for files without headings
      const fallbackHeading = file.replace('.md', '').replace(/_/g, ' ');
      processedFiles.push({
        filename: file,
        content: result.content,
        heading: fallbackHeading
      });
    }
  });
  
  // Generate the final content
  let content = generateHeader();
  content += generateTOC(processedFiles);
  
  // Add all processed content
  processedFiles.forEach(file => {
    content += file.content;
  });
  
  // Write the output file
  try {
    fs.writeFileSync(OUTPUT_FILE, content);
    console.log(`\n✅ Successfully generated ${OUTPUT_FILE}`);
    console.log(`📄 Total size: ${(content.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error(`\nError writing output file: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
generateLLMSDoc();