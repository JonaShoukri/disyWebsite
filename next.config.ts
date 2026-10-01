import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Old routes from the first version of the site.
    async redirects() {
        return [
            { source: "/services/consulting/appointment", destination: "/book", permanent: false },
            { source: "/services/:old(consulting|development|webmastering|automation)", destination: "/services", permanent: false },
        ];
    },
};

export default nextConfig;
