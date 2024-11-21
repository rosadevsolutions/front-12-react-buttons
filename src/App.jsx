import React from "react"
import Button from "./components/Button/Button"

import "./index.css"

const App = () => {
  const handleClickAdd     = () => console.log("Clicou em Adicionar")
  const handleClickClear   = () => console.log("Clicou em Limpar")
  const handleClickDefault = () => console.log("Clicou em Default")
  const handleClickRemove  = () => console.log("Clicou em Remover")
  const handleClickSend    = () => console.log("Clicou em Enviar")

  return(
    <div className="app-wrapper">
      <Button
        onClick={handleClickSend}
        styleType="button-send"
        text="Enviar"
        type="submit"
      />

      <Button
        onClick={handleClickAdd}
        styleType="button-add"
        text="Adicionar"
      />

      <Button
        disabled="true"
        onClick={handleClickRemove}
        styleType="button-remove"
        text="Remover"
      />

      <Button
        onClick={handleClickClear}
        styleType="button-clear"
        text="Limpar"
      />

      <Button
        onClick={handleClickDefault}
        text="Default"
      />
    </div>
  )
}

export default App
