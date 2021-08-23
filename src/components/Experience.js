import Input from './Input'
import Button from './Button'

function Experience({ info, onChange, deleteButton }) {
  const id = info.id
  return (
    <form>
      <Input value={info.startDate} onChange={onChange} id={id + 'element1'} />
      <br />
      <Input value={info.endDate} onChange={onChange} id={id + 'element2'} />
      <br />
      <Input value={info.company} onChange={onChange} id={id + 'element3'} />
      <br />
      <Input value={info.position} onChange={onChange} id={id + 'element4'} />
      <br />
      <Input value={info.location} onChange={onChange} id={id + 'element5'} />
      <br />
      <textarea
        value={info.textarea}
        onChange={onChange}
        id={id + 'element6'}
      ></textarea>
      <br />
      <Button title="Delete" onClick={deleteButton} id={id} />
    </form>
  )
}

export default Experience
