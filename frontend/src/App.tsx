import { useState } from 'react'
import './App.css'
import CopyToClipboardButton from './components/CopyToClipboardButton'
import Template from './components/Template'

function App() {
  const [address, setAddress] = useState("")
  const [mlsNumber, setMlsNumber] = useState("")
  const [bedrooms, setBedrooms] = useState(0)
  const [fullBathrooms, setFullBathrooms] = useState(0)
  const [halfBathrooms, setHalfBathrooms] = useState(0)
  const [garage, setGarage] = useState(0)
  const [sqft, setSqft] = useState(0)
  const [sqftLot, setSqftLot] = useState(0)

  return (
    <>
      <h1>MLS</h1>

      <section>
        <h2>Fields</h2>

        <div className="container" id="fieldsContainer">
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
              <label htmlFor="garageInput">Garage: </label>
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
        <CopyToClipboardButton />
      </section>
    </>
  )
}

export default App
