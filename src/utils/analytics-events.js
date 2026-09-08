function sendAnalyticsEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", name, {
    transport_type: "beacon",
    ...params
  });
}

function linkCategory(link) {
  const href = link.getAttribute("href") || "";
  const label = link.textContent.trim().replace(/\s+/g, " ");

  if (href.startsWith("tel:")) {
    return { name: "phone_click", params: { link_text: label, phone_number: href.replace("tel:", "") } };
  }

  if (/contact\.html|#contact/i.test(href)) {
    return { name: "quote_click", params: { link_text: label, link_url: href } };
  }

  if (/google\.com\/maps/i.test(href)) {
    return { name: "map_click", params: { link_text: label, link_url: href } };
  }

  if (/facebook\.com/i.test(href)) {
    return { name: "social_click", params: { link_text: label, link_url: href, social_platform: "facebook" } };
  }

  if (href.startsWith("#") || href.includes("index.html#")) {
    return { name: "navigation_click", params: { link_text: label, link_url: href } };
  }

  return null;
}

export function bindAnalyticsEvents({
  linkSelector = "a[href]",
  formSelector = "[data-firstline-form]"
} = {}) {
  document.querySelectorAll(linkSelector).forEach((link) => {
    link.addEventListener("click", () => {
      const event = linkCategory(link);
      if (!event) return;
      sendAnalyticsEvent(event.name, event.params);
    });
  });

  document.querySelectorAll(formSelector).forEach((form) => {
    form.addEventListener("submit", () => {
      sendAnalyticsEvent("quote_form_submit_attempt", {
        form_mode: form.dataset.formMode || "demo",
        page_path: window.location.pathname
      });
    });
  });
}
