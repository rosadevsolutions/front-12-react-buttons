import "../../styles/buttons.css"

const Button = ({text, className, type}) => {
  return(
    <button
      type = {type ? type : "button"}
      className = {className ? `button ${className}` : "button"}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
