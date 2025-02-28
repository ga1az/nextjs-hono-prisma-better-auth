"use client";

import client from "@/lib/trpc";
import type { InferRequestType } from "hono/client";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";

export default function PrivateRoute() {
  const $get = client.api.private.$get;
  const fetcher = (arg: InferRequestType<typeof $get>) => async () => {
    const res = await $get(arg);
    return await res.json();
  };

  const { data, error, isLoading } = useSWR(
    "private-route",
    fetcher({
      query: {
        name: "SWR",
      },
    })
  );

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-6 w-32" />
      </div>
    );
  }

  return (
    <div>
      <h1>Your user is {data?.user?.name}</h1>
      <p>{error?.message}</p>
    </div>
  );
}
