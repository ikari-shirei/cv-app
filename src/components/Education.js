import Input from './Input'
import Button from './Button'

function Education({ info, onChange, deleteButton }) {
  const id = info.id
  return (
    <form>
      <Input value={info.startDate} onChange={onChange} id={id + 'element1'} />

      <Input value={info.endDate} onChange={onChange} id={id + 'element2'} />

      <Input value={info.school} onChange={onChange} id={id + 'element3'} />

      <Input value={info.degree} onChange={onChange} id={id + 'element4'} />

      <div className="button-container">
        <Button
          title="Delete"
          onClick={deleteButton}
          id={id}
          className="delete-button"
        />
      </div>
    </form>
  )
}

export default Education
