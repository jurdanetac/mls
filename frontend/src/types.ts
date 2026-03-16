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
  status: string;
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
  inputId: string;
  onChange: Function;
};
