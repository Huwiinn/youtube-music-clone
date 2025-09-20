import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  console.log("Before homepage sleep------------");
  await sleep(5000);
  console.log("After homepage sleep------------");

  return <div>page</div>;
};

export default page;
