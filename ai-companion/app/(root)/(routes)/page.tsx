import React from "react";
import { UserButton } from "@clerk/nextjs";

function RootPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default RootPage;
