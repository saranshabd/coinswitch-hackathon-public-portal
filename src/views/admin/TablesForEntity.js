import React from "react";

// components

import CardTableForEntityForCertificate from "components/Cards/CardTableForEntityForCertificate";
import CardTableForEntityForUsers from "components/Cards/CardTableForEntityForUsers";

export default function TablesForEntity() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(
    "TATA_CLiQ_Customer-loyalty_A1"
  );
  const [pan, setPan] = React.useState("");
  function issueCertificate() {
    alert(
      `Certificate of type ${selectedCertificate} has been issued ${pan} individual.`
    );
  }
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableForEntityForCertificate
            setSelectedCertificate={setSelectedCertificate}
          />
          <div>
            Issue a "
            <span className="font-bold">
              {selectedCertificate.split("_").join(" ")}
            </span>
            " certificate to individual with{" "}
            <input
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="e.g. PLY232328A"
            />{" "}
            PAN number.
          </div>
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
            onClick={issueCertificate}
          >
            Issue certificate
          </button>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableForEntityForUsers color="dark" />
        </div>
      </div>
    </>
  );
}
