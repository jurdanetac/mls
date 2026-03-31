import type { TemplateProps } from "../types";
import { Status, getLabelForStatus } from "../types";
import {
  USDollar,
  USDollarExact,
  numberWithCommas,
} from "../utils/number.utils";
import { httpifyURL, isValidURL } from "../utils/string.utils";
import MembersIcon from "./MembersIcon";
import { formatStatusLabel } from "./StatusSelect";

const Template = ({ form }: { form: TemplateProps }) => {
  // Calculations
  const pricePerSqft = form.listingPrice / form.sqft;
  const maxAquisitionPrice = form.arv * 0.75;
  const acquisitionMargin = maxAquisitionPrice - form.listingPrice;

  return (
    <>
      {acquisitionMargin >= 100000 && <h3>Over 100k</h3>}

      <div className="templateContainer">
        <p>{form.address ? form.address : "Address not specified"}</p>

        <p>
          {form.mlsNumber && (
            <>
              MLS #: <span>{form.mlsNumber}</span>
            </>
          )}
        </p>

        <p>Bedrooms: {form.bedrooms.toString()}</p>
        <p>
          Bathrooms: {form.fullBathrooms.toString()}|
          {form.halfBathrooms.toString()}
        </p>
        <p>Garage: {form.garage.toString()}</p>
        <p>
          Total SqFt: {numberWithCommas(form.sqft)} SqFt on{" "}
          {numberWithCommas(form.sqftLot)} SqFt Lot
        </p>
        <p>
          {form.status === Status.OFF_MARKET
            ? "Asking Price: "
            : "Listing Price: "}
          {USDollarExact.format(form.listingPrice)} (
          {USDollar.format(pricePerSqft)}/SqFt)
        </p>
        <p>Age: {form.age}</p>

        <p>
          Status: {formatStatusLabel(getLabelForStatus(form.status))}
          <MembersIcon status={form.status} />
        </p>

        {form.status === Status.ACTIVE && <p>DOM: {form.dom}</p>}

        <p>
          Listing Agent: {form.listingAgent} ({form.listingAgentOffice})
        </p>
        <p>School District: {form.schoolDistrict}</p>

        <br />

        <p>ARV: {USDollarExact.format(form.arv)}</p>

        <p>
          Max Acquisition Price: {USDollarExact.format(maxAquisitionPrice)}{" "}
          -&gt; <span>{USDollarExact.format(acquisitionMargin)}</span>
        </p>

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p> Disclosures: N/A </p>
        ) : (
          <>
            <p>Disclosures: {form.disclosures ? null : "Not specified"}</p>

            {form.disclosures ? (
              <p>
                {isValidURL(form.disclosures) ? (
                  <a href={httpifyURL(form.disclosures)}>{form.disclosures}</a>
                ) : (
                  <span>{form.disclosures}</span>
                )}
              </p>
            ) : null}
          </>
        )}

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p> OH: N/A </p>
        ) : (
          <>
            <p>OH: {form.openHouse ? null : "Not specified"}</p>
            {form.openHouse ? (
              <span>
                <pre>{form.openHouse}</pre>
              </span>
            ) : null}
          </>
        )}

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p> Private Notes: N/A </p>
        ) : (
          <>
            <p>Private Notes: {form.privateNotes ? null : "Not specified"}</p>

            {form.privateNotes ? (
              <p>
                <span>{form.privateNotes}</span>
              </p>
            ) : null}
          </>
        )}

        <br />

        <p>MLS Comps attached:</p>
      </div>
    </>
  );
};

export default Template;
