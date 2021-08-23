function ShowCv({ generalInfoKeys, educationKeys, expKeys }) {
  return (
    <>
      <div className="general-info-class">
        <h1>{generalInfoKeys.name}</h1>
        <div>
          <p>{generalInfoKeys.number}</p>
          <p>{generalInfoKeys.mail}</p>
          <p>{generalInfoKeys.location}</p>
        </div>
        <p>{generalInfoKeys.textarea}</p>
      </div>
      <div className="education-class">
        {educationKeys.map((obj) => {
          return (
            <div key={obj.id}>
              <div>
                <div>
                  <p>{obj.startDate}</p>
                  <p>{obj.endDate}</p>
                </div>
                <p>{obj.school}</p>
              </div>
              <p>{obj.degree}</p>
            </div>
          )
        })}
      </div>
      <div className="experience-class">
        {expKeys.map((obj) => {
          return (
            <div key={obj.id}>
              <div>
                <div>
                  <p>{obj.startDate}</p>
                  <p>{obj.endDate}</p>
                </div>
                <p>{obj.company}</p>
              </div>
              <div>
                <div>
                  <p>{obj.position}</p>
                  <p>{obj.location}</p>
                </div>
                <p>{obj.textarea}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ShowCv
