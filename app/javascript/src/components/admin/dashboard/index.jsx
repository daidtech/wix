import * as React from 'react';
import AdminLayout from '../../../layouts/admin'
import './style.scss'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <AdminLayout />
      <div className='dashboard-content'>
        <h1>this dashboard</h1>
      </div>
    </div>
  )
}
export default Dashboard;