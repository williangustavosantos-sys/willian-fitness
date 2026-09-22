import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Willian Fitness",
    short_name: "Willian Fitness",
    description: "Personal Trainer a Milano e coaching online.",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#111827",
    icons: [
      {
        src: "/tiktok-app-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
