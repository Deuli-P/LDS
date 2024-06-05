'use client'

import CtaPrimary from "@/components/CTA/cta-primary";
import CtaSecondary from "@/components/CTA/cta-secondary";
import CtaThirdy from "@/components/CTA/cta-thirdy";
import Image from "next/image";

export default function Home() {

  const handleTest = () => {
    console.log("Hello:");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <CtaPrimary onClick={handleTest}>
          <span>
            Test CTA Primary
          </span>
        </CtaPrimary>
        <CtaSecondary onClick={handleTest}>
          <span>
            Test CTA Secondary
          </span>
        </CtaSecondary>
        <CtaThirdy onClick={handleTest}>
          <span>
            Test CTA Thirdy
          </span>
        </CtaThirdy>
      </div>
    </main>
  );
}
