import type { NextPage } from "next";
import { Box, Button } from "@chakra-ui/react";

const Page: NextPage = () => {
  return (
    <Box>
      {/* テストカード番号 「4242　4242　4242　4242」 */}
      <form action="/api/stripe/checkout" method="POST">
        <section>
          <button type="submit" role="link">
            支払画面へ
          </button>
        </section>
      </form>
    </Box>
  );
};

export default Page;
