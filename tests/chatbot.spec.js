import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://us-sandbox.insideyourbusiness.com/?automation-test");

  await page.getByRole("button", { name: "Chat" }).click();

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("menuitem", { name: "Something Else" })
    .click();

  await page
    .frameLocator("#insideChatFrame")
    .getByText("droidPlease enter your email address")
    .isVisible();

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("cell", { name: "Help" })
    .locator('input[type="email"]')
    .fill("test@test.cc");

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("cell", { name: "Help" })
    .locator('input[type="email"]')
    .press("Enter");

  await page
    .frameLocator("#insideChatFrame")
    .getByText("droidPlease enter your mobile number")
    .isVisible();

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("textbox", { name: "xxx-xxx-xxx" })
    .fill("856434343");

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("textbox", { name: "xxx-xxx-xxx" })
    .press("Enter");

  await page
    .frameLocator("#insideChatFrame")
    .getByText("droidLeave a message here:")
    .isVisible();

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("cell", { name: "Help" })
    .locator('input[type="text"]')
    .fill("this is a test message #1");

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("cell", { name: "Help" })
    .locator('input[type="text"]')
    .press("Enter");

  await page
    .frameLocator("#insideChatFrame")
    .getByRole("button", { name: "Minimize Chat Pane" })
    .click();
});