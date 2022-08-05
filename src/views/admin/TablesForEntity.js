import React from "react";

// components

import CardTableForEntityForCertificate from "components/Cards/CardTableForEntityForCertificate";
import CardTableForEntityForUsers from "components/Cards/CardTableForEntityForUsers";

export default function TablesForEntity() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableForEntityForCertificate />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableForEntityForUsers color="dark" />
        </div>
      </div>
    </>
  );
}
