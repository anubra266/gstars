import { chakra } from "@chakra-ui/react";
import { Landinghero } from "~/components/landing/hero";
import { Navbar } from "~/components/landing/navbar";

export default function Index() {
  return (
    <chakra.div>
      <Navbar />
      <Landinghero />
    </chakra.div>
  );
}
