import Mock from 'mockjs'

const users = Mock.mock({
  'data|1-100': [
    {
      name: '@cname',
      'id|+1': 1,
      'age|10-60': 0,
      city: '@city(true)',
      birthday: '@date("yyyy-MM-dd")',
    },
  ],
})

Mock.mock(new RegExp('api/table/users'), () => ({
  code: 200,
  data: users,
  total: users.data.length,
}))
