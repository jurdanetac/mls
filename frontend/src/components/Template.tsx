import type { TemplateProps } from "../types";
import { isValidURL } from "../utils/string.utils";
import {
  USDollar,
  USDollarExact,
  numberWithCommas,
} from "../utils/number.utils";

// Import css modules stylesheet as styles
import styles from "./Template.module.css";

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

  // choose a CSS class based on acquisition margin sign
  const acquisitionMarginClass =
    acquisitionMargin > 0
      ? styles.marginPositive
      : acquisitionMargin < 0
        ? styles.marginNegative
        : styles.marginNeutral;

  return (
    <div className="container" id="templateContainer">
      <p>
        {address} <br />
        MLS #: <span className={styles.mlsNumber}>{mlsNumber}</span> <br />
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
        <span className={acquisitionMarginClass}>
          {USDollarExact.format(acquisitionMargin)}
        </span>
        <br />
        <br />
        Disclosures:{" "}
        {disclosures ? (
          isValidURL(disclosures) ? (
            <a
              href={
                disclosures.startsWith("http")
                  ? disclosures
                  : `https://${disclosures}`
              }
              className={styles.disclosuresLink}
            >
              {disclosures}
            </a>
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
            <span className={styles.openHouseSpan}>
              <pre className={styles.openHouseSpan}>{openHouse}</pre>
            </span>
          </>
        ) : null}
        <br />
        Private Notes:{" "}
        {privateNotes ? (
          <>
            <br />
            <span className={styles.privateNotesSpan}>{privateNotes}</span>
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
