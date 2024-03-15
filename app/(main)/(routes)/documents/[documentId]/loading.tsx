import { Spinner } from "@/components/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner size="xl" />
    </div>
  );
};

export default Loading;
