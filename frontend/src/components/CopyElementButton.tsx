import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";

const copyElementToClipboard = async (element: HTMLElement) => {
  try {
    const innerHTML = element.innerHTML;
    const plainText = element.innerText; // Critical fallback

    const blobHtml = new Blob([innerHTML], { type: "text/html" });
    const blobText = new Blob([plainText], { type: "text/plain" });

    const data = [
      new ClipboardItem({
        ["text/html"]: blobHtml,
        ["text/plain"]: blobText, // Always include this
      }),
    ];

    await navigator.clipboard.write(data);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const CopyElementButton = ({
  element,
}: {
  element: HTMLElement | undefined;
}) => {
  if (!element) return null;

  return (
    <Button
      className="bg-green-600"
      onClick={async () => {
        await copyElementToClipboard(element);
        window.alert("Template copied!");
      }}
    >
      <ClipboardCopy />
      Copy Template
    </Button>
  );
};

export default CopyElementButton;
