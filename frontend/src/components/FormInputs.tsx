import { Status, type TemplateProps } from "../types";

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

      <div id="fieldsContainer">
        <div>
          <div>
            <label>Address</label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => handleFormChange("address", e.target.value)}
            />
          </div>

          {/* Don't show mls number input for off markets */}
          {form.status !== Status.OFF_MARKET && (
            <div>
              <label>MLS #</label>
              <input
                type="text"
                value={form.mlsNumber || ""}
                onChange={(e) => handleFormChange("mlsNumber", e.target.value)}
              />
            </div>
          )}
        </div>

        <div>
          <div>
            <label>Bedrooms</label>
            <input
              type="number"
              value={form.bedrooms}
              onChange={(e) =>
                handleFormChange("bedrooms", Number(e.target.value))
              }
            />
          </div>

          <div>
            <label>Full Bathrooms</label>
            <input
              type="number"
              value={form.fullBathrooms}
              onChange={(e) =>
                handleFormChange("fullBathrooms", Number(e.target.value))
              }
            />
          </div>

          <div>
            <label>Half Bathrooms</label>
            <input
              type="number"
              value={form.halfBathrooms}
              onChange={(e) =>
                handleFormChange("halfBathrooms", Number(e.target.value))
              }
            />
          </div>
        </div>

        <div>
          <div>
            <label>Garage</label>
            <input
              type="number"
              value={form.garage}
              onChange={(e) =>
                handleFormChange("garage", Number(e.target.value))
              }
            />
          </div>

          <div>
            <label>SqFt</label>
            <input
              type="number"
              value={form.sqft}
              onChange={(e) => handleFormChange("sqft", Number(e.target.value))}
            />
          </div>

          <div>
            <label>SqFt Lot</label>
            <input
              type="number"
              value={form.sqftLot}
              onChange={(e) =>
                handleFormChange("sqftLot", Number(e.target.value))
              }
            />
          </div>
        </div>

        <div>
          <div>
            <label>
              {form.status === Status.OFF_MARKET
                ? "Asking Price ($)"
                : "Listing Price ($)"}
            </label>
            <input
              type="number"
              value={form.listingPrice}
              onChange={(e) =>
                handleFormChange("listingPrice", Number(e.target.value))
              }
            />
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              value={form.age}
              onChange={(e) => handleFormChange("age", Number(e.target.value))}
            />
          </div>
        </div>

        <div>
          {form.status === Status.ACTIVE && (
            <div>
              <label>DOM</label>
              <input
                type="number"
                value={form.dom}
                onChange={(e) =>
                  handleFormChange("dom", Number(e.target.value))
                }
              />
            </div>
          )}

          <div>
            <label>Listing Agent</label>
            <input
              type="text"
              value={form.listingAgent}
              onChange={(e) => handleFormChange("listingAgent", e.target.value)}
            />
          </div>

          <div>
            <label>Listing Agent Office</label>
            <input
              type="text"
              value={form.listingAgentOffice}
              onChange={(e) =>
                handleFormChange("listingAgentOffice", e.target.value)
              }
            />
          </div>
        </div>

        <div>
          <div>
            <label>School District</label>
            <input
              type="text"
              value={form.schoolDistrict}
              onChange={(e) =>
                handleFormChange("schoolDistrict", e.target.value)
              }
            />
          </div>

          <div>
            <label>ARV ($)</label>
            <input
              type="number"
              value={form.arv}
              onChange={(e) => handleFormChange("arv", Number(e.target.value))}
            />
          </div>
        </div>

        {form.status !== Status.OFF_MARKET && (
          <div>
            <div>
              <label>Disclosures</label>
              <textarea
                value={form.disclosures || ""}
                onChange={(e) =>
                  handleFormChange("disclosures", e.target.value)
                }
              />
            </div>

            <div>
              <label>Open House</label>
              <textarea
                value={form.openHouse || ""}
                onChange={(e) => handleFormChange("openHouse", e.target.value)}
              />
            </div>

            <div>
              <label>Private Notes</label>
              <textarea
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
