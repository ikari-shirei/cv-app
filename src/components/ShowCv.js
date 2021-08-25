function ShowCv({ generalInfoKeys, educationKeys, expKeys }) {
  return (
    <>
      <div className="general-info-class">
        <h1 className="general-name">{generalInfoKeys.name}</h1>
        <div className="general-items-container">
          <p className="general-items">{generalInfoKeys.number} |</p>
          <p className="general-items">{generalInfoKeys.mail} |</p>
          <p className="general-items">{generalInfoKeys.location}</p>
        </div>
        <p className="general-textarea">{generalInfoKeys.textarea}</p>
      </div>
      <div className="education-class">
        <h1 className="header-show">Education</h1>
        {educationKeys.map((obj) => {
          return (
            <div key={obj.id}>
              <div className="items-container">
                <p className="items">{obj.startDate} -</p>
                <p className="items">{obj.endDate} |</p>
                <p className="items">{obj.school}</p>
              </div>
              <p className="education-degree">{obj.degree}</p>
            </div>
          )
        })}
      </div>
      <div className="experience-class">
        <h1 className="header-show">Experience</h1>
        {expKeys.map((obj) => {
          return (
            <div key={obj.id}>
              <div className="items-container">
                <p className="items">{obj.startDate} -</p>
                <p className="items">{obj.endDate} |</p>
                <p className="items">{obj.company}</p>
              </div>
              <div>
                <div className="bold-items-container ">
                  <p className="bold-items">{obj.position} |</p>
                  <p className="bold-items">{obj.location}</p>
                </div>
                <p className="experience-textarea">{obj.textarea}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ShowCv
