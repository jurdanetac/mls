// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
export const USDollarExact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

// Source: https://stackoverflow.com/a/2901298
export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Calculates the maximum price to pay based on After Repair Value (ARV)
 * Formula: ARV * 0.75 (The 75% Rule)
 */
export const calculateMaxAcquisitionPrice = (arv: number): number => {
  return arv * 0.75;
};

/**
 * Calculates the spread between the Max Acquisition Price and the Listing Price
 * Positive = Potential Deal | Negative = Overpriced
 */
export const calculateAcquisitionMargin = (
  maxAcquisitionPrice: number,
  listingPrice: number,
): number => {
  return maxAcquisitionPrice - listingPrice;
};
