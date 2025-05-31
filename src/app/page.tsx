"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: () => {
          window.alert("ユーザー登録に失敗しました");
        },
        onSuccess: () => {
          window.alert("ユーザー登録に成功しました");
          setName("");
          setEmail("");
          setPassword("");
        },
      },
    );
  };

  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: () => {
          window.alert("ユーザー登録に失敗しました");
        },
        onSuccess: () => {
          window.alert("ユーザー登録に成功しました");
          setName("");
          setEmail("");
          setPassword("");
        },
      },
    );
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        {/** logged in as */}
        <p className="text-lg font-bold">ログイン中: {session.user.name}</p>
        {/** sign out */}
        <Button className="mt-4" onClick={() => authClient.signOut()}>
          ログアウト
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input
          placeholder="名前を入力してください"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="パスワードを入力してください"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>ユーザー登録</Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4">
        <Input
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="パスワードを入力してください"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>ログイン</Button>
      </div>
    </div>
  );
}
