import { Suspense } from "react";
import { Login } from "@/components/login";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login mode="signin" />
    </Suspense>
  );
}
