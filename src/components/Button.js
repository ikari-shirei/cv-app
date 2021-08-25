const Button = ({ title, onClick, id, className }) => {
  if (!id) id = 'button'
  if (!className) className = 'button'
  return (
    <button className={className} id={id} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
