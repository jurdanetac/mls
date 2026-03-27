import type { TemplateProps } from "../types";
import { Status, getLabelForStatus } from "../types";
import {
  USDollar,
  USDollarExact,
  numberWithCommas,
} from "../utils/number.utils";
import { formatLabel, httpifyURL, isValidURL } from "../utils/string.utils";

import {
  acquisitionMarginStyle,
  disclosuresLinkStyle,
  mlsNumberStyle,
  noSpacing,
  openHouseTextStyle,
  privateNotesStyle,
} from "../styles";
import MembersIcon from "./MembersIcon";

const Template = ({ form }: { form: TemplateProps }) => {
  // Calculations
  const pricePerSqft = form.listingPrice / form.sqft;
  const maxAquisitionPrice = form.arv * 0.75;
  const acquisitionMargin = maxAquisitionPrice - form.listingPrice;
  const acquisitionMarginStyleToUse = acquisitionMarginStyle(acquisitionMargin);

  return (
    <>
      {acquisitionMargin >= 100000 && (
        <h3 style={acquisitionMarginStyleToUse}>Over 100k</h3>
      )}

      <div className="container" id="templateContainer">
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
        <p
          style={{
            ...noSpacing,
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          Status: {formatLabel(getLabelForStatus(form.status))}
          <MembersIcon status={form.status} />
        </p>

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
          <span style={acquisitionMarginStyleToUse}>
            {USDollarExact.format(acquisitionMargin)}
          </span>
        </p>

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p style={noSpacing}> Disclosures: N/A </p>
        ) : (
          <>
            <p style={noSpacing}>
              {" "}
              Disclosures: {form.disclosures ? null : "Not specified"}{" "}
            </p>

            {form.disclosures ? (
              <p style={noSpacing}>
                {isValidURL(form.disclosures) ? (
                  <a
                    href={httpifyURL(form.disclosures)}
                    style={disclosuresLinkStyle}
                  >
                    {form.disclosures}
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
          <p style={noSpacing}> OH: N/A </p>
        ) : (
          <>
            <p style={noSpacing}>
              OH: {form.openHouse ? null : "Not specified"}
            </p>
            {form.openHouse ? (
              <span style={openHouseTextStyle}>
                <pre style={openHouseTextStyle}>{form.openHouse}</pre>
              </span>
            ) : null}
          </>
        )}

        <br />

        {form.status === Status.OFF_MARKET ? (
          <p style={noSpacing}> Private Notes: N/A </p>
        ) : (
          <>
            <p style={noSpacing}>
              Private Notes: {form.privateNotes ? null : "Not specified"}
            </p>

            {form.privateNotes ? (
              <p style={noSpacing}>
                <span style={privateNotesStyle}>{form.privateNotes}</span>
              </p>
            ) : null}
          </>
        )}

        <br />

        <p style={noSpacing}>MLS Comps attached:</p>
      </div>
    </>
  );
};

export default Template;
