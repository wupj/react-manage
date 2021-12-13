import React, { useState, useEffect } from 'react'
import ProLayout from '@ant-design/pro-layout'
import { HashRouter, NavLink } from 'react-router-dom'

import axios from '@/utils/request'

const Layout = () => {
  const [menu, setMenu] = useState({})

  useEffect(() => {
    axios.get('/menu.json').then((res: any) => {
      setMenu({
        route: {
          path: '/',
          routes: res.data
        }
      })
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
        pageTitleRender={false}
      />
    </>
  )
}

export default Layout
