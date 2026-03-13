import type { TemplateProps } from "../types";
import { isValidURL, httpifyURL } from "../utils/string.utils";
import {
  USDollar,
  USDollarExact,
  numberWithCommas,
} from "../utils/number.utils";

const Template = (props: TemplateProps) => {
  const {
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
  } = props;

  // Calculations
  const pricePerSqft = listingPrice / sqft;
  const maxAquisitionPrice = arv * 0.75;
  const acquisitionMargin = maxAquisitionPrice - listingPrice;

  // shared style objects
  const mlsNumberStyle = { fontWeight: "bold", fontSize: "14px" };
  const disclosuresLinkStyle = {
    color: "#0066cc",
    textDecoration: "none",
    fontSize: "13px",
  };
  const openHouseTextStyle = { whiteSpace: "pre-wrap", fontSize: "13px" };
  const privateNotesStyle = {
    color: "#993300",
    fontFamily: "Verdana, sans-serif",
    fontSize: "13px",
  };

  // choose inline styles based on acquisition margin sign
  const acquisitionMarginStyle =
    acquisitionMargin > 0
      ? { color: "green", fontWeight: "bold", fontSize: "14px" }
      : acquisitionMargin < 0
        ? { color: "red", fontWeight: "bold", fontSize: "14px" }
        : { color: "black", fontWeight: "bold", fontSize: "14px" };

  return (
    <div className="container" id="templateContainer">
      <p>
        {address} <br />
        MLS #: <span style={mlsNumberStyle}>{mlsNumber}</span> <br />
        Bedrooms: {bedrooms.toString()} <br />
        Bathrooms: {fullBathrooms.toString()}|{halfBathrooms.toString()} <br />
        Garage: {garage.toString()} <br />
        Total SqFt: {numberWithCommas(sqft)} SqFt on {numberWithCommas(sqftLot)}{" "}
        SqFt Lot <br />
        Listing Price: {USDollarExact.format(listingPrice)} (
        {USDollar.format(pricePerSqft)}/SqFt) <br />
        Age: {age} <br />
        Status: {status} <br />
        DOM: {dom} <br />
        Listing Agent: {listingAgent} ({listingAgentOffice}) <br />
        School District: {schoolDistrict} <br />
        <br />
        ARV: {USDollarExact.format(arv)} <br />
        Max Acquisition Price: {USDollarExact.format(
          maxAquisitionPrice,
        )} -&gt;{" "}
        <span style={acquisitionMarginStyle}>
          {USDollarExact.format(acquisitionMargin)}
        </span>
        <br />
        <br />
        Disclosures:{" "}
        {disclosures ? (
          isValidURL(disclosures) ? (
            <>
              <a href={httpifyURL(disclosures)} style={disclosuresLinkStyle}>
                {disclosures}
              </a>
              <br />
            </>
          ) : (
            <span>{disclosures}</span>
          )
        ) : (
          "Not specified"
        )}
        <br />
        OH: {openHouse ? null : "Not specified"}
        {openHouse ? (
          <>
            <br />
            <span style={openHouseTextStyle}>
              <pre style={openHouseTextStyle}>{openHouse}</pre>
            </span>
          </>
        ) : null}
        <br />
        Private Notes:{" "}
        {privateNotes ? (
          <>
            <br />
            <span style={privateNotesStyle}>{privateNotes}</span>
          </>
        ) : (
          "Not specified"
        )}
        <br />
        <br />
        MLS Comps attached:
      </p>
    </div>
  );
};

export default Template;
