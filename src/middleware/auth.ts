import { GetServerSidePropsContext } from "next";
import { firebaseAdmin } from "@/plugins/firebaseAdmin";
import nookies from "nookies";

export const verifyUser = () => async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  const session = cookies.session || "";

  // セッションIDを検証して、認証情報を取得する
  const user = await firebaseAdmin
    .auth()
    .verifySessionCookie(session, true)
    .catch(() => null);

  // 認証情報が無い場合は、ログイン画面へ遷移させる
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      email: user.email,
    },
  };
};
