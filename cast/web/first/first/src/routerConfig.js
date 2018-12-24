import BasicLayout from './layouts/BasicLayout';
// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import User from './pages/User';
import Dashboard from './pages/Dashboard';

const routerConfig = [
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/user/login',
    layout: BasicLayout,
    component: User,
  },
];

export default routerConfig;