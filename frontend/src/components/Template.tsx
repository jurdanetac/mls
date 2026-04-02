import MembersIcon from "@/components/MembersIcon";
import { formatStatusLabel } from "@/components/StatusSelect";
import type { TemplateProps } from "@/types";
import { Status, getLabelForStatus } from "@/types";
import { httpifyURL, isValidURL } from "@/utils/string.utils";
import {
  acquisitionMarginStyle,
  disclosuresLinkStyle,
  mlsNumberStyle,
  noSpacing,
  openHouseTextStyle,
  privateNotesStyle,
} from "../styles";
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
      <div id="templateContainer">
        <p style={noSpacing}>
          {form.address ? form.address : "Address not specified"}
        </p>

        <p style={noSpacing}>
          {form.mlsNumber && (
            <>
              MLS #: <span style={mlsNumberStyle}>{form.mlsNumber}</span>
            </>
          )}
        </p>

        <p style={noSpacing}>Bedrooms: {form.bedrooms.toString()}</p>
        <p style={noSpacing}>
          Bathrooms: {form.fullBathrooms.toString()}|
          {form.halfBathrooms.toString()}
        </p>
        <p style={noSpacing}>Garage: {form.garage.toString()}</p>
        <p style={noSpacing}>
          Total SqFt: {numberWithCommas(form.sqft)} SqFt on{" "}
          {numberWithCommas(form.sqftLot)} SqFt Lot
        </p>
        <p style={noSpacing}>
          {form.status === Status.OFF_MARKET
            ? "Asking Price: "
            : "Listing Price: "}
          {USDollarExact.format(form.listingPrice)} (
          {USDollar.format(pricePerSqft)}/SqFt)
        </p>
        <p style={noSpacing}>Age: {form.age}</p>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <p style={noSpacing}>
            Status: {formatStatusLabel(getLabelForStatus(form.status))}
          </p>
          <MembersIcon status={form.status} />
        </div>

        {form.status === Status.ACTIVE && (
          <p style={noSpacing}>DOM: {form.dom}</p>
        )}

        <p style={noSpacing}>
          Listing Agent: {form.listingAgent} ({form.listingAgentOffice})
        </p>
        <p style={noSpacing}>School District: {form.schoolDistrict}</p>

        <br />

        <p style={noSpacing}>ARV: {USDollarExact.format(form.arv)}</p>

        <p style={noSpacing}>
          Max Acquisition Price: {USDollarExact.format(maxAquisitionPrice)}{" "}
          -&gt;{" "}
          <span style={acquisitionMarginStyle(acquisitionMargin)}>
            {USDollarExact.format(acquisitionMargin)}
          </span>
        </p>

        <br />

        {form.status === Status.OFF_MARKET && (
          <p style={noSpacing}>Disclosures: N/A </p>
        )}

        {form.status !== Status.OFF_MARKET && (
          <p style={noSpacing}>
            Disclosures: {form.disclosures ? null : "Not specified"}
          </p>
        )}

        {form.status !== Status.OFF_MARKET && form.disclosures ? (
          <p style={noSpacing}>
            {isValidURL(form.disclosures) ? (
              <a
                href={httpifyURL(form.disclosures)}
                style={disclosuresLinkStyle}
              >
                {form.disclosures}
              </a>
            ) : (
              <>{form.disclosures}</>
            )}
          </p>
        ) : null}

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p style={noSpacing}>OH: N/A </p>
        ) : (
          <p style={noSpacing}>OH: {form.openHouse ? null : "Not specified"}</p>
        )}

        {form.status !== Status.OFF_MARKET && form.openHouse && (
          <p style={noSpacing}>
            <pre style={openHouseTextStyle}>{form.openHouse}</pre>
          </p>
        )}

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p style={noSpacing}>Private Notes: N/A </p>
        ) : (
          <p style={noSpacing}>
            Private Notes: {form.privateNotes ? null : "Not specified"}
          </p>
        )}

        {form.status !== Status.OFF_MARKET && form.privateNotes && (
          <p style={noSpacing}>
            <span style={privateNotesStyle}>{form.privateNotes}</span>
          </p>
        )}

        <br />

        <p style={noSpacing}>MLS Comps attached:</p>
      </div>
    </>
  );
};

export default Template;
