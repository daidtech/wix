const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'))
import React from "react"

class Admin extends React.Component {
  render () {
    return (
      <React.Fragment>
        <DefaultLayout/>
      </React.Fragment>
    );
  }
}

export default Admin
