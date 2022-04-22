import { verifyUser } from "@/middleware/auth";
import { Box } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = verifyUser();

type Props = {
  email: string;
};

const Page: NextPage<Props> = ({ email }) => {
  console.log(email);
  return <Box p="4">{email}</Box>;
};

export default Page;
