import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, connect } from 'react-redux'

function Greeting() {
  const username = useSelector(state => state.user.username);
  if (username && username.length > 0) {
    return <p>Hello {username}</p>;
  }
  return <p>You are not logged in</p>;
}

const DashboardPage = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>This is the dashboard.</p>

      <Greeting />
      <Button href="/login">Login</Button>
    </section>
  )
}

const mapStateToProps = (state) => ({
  username: state.user.userName
})

export default connect(mapStateToProps)(DashboardPage)