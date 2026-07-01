#!/usr/bin/env node

/**
 * BeerCSS Agent Skill Generator
 *
 * This script generates an Agent Skill (https://agentskills.io) in the skill/
 * directory, following the SKILL.md specification. The generated skill allows
 * AI agents to understand and work with the BeerCSS framework.
 *
 * The script will:
 * - Create skill/<skill-name>/SKILL.md (main entry point with metadata + instructions)
 * - Create skill/<skill-name>/references/ (individual documentation files)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration - paths relative to project root
const PROJECT_ROOT = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(PROJECT_ROOT, "docs");
const SKILL_DIR = path.join(PROJECT_ROOT, "dist", "skill");
const SKILL_NAME = "beercss";
const SKILL_OUTPUT_DIR = path.join(SKILL_DIR, SKILL_NAME);
const REFERENCES_DIR = path.join(SKILL_OUTPUT_DIR, "references");
const SKILL_FILE = path.join(SKILL_OUTPUT_DIR, "SKILL.md");
const BASE_URL = "https://www.beercss.com";

// Files to exclude from alphabetical section (already part of SKILL.md body)
const SKIP_AS_REFERENCE = new Set(["SUMMARY.md"]);

// Read versions from package.json
const PACKAGE_JSON = JSON.parse(
  fs.readFileSync(path.join(PROJECT_ROOT, "package.json"), "utf8"),
);
const BEERCSS_VERSION = PACKAGE_JSON.version;
const MDC_VERSION = PACKAGE_JSON.dependencies[
  "material-dynamic-colors"
].replace(/^[~^]/, "");

// Generate the YAML frontmatter for SKILL.md
function generateFrontmatter() {
  return `---
name: ${SKILL_NAME}
description: Build Material Design 3 interfaces with BeerCSS — a CSS framework using semantic HTML elements with optional helper classes. Use this skill when creating UI components, layouts, themes, navigation, forms, or any web interface using BeerCSS. Also use it for installation, theming with dynamic colors, responsive design, and understanding the Settings/Elements/Helpers architecture.
compatibility: Requires beercss (npm package or CDN). Optional: material-dynamic-colors for dynamic color theming.
metadata:
  version: ${BEERCSS_VERSION}
  repository: https://github.com/beercss/beercss
  website: https://www.beercss.com
  license: MIT
---
`;
}

// Generate the main SKILL.md body with instructions
function generateSkillBody() {
  const SKILL_BODY_PATH = path.join(__dirname, 'skill-body.md');
  let template = fs.readFileSync(SKILL_BODY_PATH, 'utf8');
  template = template.replace(/\{BEERCSS_VERSION\}/g, BEERCSS_VERSION);
  template = template.replace(/\{MDC_VERSION\}/g, MDC_VERSION);
  return template;
}

// Remove navigation footer from content (same logic as llms.js)
function removeNavigationFooter(content) {
  const lines = content.split("\n");
  let cutoffIndex = lines.length;

  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();

    if (line.match(/^\[.+?\]\(.+?\.md\)/)) {
      cutoffIndex = i;
    } else if (line.match(/^#+\s*Go to\s*$/i) || line === "Go to") {
      cutoffIndex = i;
    } else if (line && !line.match(/^[\s,]*$/)) {
      break;
    }
  }

  return lines.slice(0, cutoffIndex).join("\n").trimEnd();
}

// Process a single documentation file for use as a reference
function processReferenceFile(filename, docsDir) {
  const filepath = path.join(docsDir, filename);

  try {
    let content = fs.readFileSync(filepath, "utf8");
    content = removeNavigationFooter(content);

    if (!content.endsWith("\n\n")) {
      content += "\n\n";
    }

    return content;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return `Error loading ${filename}: ${error.message}\n\n`;
  }
}

// Main function
function generateAgentSkill() {
  console.log("🍺 Generating Agent Skill from BeerCSS documentation...\n");

  // Check if docs directory exists
  if (!fs.existsSync(DOCS_DIR)) {
    console.error(`Error: Documentation directory '${DOCS_DIR}' not found!`);
    process.exit(1);
  }

  // Create output directories
  if (!fs.existsSync(REFERENCES_DIR)) {
    fs.mkdirSync(REFERENCES_DIR, { recursive: true });
  }

  // Read all markdown files from docs directory
  let allMdFiles;
  try {
    allMdFiles = fs
      .readdirSync(DOCS_DIR)
      .filter((file) => file.endsWith(".md"));
  } catch (error) {
    console.error(`Error reading docs directory: ${error.message}`);
    process.exit(1);
  }

  console.log(`Found ${allMdFiles.length} documentation files\n`);

  // Process reference files — copy all non-skipped docs as references
  const referenceFiles = allMdFiles
    .filter((file) => !SKIP_AS_REFERENCE.has(file))
    .sort();

  referenceFiles.forEach((file, index) => {
    console.log(
      `Processing reference ${index + 1}/${referenceFiles.length}: ${file}`,
    );
    const content = processReferenceFile(file, DOCS_DIR);
    fs.writeFileSync(path.join(REFERENCES_DIR, file), content);
  });

  // Generate and write SKILL.md
  const frontmatter = generateFrontmatter();
  const skillBody = generateSkillBody();
  const skillContent = frontmatter + skillBody;

  try {
    fs.writeFileSync(SKILL_FILE, skillContent);
    console.log(`\n✅ Successfully generated ${SKILL_FILE}`);
    console.log(
      `✅ Copied ${referenceFiles.length} reference files to ${REFERENCES_DIR}`,
    );
    console.log(`\n🎯 Skill "${SKILL_NAME}" is ready at:`);
    console.log(`   ${SKILL_OUTPUT_DIR}/`);
    console.log(`   ├── SKILL.md`);
    console.log(`   └── references/ (${referenceFiles.length} files)`);
  } catch (error) {
    console.error(`\nError writing output files: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
generateAgentSkill();
