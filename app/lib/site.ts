// Site-wide settings. Environment variables override the defaults per deployment (see .env.example).
export const site = {
    name: "DiSy",
    // Cal.com, connected to Jonas's Apple Calendar; Cal.com emails him on every booking.
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/jonas-shoukri-wf6w4w/client-introduction-call",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

/** The scheduler URL for embedding, asking Cal.com for its dark theme to match the site. */
export function bookingEmbedUrl() {
    if (!site.bookingUrl) return "";
    const url = new URL(site.bookingUrl);
    if (url.hostname.endsWith("cal.com")) url.searchParams.set("theme", "dark");
    return url.toString();
}

/** Internal link to the booking page, optionally tagged with the service the visitor came from. */
export function bookHref(service?: string) {
    return service ? `/book?service=${encodeURIComponent(service)}` : "/book";
}
