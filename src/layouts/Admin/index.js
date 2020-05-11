import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import routes from '../../routes'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined
  //  UserOutlined
} from '@ant-design/icons'

const DashboardPrincipal = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [selected, Setselected] = useState([])

  const { Header, Content, Footer, Sider } = Layout

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  useEffect(() => {
    if (props.location.pathname.split('/')[1] === 'admin') {
      Setselected([props.location.pathname.split('/')[2]])
    }
  }, [props.location])

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }

  const navLink = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Menu.Item
            key={prop.name}
            onClick={() => {
              Setselected([prop.name])
            }}
          >
            <Link
              to={prop.layout + prop.path}
            >
              <PieChartOutlined />
              <span>
                {prop.name}
              </span>
            </Link>
          </Menu.Item>
        )
      } else {
        return null
      }
    })
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(e) => onCollapse(e)}>
        <div
          style={{
            height: '32px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '16px'
          }}
          className='logo'
        />
        <Menu theme='dark' mode='inline' selectedKeys={selected}>
          {
            navLink(routes)
          }
        </Menu>
      </Sider>
      <Layout
        className='site-layout'
      >
        <Header style={{ background: '#fff', padding: 0 }} className='site-layout-background' />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              {getRoutes(routes)}
              <Redirect from='/admin' to='/admin/Dashboard' />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default DashboardPrincipal
