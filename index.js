import React, { useState } from "react"
import { render } from 'react-dom'
import QrReader from 'react-qr-reader'


const Root = () => {
  const [result, setResult] = useState("No Result.")
  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = err => console.error(err)
  return (
    <div>
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{width: "100%"}} showViewFinder={true} />
      <input type="text" value={result} />
    </div>
  );
}

const root = document.getElementById("root")
render(<Root />, root)
