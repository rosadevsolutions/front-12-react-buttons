import React from "react"
import Button from "./components/Button/Button"

import "./styles/main.css"

const App = () => {
  return(
    <div className="app-wrapper">
      <Button
        className="button-add"
        text="Adicionar"
      />

      <Button
        className="button-remove"
        text="Remover"
      />

      <Button
        className="button-clear"
        text="Limpar"
      />

      <Button
        text="Default"
      />
    </div>
  )
}

export default App
