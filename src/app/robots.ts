import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for static export (`output: export`) on GitHub Pages.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
