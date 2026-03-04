import type { TemplateProps } from "../types";

function Template(props: TemplateProps) {
  const address = props.address;
  const mlsNumber = props.mlsNumber;
  const bedrooms = props.bedrooms;
  const fullBathrooms = props.fullBathrooms;
  const halfBathrooms = props.halfBathrooms;
  const garage = props.garage;
  const sqft = props.sqft;
  const sqftLot = props.sqftLot;
  const listingPrice = props.listingPrice;
  const pricePerSqft = listingPrice / sqft;
  const age = props.age;

  return (
    <div className="container" id="templateContainer">
      <p>{address}</p>
      <p>MLS #: {mlsNumber}</p>
      <p>Bedrooms: {bedrooms.toString()}</p>
      <p>
        Bathrooms: {fullBathrooms.toString()}|{halfBathrooms.toString()}
      </p>
      <p>Garage: {garage.toString()}</p>
      <p>
        Total SqFt: {sqft.toString()} SqFt on {sqftLot.toString()} SqFt Lot
      </p>
      <p>
        Listing Price: ${listingPrice.toString()} (${pricePerSqft.toFixed(2)})
      </p>
      <p>Age: {age}</p>
    </div>
  );
  /*
  Status: -
  DOM: -
  Listing Agent: -
  School District:

  -

  ARV: $
  Max Acquisition Price: $ -> $

  Disclosures:
  OH:

  Private notes:


  MLS Comps attached:
  */
}

export default Template;
