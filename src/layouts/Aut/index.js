import React from 'react'
import { Route, Switch } from 'react-router-dom'
import img from '../../assets/img/logo-white-TOPFLOORMARKETING.png.png'
import imgFondo from '../../assets/img/fondo.jpg'

import routes from '../../routes'

const AutPrincipal = (props) => {
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views)
      }
      if (prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }
  //
  return (
    <div className='h-screen '>
      <div className='flex items-stretch h-full grid grid-flow-col'>
        <div
          style={{ backgroundImage: `url(${imgFondo})` }}
          className='bg-scroll xs:hidden md:flex md:col-span-6 lg:col-span-10 xl:col-span-7'
        >
          <div
            className='flex items-end'
          >
            <div className=' flex-1 text-center px-4 py-2 m-2'>
              <img className='text-center' src={img} alt='Logo' />
            </div>
          </div>
        </div>
        <div className='bg-gray-200 xs:col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-5'>
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </div>

    </div>
  )
}

export default AutPrincipal

// <div className='wrapper wrapper-full-page d-flex align-items-center justify-content-center w-100'>

// <div>

// </div>
// </div>
