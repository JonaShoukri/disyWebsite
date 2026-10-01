// Site-wide settings. Values come from environment variables so they can change per deployment
// without touching code (see .env.example).
export const site = {
    name: "DiSy",
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

/** Internal link to the booking page, optionally tagged with the service the visitor came from. */
export function bookHref(service?: string) {
    return service ? `/book?service=${encodeURIComponent(service)}` : "/book";
}
