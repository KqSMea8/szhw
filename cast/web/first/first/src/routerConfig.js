import BasicLayout from './layouts/BasicLayout';
// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import User from './pages/User';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
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
  {
    path: '/page3',
    layout: BasicLayout,
    component: Page3,
  },
  {
    path: '/page4',
    layout: BasicLayout,
    component: Page4,
  },
  {
    path: '/page5',
    layout: BasicLayout,
    component: Page5,
  },
  {
    path: '/page6',
    layout: BasicLayout,
    component: Page6,
  },
  {
    path: '/page7',
    layout: BasicLayout,
    component: Page7,
  },
];

export default routerConfig;
