import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => <PersonList />

const PersonList = () => {
  const people = [
    { img: 22, name: 'John', job: 'Developer' },
    { img: 34, name: 'Bob', job: 'Singer' },
    { img: 56, name: 'Marie', job: 'Artist' }
  ]
  return (
    <div>
      <Person person={people[0]} />
      <Person person={people[1]}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </Person>
      <Person person={people[2]} />
    </div>
  )
}

const Person = props => {
  const { img, name, job } = props.person
  const { children } = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  )
}

export default App
