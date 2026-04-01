import InputField from "@/components/InputField";
import TextareaField from "./TextareaField";
import { Status, type TemplateProps } from "@/types";

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
  const rowClasses = "flex gap-3";

  return (
    <div className="space-y-3" id="fieldsContainer">
      <div className={rowClasses}>
        <InputField
          id="addressInput"
          label="Address"
          placeholder="123 Main St."
          value={form.address}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("address", event.target.value)
          }
        />

        {/* Don't show mls number input for off markets */}
        {form.status !== Status.OFF_MARKET && (
          <div className="w-1/3">
            <InputField
              id="mlsNumberInput"
              label="MLS #"
              placeholder=""
              value={form.mlsNumber || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleFormChange("mlsNumber", event.target.value)
              }
              className="text-lg font-bold"
            />
          </div>
        )}
      </div>

      <div className={rowClasses}>
        <InputField
          id="bedroomsInput"
          type="number"
          label="Bedrooms"
          placeholder="3"
          value={form.bedrooms}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("bedrooms", Number(event.target.value))
          }
        />

        <InputField
          id="fullBathroomsInput"
          type="number"
          label="Full Bathrooms"
          placeholder="2"
          value={form.fullBathrooms}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("fullBathrooms", Number(event.target.value))
          }
        />

        <InputField
          id="halfBathroomsInput"
          type="number"
          label="Half Bathrooms"
          placeholder="1"
          value={form.halfBathrooms}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("halfBathrooms", Number(event.target.value))
          }
        />
      </div>

      <div className={rowClasses}>
        <InputField
          id="garageInput"
          type="number"
          label="Garage"
          placeholder="1"
          value={form.garage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("garage", Number(event.target.value))
          }
        />

        <InputField
          id="sqftInput"
          type="number"
          label="SqFt"
          placeholder="1500"
          value={form.sqft}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("sqft", Number(event.target.value))
          }
        />

        <InputField
          id="sqftLotInput"
          type="number"
          label="Lot SqFt"
          placeholder="11000"
          value={form.sqftLot}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("sqftLot", Number(event.target.value))
          }
        />
      </div>

      <div className={rowClasses}>
        <InputField
          id="listingPriceInput"
          type="number"
          label={
            form.status === Status.OFF_MARKET
              ? "Asking Price ($)"
              : "Listing Price ($)"
          }
          placeholder="11000"
          value={form.listingPrice}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("listingPrice", Number(event.target.value))
          }
        />

        <InputField
          id="ageInput"
          type="number"
          label="Age"
          placeholder="85"
          value={form.age}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("age", Number(event.target.value))
          }
        />
      </div>

      <div className={rowClasses}>
        {form.status === Status.ACTIVE && (
          <InputField
            id="domInput"
            type="number"
            label="DOM"
            placeholder="3"
            value={form.dom}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleFormChange("dom", Number(event.target.value))
            }
          />
        )}

        <InputField
          id="listingAgentInput"
          label="Listing Agent"
          placeholder="John Doe"
          value={form.listingAgent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("listingAgent", event.target.value)
          }
        />

        <InputField
          id="listingAgentOfficeInput"
          label="Listing Agent Office"
          placeholder="Real Estate Inc"
          value={form.listingAgentOffice}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("listingAgentOffice", event.target.value)
          }
        />
      </div>

      <div className={rowClasses}>
        <InputField
          id="schoolDistrictInput"
          label="School District"
          placeholder="San Francisco Unified"
          value={form.schoolDistrict}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("schoolDistrict", event.target.value)
          }
        />

        <InputField
          id="arvInput"
          label="ARV ($)"
          placeholder="1000000"
          value={form.arv}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleFormChange("arv", Number(event.target.value))
          }
        />
      </div>

      {form.status !== Status.OFF_MARKET && (
        <div className={rowClasses}>
          <TextareaField
            id="disclosuresInput"
            label="Disclosures"
            value={form.disclosures || ""}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleFormChange("disclosures", event.target.value)
            }
            className="h-32 max-h-32"
          />

          <TextareaField
            id="openHouseInput"
            label="Open House"
            value={form.openHouse || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleFormChange("openHouse", event.target.value)
            }
            className="h-32 max-h-32"
          />

          <TextareaField
            id="privateNotesInput"
            label="Private Notes"
            value={form.privateNotes || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleFormChange("privateNotes", event.target.value)
            }
            className="h-32 max-h-32"
          />
        </div>
      )}
    </div>
  );
};

export default FormInputs;
