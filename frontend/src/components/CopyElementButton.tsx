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

const openMailClientWithSubject = (element: HTMLElement) => {
  const plainText = element.innerText; // Critical fallback
  const firstTextLine = plainText.split("\n")[0];

  const toMailAddress = import.meta.env.VITE_TO_MAIL_ADDRESS;
  const ccMailAddress = import.meta.env.VITE_CC_MAIL_ADDRESS;
  const mailToLink = `mailto:${toMailAddress}?cc=${ccMailAddress}&subject=${encodeURIComponent(firstTextLine)}`;
  window.location.href = mailToLink;
};

const copyElementAndOpenMail = async (element: HTMLElement) => {
  await copyElementToClipboard(element);

  const shouldOpenMailClient = window.confirm(
    "Template copied! Do you want to open your email client now?",
  );

  if (shouldOpenMailClient) {
    openMailClientWithSubject(element);
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
      onClick={() => copyElementAndOpenMail(element)}
    >
      <ClipboardCopy />
      Copy Template
    </Button>
  );
};

export default CopyElementButton;
