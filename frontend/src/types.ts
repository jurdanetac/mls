// https://stackoverflow.com/a/79762129
const Status = {
  onMarket: "Active",
  offMarket: "Off Market",
  membersOnlyShow: "Members Only - Show",
  membersOnlyDoNotShow: "Members Only - Do Not Show",
} as const;

type Status = (typeof Status)[keyof typeof Status];

export { Status };

export type TemplateProps = {
  address: string;
  mlsNumber: string | null;
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms: number;
  garage: number;
  sqft: number;
  sqftLot: number;
  listingPrice: number;
  age: number;
  status: Status;
  dom: number;
  listingAgent: string;
  listingAgentOffice: string;
  schoolDistrict: string;
  arv: number;
  disclosures: string;
  openHouse: string;
  privateNotes: string;
};

// TODO: improve prop types
export type FieldInputProps = {
  type: string;
  label: string;
  inputId: string;
  onChange: Function;
};

export type FieldTextareaProps = {
  label: string;
  labelStyle?: React.CSSProperties;
  inputId: string;
  onChange: Function;
};
