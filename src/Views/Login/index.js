import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values)
  }

  return (
    <div className='h-screen flex justify-center '>
      <div className='flex items-stretch'>
        <div className=' self-center'>
          <div className='site-card-border-less-wrapper'>
            <Card className='shadow-2xl text-center' title='Login' bordered={false} style={{ width: 340 }}>
              <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                  remember: true
                }}
                onError={(e) => console.log(e)}
                onFinish={onFinish}
              >
                <Form.Item
                  name='username'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!'
                    }
                  ]}
                >
                  <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    placeholder='Password'
                  />
                </Form.Item>
                <Form.Item className='text-right'>
                  {
                    <a className='login-form-forgot' href='/#'>
                        Forgot password
                    </a>
                  }

                </Form.Item>
                <Form.Item>
                  <Button type='primary' htmlType='submit' className='login-form-button w-full'>
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
