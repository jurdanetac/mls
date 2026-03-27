import { Status, type TemplateProps } from "../types";
import {
  disclosuresLinkStyle,
  openHouseTextStyle,
  privateNotesStyle,
} from "../styles";

const FormInputs = ({
  form,
  handleFormChange,
}: {
  form: TemplateProps;
  handleFormChange: <K extends keyof TemplateProps>(
    field: K,
    value: TemplateProps[K],
  ) => void;
}) => {
  return (
    <section>
      <h2>Fields</h2>

      <div className="container" id="fieldsContainer">
        <div className="row">
          <div>
            <label htmlFor="addressInput">Address</label>
            <input
              type="text"
              id="addressInput"
              value={form.address}
              onChange={(e) => handleFormChange("address", e.target.value)}
            />
          </div>

          {form.status !== Status.OFF_MARKET && (
            <div>
              <label htmlFor="mlsNumberInput">MLS #</label>
              <input
                type="text"
                id="mlsNumberInput"
                value={form.mlsNumber || ""}
                onChange={(e) => handleFormChange("mlsNumber", e.target.value)}
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
              value={form.bedrooms}
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
              value={form.fullBathrooms}
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
              value={form.halfBathrooms}
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
              value={form.garage}
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
              value={form.sqft}
              onChange={(e) => handleFormChange("sqft", Number(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="sqftLotInput">SqFt Lot</label>
            <input
              type="number"
              id="sqftLotInput"
              value={form.sqftLot}
              onChange={(e) =>
                handleFormChange("sqftLot", Number(e.target.value))
              }
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="listingPriceInput">
              {form.status === Status.OFF_MARKET
                ? "Asking Price ($)"
                : "Listing Price ($)"}
            </label>
            <input
              type="number"
              id="listingPriceInput"
              value={form.listingPrice}
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
              value={form.age}
              onChange={(e) => handleFormChange("age", Number(e.target.value))}
            />
          </div>
        </div>

        <div className="row">
          {form.status === Status.ACTIVE && (
            <div>
              <label htmlFor="domInput">DOM</label>
              <input
                type="number"
                id="domInput"
                value={form.dom}
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
              value={form.listingAgent}
              onChange={(e) => handleFormChange("listingAgent", e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="listingAgentOfficeInput">
              Listing Agent Office
            </label>
            <input
              type="text"
              id="listingAgentOfficeInput"
              value={form.listingAgentOffice}
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
              value={form.schoolDistrict}
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
              value={form.arv}
              onChange={(e) => handleFormChange("arv", Number(e.target.value))}
            />
          </div>
        </div>

        {form.status !== Status.OFF_MARKET && (
          <div className="row">
            <div>
              <label htmlFor="disclosuresInput" style={disclosuresLinkStyle}>
                Disclosures
              </label>
              <textarea
                id="disclosuresInput"
                value={form.disclosures || ""}
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
                value={form.openHouse || ""}
                onChange={(e) => handleFormChange("openHouse", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="privateNotesInput" style={privateNotesStyle}>
                Private Notes
              </label>
              <textarea
                id="privateNotesInput"
                value={form.privateNotes || ""}
                onChange={(e) =>
                  handleFormChange("privateNotes", e.target.value)
                }
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FormInputs;
