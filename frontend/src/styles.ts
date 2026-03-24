export const mlsNumberStyle = {
  fontWeight: "bold",
  fontSize: "14px",
};

export const disclosuresLinkStyle = {
  color: "#0066cc",
  textDecoration: "none",
  fontSize: "13px",
};

export const openHouseTextStyle = {
  whiteSpace: "pre-wrap",
  fontSize: "13px",
  lineSpacing: "1.5",
};

export const privateNotesStyle = {
  color: "#993300",
  fontFamily: "Verdana, sans-serif",
  fontSize: "13px",
};

export const acquisitionMarginStyle = (acquisitionMargin: number) => {
  return acquisitionMargin > 0
    ? { color: "green", fontWeight: "bold", fontSize: "14px" }
    : acquisitionMargin < 0
      ? { color: "red", fontWeight: "bold", fontSize: "14px" }
      : { color: "black", fontWeight: "bold", fontSize: "14px" };
};

export const noSpacing = { margin: 0, padding: 0, lineHeight: 1.2 };

export const flex = { display: "flex" };
