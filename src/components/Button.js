const Button = ({ title, onClick, id }) => {
  if (!id) id = 'button'
  return (
    <button id={id} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
