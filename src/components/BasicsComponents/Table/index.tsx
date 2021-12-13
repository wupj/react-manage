import React from 'react'
import ProTable from '@ant-design/pro-table'

export default function BaseTbale(prop: any) {
  const { key, columns, params, request } = prop
  return (
    <>
      <ProTable
        rowKey={key}
        columns={columns}
        params={params}
        request={request}
        rowSelection={{
          type: 'checkbox',
        }}
        pagination={{
          showQuickJumper: true,
          defaultPageSize: 10,
          showTotal: (total: number) => `共${total}条`,
        }}
        search={false}
        toolBarRender={false}
        tableAlertRender={false}
        showSorterTooltip={false}
      />
    </>
  )
}
