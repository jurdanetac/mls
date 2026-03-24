import { useState } from "react";
import greenMCrossedUrl from "../assets/green-m-crossed.png";
import greenMUrl from "../assets/green-m.png";
import "./App.css";
import CopyTemplateButton from "./components/CopyTemplateButton";
import Template from "./components/Template";
import {
  disclosuresLinkStyle,
  flex,
  openHouseTextStyle,
  privateNotesStyle,
} from "./styles";
import { Status, type TemplateProps } from "./types";

const App = () => {
  const [form, setForm] = useState<TemplateProps>({
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
    status: Status.onMarket,
    dom: undefined,
    listingAgent: "",
    listingAgentOffice: "",
    schoolDistrict: "",
    arv: 0,
    disclosures: undefined,
    openHouse: undefined,
    privateNotes: undefined,
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
      <div style={{ ...flex, gap: "8px", alignItems: "center" }}>
        <select
          name="status"
          id="statusSelect"
          onChange={(event) =>
            handleFormChange("status", event.target.value as Status)
          }
        >
          <option value={Status.onMarket}>Active</option>
          <option value={Status.membersOnlyShow}>Members Only - Show</option>
          <option value={Status.membersOnlyDoNotShow}>
            Members Only - Do Not Show
          </option>
          <option value={Status.offMarket}>Off Market</option>
        </select>

        {form.status.startsWith("Members") && (
          <div>
            <img
              id="statusIcon"
              width="16px"
              height="16px"
              alt="Status Icon"
              src={
                form.status === Status.membersOnlyShow
                  ? greenMUrl
                  : greenMCrossedUrl
              }
            />
          </div>
        )}
      </div>

      <section>
        <h2>Fields</h2>

        <div className="container" id="fieldsContainer">
          <div className="row">
            <div>
              <label htmlFor="addressInput">Address</label>
              <input
                type="text"
                id="addressInput"
                onChange={(e) => handleFormChange("address", e.target.value)}
              />
            </div>

            {form.status !== Status.offMarket && (
              <div>
                <label htmlFor="mlsNumberInput">MLS #</label>
                <input
                  type="text"
                  id="mlsNumberInput"
                  onChange={(e) =>
                    handleFormChange("mlsNumber", e.target.value)
                  }
                />
              </div>
            )}
          </div>

          <div className="row">
            <div>
              <label htmlFor="bedroomsInput">Bedrooms</label>
              <input
                type="number"
                id="bedroomsInput"
                onChange={(e) =>
                  handleFormChange("bedrooms", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label htmlFor="fullBathroomsInput">Full Bathrooms</label>
              <input
                type="number"
                id="fullBathroomsInput"
                onChange={(e) =>
                  handleFormChange("fullBathrooms", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label htmlFor="halfBathroomsInput">Half Bathrooms</label>
              <input
                type="number"
                id="halfBathroomsInput"
                onChange={(e) =>
                  handleFormChange("halfBathrooms", Number(e.target.value))
                }
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label htmlFor="garageInput">Garage</label>
              <input
                type="number"
                id="garageInput"
                onChange={(e) =>
                  handleFormChange("garage", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label htmlFor="sqftInput">SqFt</label>
              <input
                type="number"
                id="sqftInput"
                onChange={(e) =>
                  handleFormChange("sqft", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label htmlFor="sqftLotInput">SqFt Lot</label>
              <input
                type="number"
                id="sqftLotInput"
                onChange={(e) =>
                  handleFormChange("sqftLot", Number(e.target.value))
                }
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label htmlFor="listingPriceInput">
                {form.status === Status.offMarket
                  ? "Asking Price ($)"
                  : "Listing Price ($)"}
              </label>
              <input
                type="number"
                id="listingPriceInput"
                onChange={(e) =>
                  handleFormChange("listingPrice", Number(e.target.value))
                }
              />
            </div>

            <div>
              <label htmlFor="ageInput">Age</label>
              <input
                type="number"
                id="ageInput"
                onChange={(e) =>
                  handleFormChange("age", Number(e.target.value))
                }
              />
            </div>
          </div>

          <div className="row">
            {form.status === Status.onMarket && (
              <div>
                <label htmlFor="domInput">DOM</label>
                <input
                  type="number"
                  id="domInput"
                  onChange={(e) =>
                    handleFormChange("dom", Number(e.target.value))
                  }
                />
              </div>
            )}

            <div>
              <label htmlFor="listingAgentInput">Listing Agent</label>
              <input
                type="text"
                id="listingAgentInput"
                onChange={(e) =>
                  handleFormChange("listingAgent", e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="listingAgentOfficeInput">
                Listing Agent Office
              </label>
              <input
                type="text"
                id="listingAgentOfficeInput"
                onChange={(e) =>
                  handleFormChange("listingAgentOffice", e.target.value)
                }
              />
            </div>
          </div>

          <div className="row">
            <div>
              <label htmlFor="schoolDistrictInput">School District</label>
              <input
                type="text"
                id="schoolDistrictInput"
                onChange={(e) =>
                  handleFormChange("schoolDistrict", e.target.value)
                }
              />
            </div>

            <div>
              <label htmlFor="arvInput">ARV ($)</label>
              <input
                type="number"
                id="arvInput"
                onChange={(e) =>
                  handleFormChange("arv", Number(e.target.value))
                }
              />
            </div>
          </div>

          {form.status !== Status.offMarket && (
            <div className="row">
              <div>
                <label htmlFor="disclosuresInput" style={disclosuresLinkStyle}>
                  Disclosures
                </label>
                <textarea
                  id="disclosuresInput"
                  onChange={(e) =>
                    handleFormChange("disclosures", e.target.value)
                  }
                />
              </div>

              <div>
                <label htmlFor="openHouseInput" style={openHouseTextStyle}>
                  Open House
                </label>
                <textarea
                  id="openHouseInput"
                  onChange={(e) =>
                    handleFormChange("openHouse", e.target.value)
                  }
                />
              </div>

              <div>
                <label htmlFor="privateNotesInput" style={privateNotesStyle}>
                  Private Notes
                </label>
                <textarea
                  id="privateNotesInput"
                  onChange={(e) =>
                    handleFormChange("privateNotes", e.target.value)
                  }
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <hr />

      <section>
        <h2>Template</h2>
        <Template form={form} />
        <CopyTemplateButton element={templateRef} />
      </section>
    </>
  );
};

export default App;
