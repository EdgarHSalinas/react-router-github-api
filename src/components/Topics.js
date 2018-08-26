import React from 'react'
import {
  Link,
  Route,
} from 'react-router-dom'

const Topic = (props) => {
  console.log('PROPS TO TOPIC', props)
  return <h3>{props.match.params.topicId}</h3>
}
const Topics = ({ match }) => { 
  console.log('match.url', match.url) // topics
  return (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
      </li>
    </ul>

    <hr />

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => (<h3>Please Select A Topic</h3>)} />
  </div>
  )
}
export default Topics