import BookingPanel from "@/app/components/book/BookingPanel";
import { isServiceSlug } from "@/app/lib/services";

type Props = { searchParams: Promise<{ service?: string }> };

export default async function BookPage({ searchParams }: Props) {
    const { service } = await searchParams;
    return <BookingPanel service={isServiceSlug(service) ? service : undefined} />;
}
