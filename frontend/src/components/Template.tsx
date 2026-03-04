import type { TemplateProps } from "../types";
import { USDollar } from "../utils";

const Template = ({
  address,
  mlsNumber,
  bedrooms,
  fullBathrooms,
  halfBathrooms,
  garage,
  sqft,
  sqftLot,
  listingPrice,
  age,
  status,
  dom,
  listingAgent,
  listingAgentOffice,
  schoolDistrict,
  arv,
  disclosures,
  openHouse,
  privateNotes,
}: TemplateProps) => {
  const pricePerSqft = listingPrice / sqft;
  const maxAquisitionPrice = arv * 0.75;
  const acquisitionMargin = maxAquisitionPrice - listingPrice;

  const stylesForAcquisitionMargin: React.CSSProperties = (function () {
    if (acquisitionMargin > 0) {
      return { color: "green", fontWeight: "bold", fontSize: "18px" };
    } else if (acquisitionMargin < 0) {
      return { color: "red", fontWeight: "bold", fontSize: "18px" };
    } else {
      return {};
    }
  })();

  return (
    <div className="container" id="templateContainer">
      <p>{address}</p>
      <p>MLS #: {mlsNumber}</p>
      <p>Bedrooms: {bedrooms.toString()}</p>
      <p>
        Bathrooms: {fullBathrooms.toString()}|{halfBathrooms.toString()}
      </p>
      <p>Garage: {garage.toString()}</p>
      <p>
        Total SqFt: {sqft.toString()} SqFt on {sqftLot.toString()} SqFt Lot
      </p>
      <p>
        Listing Price: {USDollar.format(listingPrice)} (
        {USDollar.format(pricePerSqft)}/SqFt)
      </p>
      <p>Age: {age}</p>
      <p>Status: {status}</p>
      <p>DOM: {dom}</p>
      <p>
        Listing Agent: {listingAgent} ({listingAgentOffice})
      </p>
      <p>School District: {schoolDistrict}</p>
      <p>ARV: {USDollar.format(arv)}</p>
      <p>
        Max Acquisition Price: {USDollar.format(maxAquisitionPrice)} -&gt;{" "}
        <span style={stylesForAcquisitionMargin}>
          {USDollar.format(acquisitionMargin)}
        </span>
      </p>
      <p>Disclosures: {disclosures || "Not specified"}</p>
      <p>OH: {openHouse || "Not specified"}</p>
      <p>Private notes: {privateNotes || "Not specified"}</p>
      <br />
      <p>MLS Comps attached:</p>
    </div>
  );
};

export default Template;
