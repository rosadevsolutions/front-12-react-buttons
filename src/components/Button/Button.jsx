import "./Button.css"

const Button = ({text, className, type, background}) => {
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
