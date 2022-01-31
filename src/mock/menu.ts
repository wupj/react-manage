import Mock from 'mockjs'

Mock.mock(new RegExp('api/menu/getMenu'), () => ({
  code: 200,
  data: [
    {
      name: '首页',
      href: '/home',
    },
    {
      name: '图表',
      children: [
        {
          name: '折线图',
          href: '/charts/lineChart',
        },
        {
          name: '柱图',
          href: '/charts/barChart',
        },
      ],
    },
    {
      name: '表格',
      children: [
        {
          name: '基础表格',
          href: '/table/baseTable',
        },
      ],
    },
  ],
}))
