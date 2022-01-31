import React, { lazy, Suspense, useEffect, useState } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { cloneDeep } from 'lodash'

import home from '../pages/home'
import barChart from '../pages/charts/barChart'
import lineChart from '../pages/charts/lineChart'
import baseTable from '../pages/table/baseTable'

interface routeProps {
  routes: Array<Object>
}

const Routes: React.FC<routeProps> = (props: routeProps) => {
  const { routes } = props
  const [routeList, setRouteList] = useState<Array<Object>>([])

  /**
   * 获取路由组件地址路径
   * @param {Array} data 菜单数据
   * @return {Array}
   */
  const getRouteList = (data: Array<Object>) => {
    let list: Array<Object> = []
    data.forEach((item: any) => {
      const $item = cloneDeep(item)
      if ($item.path) {
        list.push({
          path: $item.path,
        })
      }
      if ($item.routes) {
        list = [...list, ...getRouteList($item.routes)]
      }
    })
    return list
  }

  useEffect(() => {
    if (routes.length > 0) {
      console.log('-----init Route------')
      const route = getRouteList(routes)
      setRouteList(route)
    }
  }, [routes])

  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route key='/home' path='/home' exact component={home} />
            <Route
              key='/charts/barChart'
              path='/charts/barChart'
              exact
              component={barChart}
            />
            <Route
              key='/charts/lineChart'
              path='/charts/lineChart'
              exact
              component={lineChart}
            />
            <Route
              key='/table/baseTable'
              path='/table/baseTable'
              exact
              component={baseTable}
            />
            <Redirect exact from='/' to='/home' />
          </Switch>
        </Suspense>
      </HashRouter>
    </>
  )
}
export default React.memo(Routes)
