import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/app/components/services/ServiceDetail";
import { getDictionary } from "@/app/i18n/dictionaries";
import { getLocale } from "@/app/i18n/server";
import { isServiceSlug, services } from "@/app/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    if (!isServiceSlug(slug)) return {};
    const service = getDictionary(await getLocale()).services.items[slug];
    return { title: `${service.name} | DiSy`, description: service.tagline };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    if (!isServiceSlug(slug)) notFound();
    return <ServiceDetail slug={slug} />;
}
