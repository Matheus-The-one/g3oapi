"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Powerful APIs for modern startups
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              g3o API provides the tools you need to build exceptional products.
              From payment processing to AI services, we've got you covered with
              reliable, scalable APIs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <Link href="/docs" className="text-sm font-semibold leading-6">
                View Documentation <span aria-hidden="true">→</span>
              </Link> */}
            </div>
          </div>

          {/* Feature highlights */}

          
        </div>
      </div>
    </div>
  );
}


