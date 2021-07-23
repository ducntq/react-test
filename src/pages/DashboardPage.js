import React from 'react'
import { Button } from 'react-bootstrap'

const DashboardPage = () => (
  <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard.</p>

    <Button href="/posts">
      View Posts
    </Button>
    <Button href="/login">Login</Button>
  </section>
)

export default DashboardPage
