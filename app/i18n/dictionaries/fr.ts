import type { ServiceSlug } from "@/app/lib/services";
import type { ServiceCopy } from "./types";

const services: Record<ServiceSlug, ServiceCopy> = {
    bilan: {
        name: "Le Bilan",
        kicker: "Diagnostic opérationnel 360°",
        tagline: "Voyez clairement où votre entreprise perd du temps, de la capacité et de l'argent.",
        summary:
            "Un diagnostic à portée et à prix fixes, mené par des ingénieurs. On analyse vos processus et vos données pour trouver les goulots, les contraintes et les indicateurs qui manquent, puis on vous remet un plan priorisé.",
        highlights: [
            "Goulots et contraintes identifiés",
            "Bilan de santé de vos données",
            "Indicateurs de performance prêts à suivre",
            "Feuille de route priorisée",
        ],
        problem:
            "Vous sentez que ça bloque quelque part, mais personne n'a le temps de prendre du recul. Les données existent, éparpillées entre l'ERP, des fichiers Excel et l'expérience de vos employés. Résultat : les décisions se prennent à l'instinct et les mêmes problèmes reviennent.",
        deliverables: [
            "Une cartographie de vos flux et de vos goulots d'étranglement",
            "Un bilan de santé de vos données (ERP, Excel, SQL)",
            "Un ensemble d'indicateurs de performance (KPI) adaptés à votre réalité",
            "Une feuille de route priorisée selon l'impact et l'effort",
            "Les occasions où une prévision vous ferait gagner du temps ou de l'argent",
        ],
        forWho:
            "Les manufacturiers et PME industrielles du Québec qui veulent croître, réduire leurs coûts, ou préparer une relève ou une vente.",
        steps: [
            { title: "Appel découverte", text: "Un premier échange gratuit pour comprendre votre entreprise et vos priorités." },
            { title: "Collecte", text: "Visite de vos opérations, entretiens avec vos équipes et accès à vos données." },
            { title: "Analyse", text: "On mesure, on croise les données et on identifie ce qui limite vraiment votre performance." },
            { title: "Restitution", text: "On présente le rapport, les indicateurs et la feuille de route à votre équipe." },
        ],
        funding:
            "Plusieurs programmes québécois et canadiens peuvent financer une partie d'un diagnostic numérique. On vous aide à vérifier votre admissibilité dès le premier appel.",
    },
    forecasting: {
        name: "Prévisions",
        kicker: "Modèles prédictifs sur mesure",
        tagline: "Anticipez la demande, les arrêts et les rebuts au lieu de les subir.",
        summary:
            "On transforme l'historique que vous avez déjà (CSV, Excel, base SQL) en un modèle de prévision sur mesure, hébergé et maintenu par nous, et accessible directement depuis vos outils.",
        highlights: [
            "Entraîné sur vos propres données",
            "Résultats dans Excel ou votre système",
            "Hébergé et maintenu par DiSy",
            "Précision suivie dans le temps",
        ],
        problem:
            "La planification se fait encore dans un chiffrier ou à l'instinct. Une commande inattendue, une machine qui lâche ou un lot rejeté, et tout l'horaire est à refaire. Les données pour l'anticiper existent souvent déjà, mais personne n'a le temps d'en tirer un modèle fiable.",
        deliverables: [
            "Un modèle de prévision entraîné sur vos propres données",
            "Des prévisions accessibles dans Excel, par webhook, ou écrites directement dans votre système",
            "L'hébergement, le réentraînement planifié et le suivi de la précision",
            "Un rapport clair sur ce que le modèle peut et ne peut pas prédire",
        ],
        forWho:
            "Les entreprises qui planifient encore à l'instinct ou dans un chiffrier, et qui disposent d'un historique de ventes, de production ou de maintenance.",
        steps: [
            { title: "Appel découverte", text: "On choisit ensemble ce qui vaut la peine d'être prédit." },
            { title: "Évaluation des données", text: "On vérifie que votre historique est suffisant et on le nettoie." },
            { title: "Construction", text: "On entraîne et on valide un modèle sur mesure avec ML.NET." },
            { title: "Intégration et suivi", text: "On branche le modèle à vos outils, puis on le surveille et le réentraîne." },
        ],
        useCases: ["Demande et ventes par produit", "Arrêts machines et maintenance", "Rebuts et rendement"],
    },
};

export const fr = {
    meta: {
        title: "DiSy | Analytique et opérations pour manufacturiers",
        description:
            "DiSy aide les manufacturiers du Québec à trouver où leurs opérations perdent du temps et de l'argent, puis à prévoir ce qui s'en vient.",
    },
    nav: {
        services: "services",
        about: "à propos",
        partners: "partenaires",
        // Label of the language switch: always names the *other* language.
        switchLanguage: "english",
        switchLanguageAria: "Switch to English",
        home: "Accueil DiSy",
    },
    common: {
        bookCall: "Réserver un appel",
        learnMore: "En savoir plus",
        allServices: "Tous les services",
        seeServices: "Voir nos services",
    },
    home: {
        titleLine1: "VOUS FAITES DES AFFAIRES,",
        titleLine2: "ON S'OCCUPE DES",
        titleAccent: "Données",
        intro:
            "DiSy (Digital Systems) est une firme montréalaise d'analytique et d'opérations au service des manufacturiers du Québec. On trouve où vos opérations perdent du temps et de l'argent, puis on bâtit les prévisions et les indicateurs qui vous gardent sur la bonne voie, dans les outils que vous utilisez déjà.",
        cta: "Découvrir nos services",
    },
    services: {
        overline: "Nos services",
        heroLine1: "Opérations",
        heroLine2: "Intelligentes",
        heroText:
            "Deux services pour les manufacturiers du Québec : comprendre où vos opérations perdent du temps et de l'argent, puis prévoir ce qui s'en vient.",
        listTitle: "Ce qu'on fait",
        listText: "Commencez par l'un ou l'autre. Chaque mandat débute par un appel gratuit et sans engagement.",
        loopTitle: "Deux services,",
        loopAccent: "une boucle",
        loopText: "Le Bilan trouve où une prévision rapporterait le plus. Les Prévisions la construisent et la maintiennent.",
        loop: [
            { title: "Diagnostiquer", text: "Le Bilan révèle les goulots, les contraintes et l'état de vos données." },
            { title: "Modéliser", text: "On construit les prévisions qui répondent aux problèmes identifiés." },
            { title: "Intégrer", text: "Les résultats arrivent dans Excel, votre ERP ou vos tableaux de bord." },
            { title: "Maintenir", text: "On suit vos indicateurs et on garde les modèles précis dans le temps." },
        ],
        ctaTitle: "Prêt à voir plus",
        ctaAccent: "clair",
        ctaTitleEnd: "\u00A0?",
        ctaText: "Réservez un appel gratuit et sans engagement. On vous dira franchement où on peut vous aider.",
        labels: {
            problem: "Le problème",
            deliverables: "Ce que vous obtenez",
            forWho: "Pour qui",
            steps: "Comment ça marche",
            useCases: "Exemples de prévisions",
            funding: "Financement",
        },
        items: services,
    },
    about: {
        overline: "À propos",
        heroLine1: "Qui est",
        heroLine2: "DiSy",
        intro:
            "DiSy, pour Digital Systems. Nous sommes une jeune firme montréalaise qui allie génie logiciel et génie des opérations pour aider les manufacturiers du Québec à prendre de meilleures décisions avec les données qu'ils ont déjà.",
        missionTitle: "Notre mission",
        mission:
            "Rendre l'analytique et l'IA de calibre industriel accessibles aux PME : sans jargon, sans projet interminable et sans exiger une équipe de science des données à l'interne.",
        valuesTitle: "Ce qui nous",
        valuesAccent: "guide",
        values: [
            {
                title: "Les opérations d'abord",
                text: "On mesure notre travail en arrêts évités, en stocks réduits et en capacité gagnée, pas en modèles livrés.",
            },
            {
                title: "Vos outils, pas les nôtres",
                text: "Les résultats arrivent dans Excel, votre ERP ou vos systèmes existants. Aucune nouvelle plateforme à apprendre.",
            },
            {
                title: "La transparence",
                text: "Une portée claire, un prix clair, et une réponse honnête quand un projet n'en vaut pas la peine.",
            },
            {
                title: "Ancrés au Québec",
                text: "Une équipe montréalaise qui travaille en français d'abord et qui connaît la réalité des PME d'ici.",
            },
        ],
        ctaText: "Voyez comment on peut vous aider.",
    },
    partners: {
        title: "Partenaires",
        text: "Bientôt.",
    },
    book: {
        overline: "Réserver un appel",
        heroLine1: "Parlons de vos",
        heroLine2: "opérations",
        text: "Un premier appel gratuit et sans engagement. On écoute, on pose les bonnes questions, et on vous dit franchement si le Bilan, les Prévisions ou ni l'un ni l'autre vous convient.",
        about: "Sujet\u00A0:",
        openExternal: "Ouvrir le calendrier dans un nouvel onglet",
        calendarTitle: "Calendrier de réservation DiSy",
        emailPrompt: "Écrivez-nous :",
        comingSoon: "La réservation en ligne arrive bientôt.",
    },
    notFound: {
        title: "Page introuvable",
        back: "Retour à l'accueil",
    },
};

export type Dictionary = typeof fr;
