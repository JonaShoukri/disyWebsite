import type { Dictionary } from "./fr";

export const en: Dictionary = {
    meta: {
        title: "DiSy | Operations analytics for manufacturers",
        description:
            "DiSy helps Quebec manufacturers find where their operations lose time and money, then forecast what comes next.",
    },
    nav: {
        services: "services",
        about: "about",
        partners: "partners",
        switchLanguage: "français",
        switchLanguageAria: "Passer en français",
        home: "DiSy home",
    },
    common: {
        bookCall: "Book a call",
        learnMore: "Learn more",
        allServices: "All services",
        seeServices: "See our services",
    },
    home: {
        titleLine1: "YOU DO BUSINESS,",
        titleLine2: "WE DO THE",
        titleAccent: "Data",
        intro:
            "DiSy (Digital Systems) is a Montreal operations and analytics firm for Quebec manufacturers. We find where your operations lose time and money, then build the forecasts and indicators that keep them on track, inside the tools you already use.",
        cta: "Discover our services",
    },
    services: {
        overline: "Our services",
        heroLine1: "Smarter",
        heroLine2: "Operations",
        heroText:
            "Two services for Quebec manufacturers: understand where your operations lose time and money, then forecast what comes next.",
        listTitle: "What we do",
        listText: "Start with either one. Every engagement begins with a free, no-commitment call.",
        loopTitle: "Two services,",
        loopAccent: "one loop",
        loopText: "The Bilan finds where a forecast would pay off most. Forecasting builds it and keeps it running.",
        loop: [
            { title: "Diagnose", text: "The Bilan reveals your bottlenecks, constraints and the state of your data." },
            { title: "Model", text: "We build the forecasts that answer the problems we found." },
            { title: "Integrate", text: "Results land in Excel, your ERP or your dashboards." },
            { title: "Sustain", text: "We track your KPIs and keep the models accurate over time." },
        ],
        ctaTitle: "Ready to see",
        ctaAccent: "clearly",
        ctaTitleEnd: "?",
        ctaText: "Book a free, no-commitment call. We'll tell you honestly where we can help.",
        labels: {
            problem: "The problem",
            deliverables: "What you get",
            forWho: "Who it's for",
            steps: "How it works",
            useCases: "Example forecasts",
            funding: "Funding",
        },
        items: {
            bilan: {
                name: "The Bilan",
                kicker: "360° operations review",
                tagline: "See exactly where your business loses time, capacity and money.",
                summary:
                    "A fixed-scope, fixed-price review led by engineers. We analyse your processes and your data to find the bottlenecks, the constraints and the missing indicators, then hand you a prioritized plan.",
                highlights: [
                    "Bottlenecks and constraints identified",
                    "A health check of your data",
                    "KPIs ready to track",
                    "A prioritized roadmap",
                ],
                problem:
                    "You can feel something is holding the operation back, but nobody has time to step back and look. The data exists, scattered across the ERP, Excel files and your experienced employees' heads. So decisions get made on instinct and the same problems keep coming back.",
                deliverables: [
                    "A map of your flows and bottlenecks",
                    "A health check of your data (ERP, Excel, SQL)",
                    "A set of key performance indicators (KPIs) fitted to your operation",
                    "A roadmap prioritized by impact and effort",
                    "The places where a forecast would save you time or money",
                ],
                forWho:
                    "Quebec manufacturers and industrial SMEs that want to grow, cut costs, or prepare a succession or a sale.",
                steps: [
                    { title: "Discovery call", text: "A free first conversation to understand your business and priorities." },
                    { title: "Collection", text: "We visit your operations, talk with your teams and get access to your data." },
                    { title: "Analysis", text: "We measure, cross-check the data and find what really limits your performance." },
                    { title: "Debrief", text: "We present the report, the KPIs and the roadmap to your team." },
                ],
                funding:
                    "Several Quebec and Canadian programs can fund part of a digital diagnostic. We help you check your eligibility on the first call.",
            },
            forecasting: {
                name: "Forecasting",
                kicker: "Custom predictive models",
                tagline: "Anticipate demand, downtime and scrap instead of reacting to them.",
                summary:
                    "We turn the history you already have (CSV, Excel, a SQL database) into a custom forecasting model, hosted and maintained by us, and available right inside your tools.",
                highlights: [
                    "Trained on your own data",
                    "Results in Excel or your system",
                    "Hosted and maintained by DiSy",
                    "Accuracy tracked over time",
                ],
                problem:
                    "Planning still happens in a spreadsheet or on gut feel. One unexpected order, one machine going down or one rejected batch, and the whole schedule has to be redone. The data to see it coming often already exists, but nobody has time to turn it into a reliable model.",
                deliverables: [
                    "A forecasting model trained on your own data",
                    "Forecasts available in Excel, through a webhook, or written straight back into your system",
                    "Hosting, scheduled retraining and accuracy monitoring",
                    "A plain report on what the model can and cannot predict",
                ],
                forWho:
                    "Businesses that still plan on instinct or in a spreadsheet, and that have a history of sales, production or maintenance data.",
                steps: [
                    { title: "Discovery call", text: "Together we pick what is worth predicting." },
                    { title: "Data review", text: "We check that your history is sufficient and clean it up." },
                    { title: "Build", text: "We train and validate a custom model with ML.NET." },
                    { title: "Integrate and monitor", text: "We connect the model to your tools, then watch and retrain it." },
                ],
                useCases: ["Demand and sales by product", "Machine downtime and maintenance", "Scrap and yield"],
            },
        },
    },
    about: {
        overline: "About",
        heroLine1: "Who is",
        heroLine2: "DiSy",
        intro:
            "DiSy stands for Digital Systems. We are a young Montreal firm combining software engineering and operations engineering to help Quebec manufacturers make better decisions with the data they already have.",
        missionTitle: "Our mission",
        mission:
            "Make industrial-grade analytics and AI accessible to small and medium businesses: no jargon, no never-ending project, and no in-house data science team required.",
        valuesTitle: "What we",
        valuesAccent: "stand for",
        values: [
            {
                title: "Operations first",
                text: "We measure our work in downtime avoided, inventory reduced and capacity gained, not in models delivered.",
            },
            {
                title: "Your tools, not ours",
                text: "Results land in Excel, your ERP or your existing systems. No new platform to learn.",
            },
            {
                title: "Transparency",
                text: "Clear scope, clear price, and an honest answer when a project isn't worth doing.",
            },
            {
                title: "Rooted in Quebec",
                text: "A Montreal team that works French first and knows the reality of local businesses.",
            },
        ],
        ctaText: "See how we can help.",
    },
    partners: {
        title: "Partners",
        text: "Coming soon.",
    },
    book: {
        overline: "Book a call",
        heroLine1: "Let's talk about your",
        heroLine2: "operations",
        text: "A free, no-commitment first call. We listen, ask the right questions, and tell you honestly whether the Bilan, Forecasting or neither is right for you.",
        about: "Topic:",
        openExternal: "Open the calendar in a new tab",
        calendarTitle: "DiSy booking calendar",
        emailPrompt: "Write to us:",
        comingSoon: "Online booking is coming soon.",
    },
    notFound: {
        title: "Page not found",
        back: "Back to home",
    },
};
