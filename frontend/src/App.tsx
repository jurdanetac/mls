import { useEffect, useReducer } from "react";
import "./App.css";
import CopyTemplateButton from "./components/CopyTemplateButton";
import MembersIcon from "./components/MembersIcon";
import Template from "./components/Template";
import formReducer, { initialState } from "./formReducer";
import FormInputs from "./components/FormInputs";
import { Status, type TemplateProps } from "./types";
import { formatLabel } from "./utils/string.utils";
import { flex } from "./styles";

const App = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);

  const handleFormChange = <K extends keyof TemplateProps>(
    field: K,
    value: TemplateProps[K],
  ) => {
    // update state
    dispatch({
      type: "FORM_CHANGED",
      field: field,
      value: value,
    });
  };

  const handleFormReset = () => {
    dispatch({
      type: "FORM_RESET",
    });
  };

  const templateRef = document.getElementById("templateContainer")!;

  // load previous form if any
  useEffect(() => {
    const savedForm = localStorage.getItem("form") || "";

    if (savedForm) {
      // parse the form from string to appropiate type
      const parsedSavedForm: TemplateProps = JSON.parse(savedForm);

      // set it to the state
      dispatch({ type: "FORM_SET", form: parsedSavedForm });
    }
  }, []);

  useEffect(() => {
    console.log("form changed");
    // update local storage upon form change
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  return (
    <>
      <h1>MLS</h1>
      <div style={{ ...flex, gap: "8px", alignItems: "center" }}>
        <select
          name="status"
          id="statusSelect"
          value={form.status}
          onChange={(event) =>
            handleFormChange("status", event.target.value as Status)
          }
        >
          {Object.entries(Status).map(([key, value]) => (
            <option key={value} value={value}>
              {formatLabel(key)}
            </option>
          ))}
        </select>

        <MembersIcon status={form.status} />
      </div>

      <FormInputs form={form} handleFormChange={handleFormChange} />

      <button type="button" onClick={handleFormReset}>
        Reset
      </button>

      <section>
        <h2>Template</h2>
        <Template form={form} />
        <CopyTemplateButton element={templateRef} />
      </section>
    </>
  );
};

export default App;
