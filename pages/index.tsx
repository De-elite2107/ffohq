import { Sen } from "next/font/google";
import { Box } from "@chakra-ui/react";
import Layout from "@/component/layout";

const sen = Sen({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Layout/>
    </Box>
  );
}
