import Login from './Views/Login'
import DashboardPrincipal from './Views/Dashboard'
import Views1 from './Views/Views1'
import Views2 from './Views/Views2'

const dashboardRoutes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    icon: '',
    component: DashboardPrincipal,
    role: [],
    layout: '/admin',
    fullContent: false,
    visible: true
  },
  {
    path: '/Views1',
    name: 'Views1',
    icon: '',
    component: Views1,
    role: [],
    layout: '/admin',
    fullContent: false,
    visible: true
  },
  {
    path: '/Views2',
    name: 'Views2',
    icon: '',
    component: Views2,
    role: [],
    layout: '/admin',
    fullContent: false,
    visible: true
  },
  {
    path: '/login',
    name: 'Login',
    icon: '',
    component: Login,
    role: [],
    layout: '/auth',
    visible: false
  }
]

export default dashboardRoutes
