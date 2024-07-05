"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-7xl space-y-4 lg:flex lg:gap-[100px] items-center lg:my-10">
      <div className="max-w-4xl flex flex-col gap-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Your Ideas, Documents, & plans. Unified. Welcome to{" "}
          <span className="underline">Clotion</span>
        </h1>
        <h3 className="text-base sm:text-lg md:text-2xl font-medium">
          Clotion is the connected workspace where <br />
          better, faster work happens
        </h3>
      </div>
      {isLoading && (
        <div
          className="w-full flex items-center justify-center
      "
        >
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Clotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get clotion free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
