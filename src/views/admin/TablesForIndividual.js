import React from "react";

// components

import CardTableForIndividualForCertificates from "components/Cards/CardTableForIndividualForCertificates";
import CardTableForIndividualForBenefits from "components/Cards/CardTableForIndividualForBenefits";

export default function TablesForIndividual() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <CardTableForIndividualForCertificates />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableForIndividualForBenefits color="dark" />
        </div>
      </div>
    </>
  );
}
