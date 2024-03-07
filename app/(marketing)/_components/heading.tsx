"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & plans. Unified. Welcome to{" "}
        <span className="underline">Clotion</span>
      </h1>
      <h3 className="text-base sm:text-lg md:text-2xl font-medium">
        Clotion is the connected workspace where <br />
        better, faster work happens
      </h3>
      <Button>
        Enter Clotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
