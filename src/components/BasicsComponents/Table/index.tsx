import React from 'react'
import ProTable from '@ant-design/pro-table'

export default function BaseTable(prop: any) {
  const { rowKey, columns, params, request } = prop
  return (
    <>
      <ProTable
        rowKey={rowKey}
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
