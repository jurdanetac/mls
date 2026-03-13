const copyTemplateAndOpenMail = async (address: string) => {
  // Get client email address from environment variables
  const toMailAddress = import.meta.env.VITE_TO_MAIL_ADDRESS;
  const ccMailAddress = import.meta.env.VITE_CC_MAIL_ADDRESS;

  // Encode the address for use in the mailto link
  const encodedAddress = encodeURIComponent(address);
  const mailToLink = `mailto:${toMailAddress}?cc=${ccMailAddress}&subject=${encodedAddress}&body=${encodedAddress}`;

  // Open the default email client with the pre-filled email
  window.location.href = mailToLink;

  // TODO: Copy the formatted template to clipboard
  /*
  // const innerText = element.innerText
  const innerHTML = element.innerHTML || ""; // fallback to empty string if element is null

  // const blobText = new Blob([plainText], { type: "text/plain" });

  const blobHtml = new Blob([innerHTML], { type: "text/html" });

  const data = [
    new ClipboardItem({
      ["text/html"]: blobHtml,
      // ["text/plain"]: blobText,
    }),
  ];

  await navigator.clipboard.write(data);
  window.alert("Formatted text copied! Now just paste it in your email.");

  const openEmail = () => {
  const body = `Line 1\nLine 2\n\nBest regards, Your App`;
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:someone@example.com?subject=Hello&body=${encodedBody}`;
};
   */
};

const CopyTemplateButton = ({ address }: { address: string }) => {
  return (
    <button
      id="copyToClipboardButton"
      type="button"
      onClick={() => copyTemplateAndOpenMail(address)}
    >
      Send
    </button>
  );
};

export default CopyTemplateButton;
