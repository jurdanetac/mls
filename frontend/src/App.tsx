import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { useEffect, useReducer, useState } from "react";
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
  const [templateRef, setTemplateRef] = useState<HTMLElement>();

  // locate the template on render
  useEffect(() => {
    setTemplateRef(document.getElementById("templateContainer")!);
  }, []);

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
    <div className="p-3 space-y-5">
      <section>
        <h1>MLS</h1>

        <div className="flex gap-2">
          <StatusSelect form={form} handleFormChange={handleFormChange} />

          {/* Visual element for members only listings */}
          <div className="self-center">
            <MembersIcon status={form.status} />
          </div>
        </div>

        <hr className="my-6" />

        <FormInputs form={form} handleFormChange={handleFormChange} />

        <div className="flex justify-end my-4">
          <Button
            className="bg-red-600"
            onClick={() => dispatch({ type: "FORM_RESET" })}
          >
            <CircleAlert />
            Reset
          </Button>
        </div>
      </section>

      <hr className="my-6" />

      <section>
        <Template form={form} />
        <div className="my-4">
          <CopyElementButton element={templateRef} />
        </div>
      </section>

      <section>
        <ul>
          {templates?.map((template) => (
            <li key={template.mlsNumber}>{template.address}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
