import { Button } from "@/components/ui/button";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import CopyTemplateButton from "./components/CopyTemplateButton";
import MembersIcon from "./components/MembersIcon";
import Template from "./components/Template";
import formReducer, { initialState } from "./formReducer";
import FormInputs from "./components/FormInputs";
import { Status, type TemplateProps } from "./types";
import { formatLabel } from "./utils/string.utils";

const App = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [templates, setTemplates] = useState<Array<TemplateProps>>([]);

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
    // update local storage upon form change
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/templates`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: TemplateProps[]) => {
        if (data) setTemplates(data);
      })
      .catch((error) => console.error("Error fetching templates:", error));
  }, []);

  return (
    <>
      <Button>Click</Button>

      <h1>MLS</h1>

      <div>
        <select
          value={form.status}
          onChange={(event) =>
            handleFormChange("status", event.target.value as Status)
          }
        >
          {/* Option for each Status label: db value */}
          {Object.entries(Status).map(([key, value]) => (
            <option key={value} value={value}>
              {formatLabel(key)}
            </option>
          ))}
        </select>

        {/* Visual element for members only listings */}
        <MembersIcon status={form.status} />
      </div>

      {/* Inputs to fill the form */}
      <FormInputs form={form} handleFormChange={handleFormChange} />

      {/* Button that resets the form */}
      <button type="button" onClick={handleFormReset}>
        Reset
      </button>

      <section>
        <h2>Template</h2>
        <Template form={form} />
        <CopyTemplateButton element={templateRef} />
      </section>

      <section>
        <ul>
          {templates?.map((template) => (
            <li key={template.mlsNumber}>{template.address}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
