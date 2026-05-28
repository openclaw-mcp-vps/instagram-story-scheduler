import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryQueue – Schedule Instagram Stories in Advance",
  description: "Upload and schedule Instagram stories at optimal posting times based on audience analytics. Built for social media managers and influencers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="71a1b18a-07b1-454f-a1b7-261aea4d0220"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}