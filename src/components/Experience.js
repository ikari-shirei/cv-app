import Input from './Input'
import Button from './Button'

function Experience({ info, onChange, deleteButton }) {
  const id = info.id
  return (
    <form>
      <Input value={info.startDate} onChange={onChange} id={id + 'element1'} />

      <Input value={info.endDate} onChange={onChange} id={id + 'element2'} />

      <Input value={info.company} onChange={onChange} id={id + 'element3'} />

      <Input value={info.position} onChange={onChange} id={id + 'element4'} />

      <Input value={info.location} onChange={onChange} id={id + 'element5'} />

      <textarea
        value={info.textarea}
        onChange={onChange}
        id={id + 'element6'}
      ></textarea>
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

export default Experience
