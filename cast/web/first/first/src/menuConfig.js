// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      {
        name: '监控页',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '图表页',
    path: '/chart',
    icon: 'chart1',
    children: [
      {
        name: '常用图表',
        path: '/chart/list',
      },
    ],
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'table',
    children: [
      {
        name: '基础表格',
        path: '/table/basic',
      },
      {
        name: '通用表格',
        path: '/table/general',
      },
    ],
  },
  {
    name: 'login',
    path: '/user/login',
    icon: 'home',
  },
  {
    name: 'Nav3',
    path: '/page3',
    icon: 'home',
  },
  {
    name: '文章管理',
    path: '/info',
    icon: 'home',
    children: [
      { name: '文章列表', path: '/page4' },
      { name: '添加文章', path: '/page5' },
    ],
  },
  {
    name: 'Nav6',
    path: '/page6',
    icon: 'home',
  },
  {
    name: 'Nav7',
    path: '/page7',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
