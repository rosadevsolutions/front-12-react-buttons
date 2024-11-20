import React from "react"
import Button from "./components/Button/Button"

const App = () => {
  return(
    <div className="App">
      <Button
        id="button-add"
        className="button-add"
        callToAction="Adicionar"
      />

      <Button
        id="button-remove"
        className="button-remove"
        callToAction="Remover"
      />

      <Button
        id="button-clean"
        className="button-clean"
        callToAction="Limpar"
      />
    </div>
  )
}

export default App
