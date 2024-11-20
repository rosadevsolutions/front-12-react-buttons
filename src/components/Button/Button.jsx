const Button = ({callToAction, className, id, type}) => {
  return(
    <button
      id={id}
      type = {type ? type : "button"}
      className = {className ? `button ${className}` : className}>
        {callToAction}
    </button>
  )
}

export default Button
