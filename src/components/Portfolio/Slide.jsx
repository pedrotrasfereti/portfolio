/*-===================== React =====================-*/
import React, { useState, useEffect } from 'react'

/*-===================== Children =====================-*/
import Card from './Card'

/*-===================== Icons =====================-*/
import { RiArrowLeftSLine as ArrowLeft } from 'react-icons/ri'
import { RiArrowRightSLine as ArrowRight } from 'react-icons/ri'

/*-===================== Services =====================-*/
import {
  defaultValue,
  getRepos
} from '../../services/githubApi'

const Slide = () => {
  const [repos, setRepos] = useState(defaultValue)

  useEffect(async () => setRepos(await getRepos()), [])

  const handleClick = (reverse) => {
    // SLICE is used to create a COPY of the previous state
    let updated = repos.slice()

    if (reverse) updated.unshift(updated.pop())
    else updated.push(updated.shift())

    setRepos(updated)
  }

  return (
    <div className="Slide">
      <button
        id="btn-back"
        className="Button"
        onClick={() => handleClick(true)}
      >
        <ArrowLeft className="Icon" />
      </button>
      <div className="Cards--Container">
        {
          repos.map((repo, index) => {
            if ([0, 2].includes(index)) {
              return (
                <Card
                  key={repo.name}
                  repo={repo}
                  classlist={['Card', 'Visible']}
                />
              )
            } else if (index == 1) {
              return (
                <Card
                  key={repo.name}
                  repo={repo}
                  classlist={['Card', 'Visible', 'Center']}
                />
              )
            } else {
              return (
                <Card
                  key={repo.name}
                  repo={repo}
                  classlist={['Card']}
                />
              )
            }
          })
        }
      </div>
      <button
        id="btn-forward"
        className="Button"
        onClick={() => handleClick(false)}
      >
        <ArrowRight className="Icon" />
      </button>
    </div>
  )
}

export default Slide
