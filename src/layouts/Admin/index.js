import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import routes from '../../routes'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons'

const DashboardPrincipal = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  const { Header, Content, Footer, Sider } = Layout
  const { SubMenu } = Menu

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        console.log(prop.layout)
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
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>
            <PieChartOutlined />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <DesktopOutlined />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key='sub1'
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
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
              <Redirect from='/admin' to='/admin/dashboard' />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default DashboardPrincipal
