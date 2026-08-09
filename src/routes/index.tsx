import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Court } from "@/components/portfolio/Court";
import { Work } from "@/components/portfolio/Work";
import { Connect } from "@/components/portfolio/Connect";
import { Footer } from "@/components/portfolio/Footer";

const title = "Ayush Kolla — Full-Stack Developer, Hyderabad";
const description =
  "Ayush Kolla builds full-stack apps in Java and Python from Hyderabad — Farmer Forward, Awaaz, B-Trade — and trains across basketball, cricket, badminton, gym and running.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Court />
        <Work />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
