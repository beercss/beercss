import { expect, test } from "vitest";
import { type IBeerCssTheme } from "../src/cdn/interfaces";
import beer from "../src/cdn/beer";
import "material-dynamic-colors";
import "./globals";

test("checking all variables from theme", async () => {
  const colors = [
    "--primary",
    "--on-primary",
    "--primary-container",
    "--on-primary-container",
    "--secondary",
    "--on-secondary",
    "--secondary-container",
    "--on-secondary-container",
    "--tertiary",
    "--on-tertiary",
    "--tertiary-container",
    "--on-tertiary-container",
    "--error",
    "--on-error",
    "--error-container",
    "--on-error-container",
    "--background",
    "--on-background",
    "--surface",
    "--on-surface",
    "--surface-variant",
    "--on-surface-variant",
    "--outline",
    "--outline-variant",
    "--shadow",
    "--scrim",
    "--inverse-surface",
    "--inverse-on-surface",
    "--inverse-primary",
    "--surface-dim",
    "--surface-bright",
    "--surface-container-lowest",
    "--surface-container-low",
    "--surface-container",
    "--surface-container-high",
    "--surface-container-highest",
  ];

  const theme = await beer("theme", "#ffd700") as IBeerCssTheme;
  for (const color of colors) {
    const colorWithValue = new RegExp(`${color}:[#0-9a-f]+;`, "i");
    expect(theme.light).toMatch(colorWithValue);
    expect(theme.dark).toMatch(colorWithValue);
  }
});
