import Login from './Views/Login'
import DashboardPrincipal from './Views/Dashboard'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    component: DashboardPrincipal,
    role: [],
    layout: '/admin',
    fullContent: false,
    visible: true
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'tim-icons icon-single-02',
    component: Login,
    role: [],
    layout: '/auth',
    visible: false
  }
]

export default dashboardRoutes
