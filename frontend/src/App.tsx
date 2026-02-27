import { useState } from 'react'
import './App.css'

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
    <>
      <p>{address}</p>
      <p>MLS #: {mlsNumber}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {fullBahtrooms}|{halfBahtrooms}</p>
      <p>Garage: {garage}</p>
      <p>Total SqFt: {sqft} SqFt on {sqftLot} SqFt Lot</p>
    </>
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

function App() {
  const [address, setAddress] = useState("")
  const [mlsNumber, setMlsNumber] = useState("")
  const [bedrooms, setBedrooms] = useState(0)
  const [fullBathrooms, setFullBathrooms] = useState(0)
  const [halfBathrooms, setHalfBathrooms] = useState(0)
  const [garage, setGarage] = useState(0)
  const [sqft, setSqft] = useState(0)
  const [sqftLot, setSqftLot] = useState(0)

  /*
  // do not load until at least one of the fields is changed from default
  // TODO: useRef not effect
  const [showTemplate, setShowTemplate] = useState(false)
  useEffect(() => {
    console.log("toggling show template")
    setShowTemplate(!showTemplate)
  }, [address, mlsNumber, bedrooms, fullBathrooms, halfBathrooms])
  */

  return (
    <>
      <h1>MLS</h1>

      <section>
        <h2>Fields</h2>

        <div className="row">
          <div>
            <label htmlFor="addressInput">Address: </label>
            <input id="addressInput" type="text" onChange={(event) => setAddress(event.target.value)}></input>
          </div>

          <div>
            <label htmlFor="mlsNumberInput">MLS #: </label>
            <input id="mlsNumberInput" type="text" onChange={(event) => setMlsNumber(event.target.value)}></input>
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="bedroomsInput">Bedrooms: </label>
            <input id="bedroomsInput" type="number" onChange={(event) => setBedrooms(Number(event.target.value))}></input>
          </div>

          <div>
            <label htmlFor="fullBathroomsInput">Full Bathrooms: </label>
            <input id="fullBahtroomsInput" type="number" onChange={(event) => setFullBathrooms(Number(event.target.value))}></input>
          </div>

          <div>
            <label htmlFor="halfBathroomsInput">Half Bathrooms: </label>
            <input id="halfBathroomsInput" type="number" onChange={(event) => setHalfBathrooms(Number(event.target.value))}></input>
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="garageInput">SqFt: </label>
            <input id="garageInput" type="number" onChange={(event) => setGarage(Number(event.target.value))}></input>
          </div>

          <div>
            <label htmlFor="sqftInput">SqFt: </label>
            <input id="sqftInput" type="number" onChange={(event) => setSqft(Number(event.target.value))}></input>
          </div>

          <div>
            <label htmlFor="sqftLotInput">SqFt Lot: </label>
            <input id="sqftLotInput" type="number" onChange={(event) => setSqftLot(Number(event.target.value))}></input>
          </div>
        </div>

      </section>

      <hr />

      <section>
        <h2>Template</h2>
        <Template
          mlsNumber={mlsNumber}
          address={address}
          bedrooms={bedrooms}
          fullBathrooms={fullBathrooms}
          halfBathrooms={halfBathrooms}
          garage={garage}
          sqft={sqft}
          sqftLot={sqftLot}
        />
        {/* TODO: feature */}
        <button type="button">Copy to clipboard</button>
      </section>
    </>
  )
}

export default App
