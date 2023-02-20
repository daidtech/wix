import * as React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from './dashboard'
import Products from './products'
import AdminLayout from 'src/layouts/admin'
const Admin = () => {
  let { adminTag } = useParams();

  React.useEffect(() => {
    console.log('redener')
  })

  const currentTab = () => {
    let newTab = <Dashboard />
    switch (adminTag) {
      case "dashboard":
        newTab = <Dashboard />
        break;
      case "products":
        newTab = <Products />
        break;

      default:
        newTab = <Dashboard />
        break;

    }
  }

  return (
    <div>
      <AdminLayout />
      {currentTab()}
    </div>
  )
}

export default Admin;