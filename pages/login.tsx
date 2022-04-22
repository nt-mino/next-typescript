import type { GetServerSideProps, NextPage } from "next";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { login } from "@/utils/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { verifyUser } from "@/middleware/auth";

const Page: NextPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const loginFun = async () => {
    const res = await login("minoru@test.com", "password");
    if (!res) return setMessage("ログインに失敗しました...");

    router.push("/user");
  };

  return (
    <Box p="4">
      <Flex direction="column" gap="4">
        <Text fontSize="18px" fontWeight="semibold">
          ログイン画面
        </Text>
        {message !== "" && <Text>{message}</Text>}
        <Button maxW="150px" w="full" onClick={loginFun}>
          ログイン
        </Button>
      </Flex>
    </Box>
  );
};

export default Page;
