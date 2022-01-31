import React, { useEffect, useState } from 'react'
import BaseTable from '@/components/BasicsComponents/Table'
import axios from '@/utils/request'

const baseTable = () => {
  const [rowKey] = useState('id')
  const [columns] = useState([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
    },
  ])
  const [params] = useState({
    pageNo: 1,
    pageSize: 10,
  })
  const getData = async (param: any) => {
    const res: any = await axios({
      method: 'post',
      url: 'api/table/users',
      data: param,
    })
    return {
      data: res?.data?.data,
      total: res?.total,
      success: true,
    }
  }
  useEffect(() => {
    console.log('-----init baseTable------')
  }, [])
  return (
    <>
      <BaseTable
        rowKey={rowKey}
        columns={columns}
        params={params}
        request={getData}
      />
    </>
  )
}

export default baseTable
