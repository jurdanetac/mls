import type { TemplateProps } from "../types";
import {
  USDollar,
  USDollarExact,
  numberWithCommas,
} from "../utils/number.utils";
import { httpifyURL, isValidURL } from "../utils/string.utils";

import {
  acquisitionMarginStyle,
  disclosuresLinkStyle,
  mlsNumberStyle,
  noSpacing,
  openHouseTextStyle,
  privateNotesStyle,
} from "../styles";

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

  return (
    <div className="container" id="templateContainer">
      <p style={noSpacing}>{address ? address : "Address not specified"}</p>

      <p style={noSpacing}>
        {mlsNumber && (
          <>
            MLS #: <span style={mlsNumberStyle}>{mlsNumber}</span>
          </>
        )}
      </p>

      <p style={noSpacing}>Bedrooms: {bedrooms.toString()}</p>
      <p style={noSpacing}>
        Bathrooms: {fullBathrooms.toString()}|{halfBathrooms.toString()}
      </p>
      <p style={noSpacing}>Garage: {garage.toString()}</p>
      <p style={noSpacing}>
        Total SqFt: {numberWithCommas(sqft)} SqFt on {numberWithCommas(sqftLot)}{" "}
        SqFt Lot
      </p>
      <p style={noSpacing}>
        Listing Price: {USDollarExact.format(listingPrice)} (
        {USDollar.format(pricePerSqft)}/SqFt)
      </p>
      <p style={noSpacing}>Age: {age}</p>
      <p style={noSpacing}>Status: {status}</p>
      <p style={noSpacing}>DOM: {dom}</p>
      <p style={noSpacing}>
        Listing Agent: {listingAgent} ({listingAgentOffice})
      </p>
      <p style={noSpacing}>School District: {schoolDistrict}</p>

      <p style={noSpacing}>ARV: {USDollarExact.format(arv)}</p>

      <p style={noSpacing}>
        Max Acquisition Price: {USDollarExact.format(maxAquisitionPrice)} -&gt;{" "}
        <span style={acquisitionMarginStyle(acquisitionMargin)}>
          {USDollarExact.format(acquisitionMargin)}
        </span>
      </p>

      <br />

      <p style={noSpacing}>
        Disclosures:{" "}
        {disclosures ? (
          isValidURL(disclosures) ? (
            <a href={httpifyURL(disclosures)} style={disclosuresLinkStyle}>
              {disclosures}
            </a>
          ) : (
            <span>{disclosures}</span>
          )
        ) : (
          "Not specified"
        )}
      </p>

      <br />

      <p style={noSpacing}>
        OH: {openHouse ? null : "Not specified"}
        {openHouse ? (
          <span style={openHouseTextStyle}>
            <pre style={openHouseTextStyle}>{openHouse}</pre>
          </span>
        ) : null}
      </p>

      <br />

      <p style={noSpacing}>
        Private Notes:{" "}
        {privateNotes ? (
          <span style={privateNotesStyle}>{privateNotes}</span>
        ) : (
          "Not specified"
        )}
      </p>

      <br />

      <p style={noSpacing}>MLS Comps attached:</p>
    </div>
  );
};

export default Template;
