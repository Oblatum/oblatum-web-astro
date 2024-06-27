interface RouterConfigType {
  name: string
  icon: string
  path: string
}

// 添加一个RouterConfig类型的数组
export const HeaderMenuConfig: Array<RouterConfigType> = [
  {
    name: '首页',
    icon: 'home',
    path: '/',
  },
  {
    name: '下载',
    icon: 'download',
    path: 'download',
  },
  {
    name: '申请',
    icon: 'markunread_mailbox',
    path: 'apply',
  },
]
