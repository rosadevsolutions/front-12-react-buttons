import "../../styles/buttons.css"

const Button = ({callToAction, className, type}) => {
  return(
    <button
      type = {type ? type : "button"}
      className = {className ? `button ${className}` : "button"}
    >
      <span>{callToAction}</span>
    </button>
  )
}

export default Button
