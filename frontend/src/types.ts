// https://stackoverflow.com/a/79762129
const Status = {
  ACTIVE: "active",
  OFF_MARKET: "off",
  MEMBERS_ONLY_SHOW: "show",
  MEMBERS_ONLY_DO_NOT_SHOW: "donotshow",
} as const;

type Status = (typeof Status)[keyof typeof Status];

export { Status };

export const getLabelForStatus = (status: string) => {
  return Object.entries(Status).find(([_, value]) => {
    return value === status;
  })![0];
};

export type TemplateProps = {
  // required, most can be found in county records or on the MLS listing
  status: Status;
  address: string;
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms: number;
  garage: number;
  sqft: number;
  sqftLot: number;
  listingPrice: number;
  age: number;
  listingAgent: string;
  listingAgentOffice: string;
  schoolDistrict: string;
  arv: number;

  // off market optionals
  mlsNumber?: string;
  dom?: number;
  disclosures?: string;
  openHouse?: string;
  privateNotes?: string;
};

// Define a strict type for your actions
export type FormAction =
  | { type: "FORM_RESET" }
  | { type: "FORM_SET"; form: TemplateProps }
  | { type: "FORM_CHANGED"; field: keyof TemplateProps; value: any };
