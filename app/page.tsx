import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-red-500">Hello</p>
      <Button variant={"destructive"}>button</Button>
    </div>
  );
}
