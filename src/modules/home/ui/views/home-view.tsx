"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>ローディング中...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      {/** logged in as */}
      <p className="text-lg font-bold">ログイン中: {session.user.name}</p>
      {/** sign out */}
      <Button
        className="mt-4"
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/sign-in");
              },
            },
          })
        }
      >
        ログアウト
      </Button>
    </div>
  );
};

export default HomeView;
