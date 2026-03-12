const copyTextToClipboard = async () => {
  const element = document.getElementById("templateContainer") as HTMLElement;

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

  /*
  const openEmail = () => {
  const body = `Line 1\nLine 2\n\nBest regards, Your App`;
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:someone@example.com?subject=Hello&body=${encodedBody}`;
};
   */
};

const CopyToClipboardButton = () => {
  return (
    <button
      id="copyToClipboardButton"
      type="button"
      onClick={copyTextToClipboard}
    >
      Copy to Clipboard
    </button>
  );
};

export default CopyToClipboardButton;
