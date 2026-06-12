import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const propertySchema = `
    {
      "type": "OBJECT",
      "properties": {
        "address": {
          "type": "STRING",
          "description": "Address of the subject property"
        },
        "mlsNumber": {
          "type": "STRING",
          "nullable": true,
          "description": "MLS Number of the listing, only exists if on market"
        },
        "bedrooms": {
          "type": "NUMBER",
          "description": "Number of bedrooms"
        },
        "fullBathrooms": {
          "type": "NUMBER",
          "description": "Number of full bathrooms"
        },
        "halfBathrooms": {
          "type": "NUMBER",
          "description": "Number of half bathrooms"
        },
        "garage": {
          "type": "NUMBER",
          "description": "Number of garage spaces"
        },
        "sqft": {
          "type": "NUMBER",
          "description": "Primary square footage of the property"
        },
        "sqftLot": {
          "type": "NUMBER",
          "description": "Square footage of the lot"
        },
        "listingPrice": {
          "type": "NUMBER",
          "description": "Asking price"
        },
        "age": {
          "type": "NUMBER",
          "nullable": true,
          "description": "Number of years since property was built"
        },
        "dom": {
          "type": "NUMBER",
          "nullable": true,
          "description": "Days On Market"
        },
        "listingAgent": {
          "type": "STRING",
          "description": "Agent who listed the property"
        },
        "listingAgentOffice": {
          "type": "STRING",
          "description": "Company of the Listing Agent"
        },
        "schoolDistrict": {
          "type": "STRING",
          "description": "School district or districts names (separated by 'and') for the subject property. If they are not present on the plaintext, research it yourself. Do not add School District at the end of them since it's redundant"
        },
        "arv": {
          "type": "NUMBER",
          "description": "After Repair Value estimate, compute it from the comps provided. Distill the ones that are not good comps if necessary and beware of schools rankings"
        },
        "disclosures": {
          "type": "STRING",
          "nullable": true,
          "description": "Link to the disclosures or date when available"
        },
        "openHouse": {
          "type": "STRING",
          "nullable": true,
          "description": "Dates and times of Open House"
        },
        "privateNotes": {
          "type": "STRING",
          "nullable": true,
          "description": "Agent description of the property"
        }
      },
      "required": [
        "address",
        "mlsNumber",
        "bedrooms",
        "fullBathrooms",
        "halfBathrooms",
        "garage",
        "sqft",
        "sqftLot",
        "listingPrice",
        "age",
        "dom",
        "listingAgent",
        "listingAgentOffice",
        "schoolDistrict",
        "arv",
        "disclosures",
        "openHouse",
        "privateNotes"
      ]
    }
  `;

export const prompt = ({
  listing,
  comps,
}: {
  listing: string;
  comps: string;
}) => {
  return `
        Please parse the following plaintext and extract the relevant property information into the schema.
        Return only the json object for the following schema, do not add your format backticks either, just the raw object.
        Read the schema carefully since there are the instructions for what you have to do. Remember your response will be
        parsed by JSON.parse(response.text). Also, do not alter any of the information, please be faithful to the source you receive.

        PLAINTEXT STARTS HERE:
        ${listing}
        PLAINTEXT ENDS HERE

        SCHEMA STARTS HERE:
        ${propertySchema}
        SCHEMA ENDS HERE

        COMPS STARTS HERE:
        ${comps}
        COMPS ENDS HERE
        `;
};

export const ai = new GoogleGenAI({ apiKey: apiKey });
