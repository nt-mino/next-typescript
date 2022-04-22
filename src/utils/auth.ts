import { auth, db } from "@/plugins/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/**
 * @description ログイン処理
 * @param {String} email メールアドレス
 * @param {String} password パスワード
 * @returns Boolean
 */
export const login = async (email: string, password: string) => {
  // メールアドレスとパスワードでログインする
  const result = await signInWithEmailAndPassword(auth, email, password);
  // セッションIDを作成するためのIDを作成する
  const id = await result.user.getIdToken();
  // Cookieにセッションを付与するようにAPIを投げる
  const res = await fetch("/api/session/login", {
    method: "POST",
    body: JSON.stringify({ id }),
  });

  if (res.status === 200) {
    // ====== ========
    // TODO: firestoreに最終ログイン日を記録する処理
    // ====== ========
    return true;
  } else {
    return false;
  }
};

/**
 * @description ログアウト処理
 */
export const logout = async () => {
  // セッションCookieを削除するため、Firebase SDKでなくREST APIでログアウトさせる
  await fetch("/api/session/logout", { method: "POST" });
};
