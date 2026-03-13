import { useState } from "react";
import "./App.css";
import CopyTemplateButton from "./components/CopyTemplateButton";
import Template from "./components/Template";
import FieldInput from "./components/FieldInput";
import FieldTextarea from "./components/FieldTextarea";
import type { TemplateProps } from "./types";

const App = () => {
  const [form, setForm] = useState<TemplateProps>({
    address: "",
    mlsNumber: "",
    bedrooms: 0,
    fullBathrooms: 0,
    halfBathrooms: 0,
    garage: 0,
    sqft: 0,
    sqftLot: 0,
    listingPrice: 0,
    age: 0,
    status: "",
    dom: 0,
    listingAgent: "",
    listingAgentOffice: "",
    schoolDistrict: "",
    arv: 0,
    disclosures: "",
    openHouse: "",
    privateNotes: "",
  });

  const handleFormChange = <K extends keyof TemplateProps>(
    key: K,
    value: TemplateProps[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const templateRef = document.getElementById("templateContainer")!;

  return (
    <>
      <h1>MLS</h1>

      <section>
        <h2>Fields</h2>

        <div className="container" id="fieldsContainer">
          <div className="row">
            <FieldInput
              type="text"
              label="Address"
              inputId="addressInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormChange("address", event.target.value);
              }}
            />

            <FieldInput
              type="text"
              label="MLS #"
              inputId="mlsNumberInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormChange("mlsNumber", event.target.value);
              }}
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="Bedrooms"
              inputId="bedroomsInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("bedrooms", Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="Full Bathrooms"
              inputId="fullBahtroomsInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("fullBathrooms", Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="Half Bathrooms"
              inputId="halfBathroomsInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("halfBathrooms", Number(event.target.value))
              }
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="Garage"
              inputId="garageInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("garage", Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="SqFt"
              inputId="sqftInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("sqft", Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="SqFt Lot"
              inputId="sqftLotInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("sqftLot", Number(event.target.value))
              }
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="Listing Price ($)"
              inputId="listingPriceInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("listingPrice", Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="Age"
              inputId="ageInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("age", Number(event.target.value))
              }
            />

            <FieldInput
              type="text"
              label="Status"
              inputId="statusInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("status", event.target.value)
              }
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="DOM"
              inputId="domInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("dom", Number(event.target.value))
              }
            />

            <FieldInput
              type="text"
              label="Listing Agent"
              inputId="listingAgentInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("listingAgent", event.target.value)
              }
            />

            <FieldInput
              type="text"
              label="Listing Agent Office"
              inputId="listingAgentOfficeInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("listingAgentOffice", event.target.value)
              }
            />
          </div>

          <div className="row">
            <FieldInput
              type="text"
              label="School District"
              inputId="schoolDistrictInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("schoolDistrict", event.target.value)
              }
            />

            <FieldInput
              type="number"
              label="ARV ($)"
              inputId="arvInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("arv", Number(event.target.value))
              }
            />
          </div>
          <div className="row">
            <FieldTextarea
              label="Disclosures"
              inputId="disclosuresInput"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleFormChange("disclosures", event.target.value)
              }
            />

            <FieldTextarea
              label="Open House"
              inputId="openHouseInput"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleFormChange("openHouse", event.target.value)
              }
            />

            <FieldTextarea
              label="Private Notes"
              inputId="privateNotesInput"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleFormChange("privateNotes", event.target.value)
              }
            />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h2>Template</h2>
        <Template {...form} />
        <CopyTemplateButton element={templateRef} />
      </section>
    </>
  );
};

export default App;
