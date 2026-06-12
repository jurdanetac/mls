import { useEffect, useReducer, useState } from "react";
import AIAutoComplete from "./components/AIAutoComplete";
import Form from "./components/Form";
import StatusSelect from "./components/StatusSelect";
import Template from "./components/Template";
import { Button } from "./components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import formReducer, { initialState } from "./formReducer";
import { type TemplateProps } from "./types";

const App = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [showTemplate, setShowTemplate] = useState<boolean>(true);

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
  const resetForm = () => dispatch({ type: "FORM_RESET" });

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

  const sectionStyles = "border border-gray-200 rounded-2xl p-5 shadow-xl";

  return (
    <div className="p-5">
      <header className={sectionStyles}>
        <h1>MLS</h1>
        <ButtonGroup className="mb-5">
          <Button
            className={showTemplate ? "" : "bg-gray-100"}
            variant="outline"
            onClick={() => setShowTemplate(false)}
          >
            Form
          </Button>
          <Button
            className={showTemplate ? "bg-gray-100" : ""}
            variant="outline"
            onClick={() => setShowTemplate(true)}
          >
            Template
          </Button>
        </ButtonGroup>

        <AIAutoComplete handleFormChange={handleFormChange} />
      </header>

      <hr className="my-10" />

      <main className={sectionStyles}>
        {showTemplate ? (
          <Template form={form} />
        ) : (
          <>
            {showTemplate ? null : (
              <StatusSelect form={form} handleFormChange={handleFormChange} />
            )}

            <div className="flex gap-5">
              <div className="grow">
                <Form
                  form={form}
                  handleFormChange={handleFormChange}
                  resetForm={resetForm}
                />
              </div>

              <div className="hidden md:block">
                <Template form={form} />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
