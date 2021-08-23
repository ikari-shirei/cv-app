import Input from './Input'
import Button from './Button'

function Education({ info, onChange, deleteButton }) {
  const id = info.id
  return (
    <form>
      <Input value={info.startDate} onChange={onChange} id={id + 'element1'} />
      <br />
      <Input value={info.endDate} onChange={onChange} id={id + 'element2'} />
      <br />
      <Input value={info.school} onChange={onChange} id={id + 'element3'} />
      <br />
      <Input value={info.degree} onChange={onChange} id={id + 'element4'} />
      <br />
      <Button title="Delete" onClick={deleteButton} id={id} />
    </form>
  )
}

export default Education
