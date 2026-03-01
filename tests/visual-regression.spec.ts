import { test, expect } from "@playwright/test";

/**
 * Visual Regression Tests
 *
 * These tests capture screenshots and compare them against baseline images
 * to detect unintended visual changes across different viewports.
 */

test.describe("Homepage Visual Regression", () => {
  test("Homepage - full page", async ({ page }) => {
    await page.goto("/");

    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Take full page screenshot
    await expect(page).toHaveScreenshot("homepage.png", {
      fullPage: true,
      animations: "disabled",
      maxDiffPixelRatio: 0.01, // Allow up to 1% pixel difference
    });
  });
});
