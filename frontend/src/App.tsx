import { Button } from "@/components/ui/button";
import { CircleAlert, SaveIcon } from "lucide-react";
import { useEffect, useReducer, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import CopyElementButton from "./components/CopyElementButton";
import FormInputs from "./components/FormInputs";
import MembersIcon from "./components/MembersIcon";
import StatusSelect from "./components/StatusSelect";
import Template from "./components/Template";
import TemplatesTable from "./components/TemplatesTable";
import formReducer, { initialState } from "./formReducer";
import { type TemplateProps } from "./types";

const App = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [templates, setTemplates] = useState<Array<TemplateProps>>([]);
  const [templateRef, setTemplateRef] = useState<HTMLElement>();

  const templatesURL = `${import.meta.env.VITE_BACKEND_API_URL}/templates`;

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
    let isMounted = true; // Prevents updating state if component unmounts

    fetch(templatesURL)
      .then((res) => {
        // Check for server-side errors (404, 500, etc.)
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data: TemplateProps[]) => {
        if (isMounted && data) {
          setTemplates(data);
        }
      })
      .catch((error) => {
        // Handles network failure (Backend Down) or the error thrown above
        if (isMounted) {
          console.error("Error fetching templates:", error);
          toast.error(
            "Failed to load templates. Please check if the backend is running.",
          );
        }
      });

    return () => {
      isMounted = false;
    };
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

      <hr className="my-6" />

      <section>
        <Button
          className="bg-blue-500"
          onClick={() => {
            // send the form
            fetch(templatesURL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            })
              .then((res) => {
                // 1. Check if the server responded with an error code (4xx or 5xx)
                if (!res.ok) {
                  throw new Error(
                    `Server responded with status: ${res.status}`,
                  );
                }
                return res.json();
              })
              .then((data: any) => {
                toast.success(`Template saved with id: ${data.id}`);
              })
              .catch((err) => {
                // 2. This catches network failures (backend down) OR errors thrown above
                console.error("Fetch error:", err);
                toast.error(
                  "Could not connect to the server. Is the backend running?",
                );
              });
          }}
        >
          <SaveIcon />
          Save
        </Button>
        <Toaster />
        <ul>
          {/* {templates?.map((template) => (
            <li key={template.mlsNumber}>{template.address}</li>
          ))} */}
          <TemplatesTable />
        </ul>
      </section>
    </div>
  );
};

export default App;
