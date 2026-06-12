import { Button } from "@/components/ui/button";
import type { TemplateProps } from "@/types";
import { useState } from "react";
import { Brain } from "lucide-react";
import { ai, prompt } from "../utils/ai";
import InputField from "./InputField";

const AIAutoComplete = ({
  handleFormChange,
}: {
  handleFormChange: <K extends keyof TemplateProps>(
    field: K,
    value: TemplateProps[K],
  ) => void;
}) => {
  // auto complete
  const [listing, setListing] = useState<string>("");
  const [comps, setComps] = useState<string>("");

  return (
    <div className="flex items-end gap-3">
      <InputField
        id=""
        label="Subject info"
        placeholder="MLS #:	BE41137886 Source:	Bay East Beds:	3 Baths (F/P):	2 (2/0) Primary SqFt	1,000 SqFt Apprx Lot:	5,000 SqFt Apprx Acr:	0.120 Acres Age/Yr Blt:	72/1954 Parcel#:	464-30-46 DOM:	2 LA:	Sohrab Sangha LA Ph:	(510) 258-6373 Walk Score:	Recent: 06/11/2026 : NEW"
        value={listing}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setListing(event.target.value);
        }}
      />

      <InputField
        id=""
        label="Comps"
        placeholder="ACTIVE Address City Bd Ba DOM SqFt $/SqFt Lot (SF) List Price Age 27962 Ormond Ave Hayward 3 2|0 2 1,000 $598.00 5,000 (sf) $598,000 72"
        value={comps}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setComps(event.target.value);
        }}
      />

      <Button
        onClick={async () => {
          const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: prompt({ listing, comps }),
          });

          // 1. Guard clause: Ensure response.text actually exists
          if (!response.text) {
            console.error("AI response was empty or undefined");
            return;
          }

          // TypeScript now knows 'response.text' is definitely a string here
          const property = JSON.parse(response.text);

          for (const key in property) {
            const value = property[key];
            if (value) {
              handleFormChange(key as keyof TemplateProps, value);
            }
          }
        }}
        className="bg-linear-to-r from-[#1A73E8] via-[#7460EE] to-[#E33E84] text-white"
      >
        <Brain />
        Auto Complete
      </Button>
    </div>
  );
};
export default AIAutoComplete;
