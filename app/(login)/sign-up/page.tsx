import { Suspense } from "react";
import { Login } from "@/components/login";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login mode="signup" />
    </Suspense>
  );
}
