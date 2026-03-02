function Template(props) {
  const address = props.address
  const mlsNumber = props.mlsNumber
  const bedrooms = props.bedrooms
  const fullBahtrooms = props.fullBathrooms
  const halfBahtrooms = props.halfBathrooms
  const garage = props.garage
  const sqft = props.sqft
  const sqftLot = props.sqftLot

  return (
    <div className="container" id="templateContainer">
      <p>{address}</p>
      <p>MLS #: {mlsNumber}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {fullBahtrooms}|{halfBahtrooms}</p>
      <p>Garage: {garage}</p>
      <p>Total SqFt: {sqft} SqFt on {sqftLot} SqFt Lot</p>
    </div>
  )
  /*
  Listing Price: $- ($-/SqFt)
  Age:
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