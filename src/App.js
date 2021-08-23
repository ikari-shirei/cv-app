import Header from './components/Header'
import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import Education from './components/Education'
import Button from './components/Button'
import uniqid from 'uniqid'
import ShowCv from './components/ShowCv'
import Experience from './components/Experience'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'name',
    number: 'number',
    mail: 'example@gmail.com',
    location: 'location',
    textarea: 'describe yourself',
  })

  const [educationInfo, setEducationInfo] = useState([
    {
      startDate: 'start date',
      endDate: 'end date',
      school: 'school',
      degree: 'degree',
      id: uniqid(),
    },
  ])

  const [expInfo, setExpInfo] = useState([
    {
      startDate: 'start date',
      endDate: 'end date',
      company: 'company',
      position: 'position',
      location: 'location',
      textarea: 'textarea',
      id: uniqid(),
    },
  ])

  const handleInputGeneralInfo = (event) => {
    const targetVal = event.target.value
    if (event.target.id === '1') {
      setGeneralInfo({ ...generalInfo, name: targetVal })
    }
    if (event.target.id === '2') {
      setGeneralInfo({ ...generalInfo, number: targetVal })
    }
    if (event.target.id === '3') {
      setGeneralInfo({ ...generalInfo, mail: targetVal })
    }
    if (event.target.id === '4') {
      setGeneralInfo({ ...generalInfo, location: targetVal })
    }
    if (event.target.id === '5') {
      setGeneralInfo({ ...generalInfo, textarea: targetVal })
    }
  }

  const handleInputEducation = (event) => {
    const targetVal = event.target.value
    const targetId = event.target.id

    const targetObj = educationInfo.find((info) => {
      return info.id + 'element1' === targetId
    })
    if (targetId.includes('element1')) {
      const changedObj = { ...targetObj, startDate: targetVal }
      setEducationInfo(
        educationInfo.map((info) => {
          return info.id + 'element1' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj2 = educationInfo.find((info) => {
      return info.id + 'element2' === targetId
    })
    if (targetId.includes('element2')) {
      const changedObj = { ...targetObj2, endDate: targetVal }
      setEducationInfo(
        educationInfo.map((info) => {
          return info.id + 'element2' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj3 = educationInfo.find((info) => {
      return info.id + 'element3' === targetId
    })
    if (targetId.includes('element3')) {
      const changedObj = { ...targetObj3, school: targetVal }
      setEducationInfo(
        educationInfo.map((info) => {
          return info.id + 'element3' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj4 = educationInfo.find((info) => {
      return info.id + 'element4' === targetId
    })
    if (targetId.includes('element4')) {
      const changedObj = { ...targetObj4, degree: targetVal }
      setEducationInfo(
        educationInfo.map((info) => {
          return info.id + 'element4' !== targetId ? info : changedObj
        })
      )
    }
  }

  const educationAddButton = () => {
    setEducationInfo(
      educationInfo.concat({
        startDate: 'start date',
        endDate: 'end date',
        school: 'school',
        degree: 'degree',
        id: uniqid(),
      })
    )
  }

  const educationDeleteButton = (event) => {
    event.preventDefault()
    const targetId = event.target.id
    const newEducationArr = educationInfo.filter((info) => {
      return info.id !== targetId
    })
    setEducationInfo(newEducationArr)
  }

  const education = educationInfo.map((info) => {
    return (
      <Education
        info={info}
        onChange={handleInputEducation}
        key={info.id}
        deleteButton={educationDeleteButton}
      />
    )
  })

  const handleInputExperience = (event) => {
    const targetVal = event.target.value
    const targetId = event.target.id

    const targetObj = expInfo.find((info) => {
      return info.id + 'element1' === targetId
    })
    if (targetId.includes('element1')) {
      const changedObj = { ...targetObj, startDate: targetVal }
      setExpInfo(
        expInfo.map((info) => {
          return info.id + 'element1' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj2 = expInfo.find((info) => {
      return info.id + 'element2' === targetId
    })
    if (targetId.includes('element2')) {
      const changedObj = { ...targetObj2, endDate: targetVal }
      setExpInfo(
        expInfo.map((info) => {
          return info.id + 'element2' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj3 = expInfo.find((info) => {
      return info.id + 'element3' === targetId
    })
    if (targetId.includes('element3')) {
      const changedObj = { ...targetObj3, company: targetVal }
      setExpInfo(
        expInfo.map((info) => {
          return info.id + 'element3' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj4 = expInfo.find((info) => {
      return info.id + 'element4' === targetId
    })
    if (targetId.includes('element4')) {
      const changedObj = { ...targetObj4, position: targetVal }
      setExpInfo(
        expInfo.map((info) => {
          return info.id + 'element4' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj5 = expInfo.find((info) => {
      return info.id + 'element5' === targetId
    })
    if (targetId.includes('element5')) {
      const changedObj = { ...targetObj5, location: targetVal }
      setExpInfo(
        expInfo.map((info) => {
          return info.id + 'element5' !== targetId ? info : changedObj
        })
      )
    }

    const targetObj6 = expInfo.find((info) => {
      return info.id + 'element6' === targetId
    })
    if (targetId.includes('element6')) {
      const changedObj = { ...targetObj6, textarea: targetVal }
      setExpInfo(
        expInfo.map((info) => {
          return info.id + 'element6' !== targetId ? info : changedObj
        })
      )
    }
  }

  const experienceAddButton = () => {
    setExpInfo(
      expInfo.concat({
        startDate: 'start date',
        endDate: 'end date',
        company: 'company',
        position: 'position',
        location: 'location',
        textarea: 'textarea',
        id: uniqid(),
      })
    )
  }

  const experienceDeleteButton = (event) => {
    event.preventDefault()
    const targetId = event.target.id
    const newExpArr = expInfo.filter((info) => {
      return info.id !== targetId
    })
    setExpInfo(newExpArr)
  }

  const experience = expInfo.map((info) => {
    return (
      <Experience
        info={info}
        onChange={handleInputExperience}
        deleteButton={experienceDeleteButton}
        key={info.id}
      />
    )
  })

  return (
    <div className="App">
      <div className="form-area">
        <Header title="General Information" />
        <GeneralInformation
          info={generalInfo}
          onChange={handleInputGeneralInfo}
        />
        <Header title="Education" />
        <div>{education}</div>
        <Button title="Add" onClick={educationAddButton} />
        <Header title="Experience" />
        <div>{experience}</div>
        <Button title="Add" onClick={experienceAddButton} />
      </div>
      <div className="document-area">
        <ShowCv
          generalInfoKeys={generalInfo}
          educationKeys={educationInfo}
          expKeys={expInfo}
        />
      </div>
    </div>
  )
}

export default App
