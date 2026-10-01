export interface Step {
    title: string;
    text: string;
}

/** Copy for one service. Every dictionary provides one per slug in app/lib/services.ts. */
export interface ServiceCopy {
    name: string;
    kicker: string;
    tagline: string;
    summary: string;
    highlights: string[];
    problem: string;
    deliverables: string[];
    forWho: string;
    steps: Step[];
    useCases?: string[];
    funding?: string;
}
