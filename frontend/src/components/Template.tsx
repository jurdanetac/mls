import type { TemplateProps } from "../types";
import { USDollar, isValidURL, numberWithCommas } from "../utils";

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
      <p>{address}</p>
      <p>
        MLS #: <span className={styles.mlsNumber}>{mlsNumber}</span>
      </p>
      <p>Bedrooms: {bedrooms.toString()}</p>
      <p>
        Bathrooms: {fullBathrooms.toString()}|{halfBathrooms.toString()}
      </p>
      <p>Garage: {garage.toString()}</p>
      <p>
        Total SqFt: {numberWithCommas(sqft)} SqFt on {numberWithCommas(sqftLot)}{" "}
        SqFt Lot
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

      <br />

      <p>ARV: {USDollar.format(arv)}</p>
      <p>
        Max Acquisition Price: {USDollar.format(maxAquisitionPrice)} -&gt;{" "}
        <span className={acquisitionMarginClass}>
          {USDollar.format(acquisitionMargin)}
        </span>
      </p>

      <br />

      <p>
        Disclosures: {disclosures ? null : "Not specified"}
        {isValidURL(disclosures) ? (
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
        )}
      </p>

      {openHouse ? <br /> : null}
      <p>OH: {openHouse ? null : "Not specified"}</p>
      <span className={styles.openHouseSpan}>
        {openHouse ? (
          <pre className={styles.openHouseSpan}>{openHouse}</pre>
        ) : null}
      </span>

      {privateNotes ? <br /> : null}
      <p>
        Private Notes: {privateNotes ? <br /> : "Not specified"}
        <span className={styles.privateNotesSpan}>
          {privateNotes ? privateNotes : null}
        </span>
      </p>

      <br />
      <p>MLS Comps attached:</p>
    </div>
  );
};

export default Template;
