export type TemplateProps = {
  address: string;
  mlsNumber: string;
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms: number;
  garage: number;
  sqft: number;
  sqftLot: number;
  listingPrice: number;
  age: number;
};

export type FieldInputProps = {
  type: string;
  label: string;
  inputId: string;
  onChange: Function;
};
