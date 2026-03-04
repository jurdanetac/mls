function copyTextToClipboard() {
  window.alert("TODO");
}

function CopyToClipboardButton() {
  return (
    <button
      id="copyToClipboardButton"
      type="button"
      onClick={copyTextToClipboard}
    >
      Copy to Clipboard
    </button>
  );
}

export default CopyToClipboardButton;
