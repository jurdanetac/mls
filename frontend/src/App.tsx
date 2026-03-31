import { Button } from "@/components/ui/button";
import { useReducer, useState } from "react";
import "./App.css";
import CopyElementButton from "./components/CopyElementButton";
import FormInputs from "./components/FormInputs";
import MembersIcon from "./components/MembersIcon";
import StatusSelect from "./components/StatusSelect";
import Template from "./components/Template";
import formReducer, { initialState } from "./formReducer";
import { type TemplateProps } from "./types";

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

  const templateRef = document.getElementById("templateContainer")!;

  /*
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
   */

  return (
    <div className="p-3 space-y-5">
      <section>
        <h1>MLS</h1>

        <div className="flex gap-2">
          <StatusSelect form={form} handleFormChange={handleFormChange} />

          <hr className="my-8 border-t border-gray-300" />

          {/* Visual element for members only listings */}
          <div className="self-center">
            <MembersIcon status={form.status} />
          </div>
        </div>

        <FormInputs form={form} handleFormChange={handleFormChange} />

        <hr className="my-8 border-t border-gray-300" />

        <Button onClick={() => dispatch({ type: "FORM_RESET" })}>Reset</Button>
      </section>

      <section>
        <h2>Template</h2>
        <Template form={form} />
        <CopyElementButton element={templateRef} />
      </section>

      {/*
      <section>
        <ul>
          {templates?.map((template) => (
            <li key={template.mlsNumber}>{template.address}</li>
          ))}
        </ul>
      </section>
       */}
    </div>
  );
};

export default App;
