import Input from './Input'

function GeneralInformation({ info, onChange }) {
  return (
    <form>
      <Input value={info.name} onChange={onChange} id="1" />
      <br />
      <Input value={info.number} onChange={onChange} id="2" />
      <br />
      <Input value={info.mail} onChange={onChange} id="3" />
      <br />
      <Input value={info.location} onChange={onChange} id="4" />
      <br />
      <textarea value={info.textarea} onChange={onChange} id="5"></textarea>
    </form>
  )
}

export default GeneralInformation
