import MembersIcon from "@/components/MembersIcon";
import { formatStatusLabel } from "@/components/StatusSelect";
import type { TemplateProps } from "@/types";
import { Status, getLabelForStatus } from "@/types";
import { httpifyURL, isValidURL } from "@/utils/string.utils";
import {
  USDollar,
  USDollarExact,
  numberWithCommas,
} from "../utils/number.utils";

const Template = ({ form }: { form: TemplateProps }) => {
  // Calculations
  const pricePerSqft = form.listingPrice / form.sqft;
  const maxAquisitionPrice = form.arv * 0.75;
  const acquisitionMargin = maxAquisitionPrice - form.listingPrice;

  return (
    <>
      {acquisitionMargin >= 100000 && <h3>Over 100k</h3>}

      {/* TODO: fix this not finding the element */}
      <div className="text-sm leading-none [&>p]:m-0" id="templateContainer">
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
                  <a href={httpifyURL(form.disclosures)}>
                    <span className="text-blue-600 no-underline">
                      {form.disclosures}
                    </span>
                  </a>
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
              <span className="whitespace-pre-wrap leading-relaxed">
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
              <p className="text-orange-900 font-sans">{form.privateNotes}</p>
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
