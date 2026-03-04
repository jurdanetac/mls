import { useState } from "react";
import "./App.css";
import CopyToClipboardButton from "./components/CopyToClipboardButton";
import Template from "./components/Template";
import FieldInput from "./components/FieldInput";
import FieldTextarea from "./components/FieldTextarea";

const App = () => {
  // TODO: Refactor to use a single state object for all fields instead of individual states for each field
  const [address, setAddress] = useState("");
  const [mlsNumber, setMlsNumber] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [fullBathrooms, setFullBathrooms] = useState(0);
  const [halfBathrooms, setHalfBathrooms] = useState(0);
  const [garage, setGarage] = useState(0);
  const [sqft, setSqft] = useState(0);
  const [sqftLot, setSqftLot] = useState(0);
  const [listingPrice, setListingPrice] = useState(0);
  const [age, setAge] = useState(0);
  const [status, setStatus] = useState("");
  const [dom, setDom] = useState(0);
  const [listingAgent, setListingAgent] = useState("");
  const [listingAgentOffice, setListingAgentOffice] = useState("");
  const [schoolDistrict, setSchoolDistrict] = useState("");
  const [arv, setArv] = useState(0);
  const [disclosures, setDisclosures] = useState("");
  const [oh, setOh] = useState("");
  const [privateNotes, setPrivateNotes] = useState("");

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
                setAddress(event.target.value);
              }}
            />

            <FieldInput
              type="text"
              label="MLS #"
              inputId="mlsNumberInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setMlsNumber(event.target.value);
              }}
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="Bedrooms"
              inputId="bedroomsInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBedrooms(Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="Full Bathrooms"
              inputId="fullBahtroomsInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFullBathrooms(Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="Half Bathrooms"
              inputId="halfBathroomsInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setHalfBathrooms(Number(event.target.value))
              }
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="Garage"
              inputId="garageInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setGarage(Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="SqFt"
              inputId="sqftInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSqft(Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="SqFt Lot"
              inputId="sqftLotInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSqftLot(Number(event.target.value))
              }
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="Listing Price ($)"
              inputId="listingPriceInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setListingPrice(Number(event.target.value))
              }
            />

            <FieldInput
              type="number"
              label="Age"
              inputId="ageInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAge(Number(event.target.value))
              }
            />

            <FieldInput
              type="text"
              label="Status"
              inputId="statusInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setStatus(event.target.value);
              }}
            />
          </div>

          <div className="row">
            <FieldInput
              type="number"
              label="DOM"
              inputId="domInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setDom(Number(event.target.value))
              }
            />

            <FieldInput
              type="text"
              label="Listing Agent"
              inputId="listingAgentInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setListingAgent(event.target.value);
              }}
            />

            <FieldInput
              type="text"
              label="Listing Agent Office"
              inputId="listingAgentOfficeInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setListingAgentOffice(event.target.value);
              }}
            />
          </div>

          <div className="row">
            <FieldInput
              type="text"
              label="School District"
              inputId="schoolDistrictInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSchoolDistrict(event.target.value);
              }}
            />

            <FieldInput
              type="number"
              label="ARV ($)"
              inputId="arvInput"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setArv(Number(event.target.value))
              }
            />
          </div>
          <div className="row">
            <FieldTextarea
              label="Disclosures"
              inputId="disclosuresInput"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setDisclosures(event.target.value);
              }}
            />

            <FieldTextarea
              label="Open House"
              inputId="ohInput"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setOh(event.target.value);
              }}
            />

            <FieldTextarea
              label="Private Notes"
              inputId="privateNotesInput"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setPrivateNotes(event.target.value);
              }}
            />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h2>Template</h2>
        <Template
          mlsNumber={mlsNumber}
          address={address}
          bedrooms={bedrooms}
          fullBathrooms={fullBathrooms}
          halfBathrooms={halfBathrooms}
          garage={garage}
          sqft={sqft}
          sqftLot={sqftLot}
          listingPrice={listingPrice}
          age={age}
          status={status}
          dom={dom}
          listingAgent={listingAgent}
          listingAgentOffice={listingAgentOffice}
          schoolDistrict={schoolDistrict}
          arv={arv}
          disclosures={disclosures}
          openHouse={oh}
          privateNotes={privateNotes}
        />
        <CopyToClipboardButton />
      </section>
    </>
  );
};

export default App;
