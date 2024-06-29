import TestSample from "@/components/roots/test-sample";

import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="ml-12 mt-12">
      <h1>hello</h1>
      {/* <Suspense fallback={<p>loading...</p>}>
        <TestSample />
      </Suspense> */}
    </div>
  );
}
