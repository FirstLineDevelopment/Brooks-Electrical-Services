import { expect, test } from "@playwright/test";

test("Google Analytics interaction events are emitted", async ({ page }) => {
  async function stubAnalytics() {
    await page.evaluate(() => {
      window.__analyticsEvents = [];
      window.gtag = (...args) => window.__analyticsEvents.push(args);
    });
  }

  await page.addInitScript(() => {
    window.__analyticsEvents = [];
    document.addEventListener(
      "click",
      (event) => {
        if (event.target.closest("a[href]")) event.preventDefault();
      },
      true
    );
  });

  await page.goto("/");
  await stubAnalytics();
  await page.getByRole("link", { name: "Call now" }).first().click();
  await page.getByRole("link", { name: "Request a quote" }).first().click();
  await page.getByRole("link", { name: "Services" }).first().click();
  await page.getByRole("link", { name: "Open map" }).click();
  await page.getByRole("link", { name: "View Facebook" }).click();

  const homeEventNames = await page.evaluate(() =>
    window.__analyticsEvents
      .filter(([command]) => command === "event")
      .map(([, eventName]) => eventName)
  );

  await page.goto("/contact.html");
  await stubAnalytics();
  const form = page.locator("[data-firstline-form]").first();
  await form.locator('input[name="name"]').fill("Demo User");
  await form.locator('input[name="email"]').fill("demo@example.com");
  await form.getByRole("button", { name: "Submit request" }).click();

  const contactEventNames = await page.evaluate(() =>
    window.__analyticsEvents
      .filter(([command]) => command === "event")
      .map(([, eventName]) => eventName)
  );
  const eventNames = [...homeEventNames, ...contactEventNames];

  expect(eventNames).toEqual(
    expect.arrayContaining([
      "phone_click",
      "quote_click",
      "navigation_click",
      "map_click",
      "social_click",
      "quote_form_submit_attempt"
    ])
  );
});
