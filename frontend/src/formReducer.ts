import { Status, type FormAction, type TemplateProps } from "./types";

export const initialState: TemplateProps = {
  address: "",
  mlsNumber: undefined,
  bedrooms: 0,
  fullBathrooms: 0,
  halfBathrooms: 0,
  garage: 0,
  sqft: 0,
  sqftLot: 0,
  listingPrice: 0,
  age: 0,
  status: Status.ACTIVE,
  dom: 0,
  listingAgent: "",
  listingAgentOffice: "",
  schoolDistrict: "",
  arv: 0,
  disclosures: undefined,
  openHouse: undefined,
  privateNotes: undefined,
};

export default function formReducer(
  state: TemplateProps,
  action: FormAction,
): TemplateProps {
  switch (action.type) {
    case "FORM_SET": {
      return action.form;
    }

    case "FORM_CHANGED": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case "FORM_RESET": {
      return initialState;
    }

    default: {
      // This ensures at compile time that all action types were handled
      // @ts-ignore
      const _exhaustiveCheck: never = action;
      return state;
    }
  }
}
