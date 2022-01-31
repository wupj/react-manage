import React, { useState, useEffect } from 'react'
import ProLayout from '@ant-design/pro-layout'
import { HashRouter, NavLink } from 'react-router-dom'
import { cloneDeep } from 'lodash'
import axios from '@/utils/request'

import Router from '../router'

const Layout = () => {
  const [menu, setMenu] = useState<Object>({})
  const [routes, setRoutes] = useState<Array<Object>>([])

  const dealMenuData = (data: Array<Object>) => {
    const $data: Array<Object> = []
    data.forEach((item: any) => {
      const $item = cloneDeep(item)
      if ($item.href) {
        $item.path = $item.href
      }
      if ($item.children) {
        $item.children = dealMenuData($item.children)
      }
      $data.push($item)
    })
    return $data
  }

  useEffect(() => {
    axios.get('api/menu/getMenu').then((res: any) => {
      const route = dealMenuData(res.data)
      setMenu({
        route: {
          path: '/',
          routes: route,
        },
      })
      setRoutes(route)
    })
  }, [])

  return (
    <>
      <ProLayout
        {...menu}
        title='react Manage'
        logo='https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg'
        contentStyle={{
          height: '100Vh',
        }}
        menuItemRender={(item: any) => (
          <HashRouter>
            <NavLink to={item.path}>{item.name}</NavLink>
          </HashRouter>
        )}
        headerRender={false}
        pageTitleRender={false}>
        <Router routes={routes} />
      </ProLayout>
    </>
  )
}

export default Layout
