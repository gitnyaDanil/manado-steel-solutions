type Gtag = (
  command: "event",
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

function trackEvent(eventName: string, params: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackWhatsappClick(location: string) {
  trackEvent("whatsapp_click", {
    button_location: location,
    contact_channel: "whatsapp",
  });
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", {
    button_location: location,
    contact_channel: "phone",
  });
}

