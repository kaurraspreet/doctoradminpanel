// Table.tsx
'use client'
import React, { ReactNode } from 'react'

interface Column {
  key: string
  header: string
  render: (row: any) => any
}

interface TableProps {
  columns: Column[]
  data: any[]
  showActions?: boolean
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
}

const TableRow: React.FC<{
  row: any
  columns: Column[]
  onEdit?: (row: any) => void
  onDelete?: (row: any) => void
  showActions?: boolean
}> = ({ row, columns, onEdit, onDelete, showActions }) => {
  return (
    <tr>
      {columns.map(column => (
        <td key={column.key} className='px-6 py-4 whitespace-nowrap'>
          {column.render(row)}
        </td>
      ))}
      {showActions && (
        <td className='px-6 py-4 whitespace-nowrap space-x-4'>
          <button
            onClick={() => onEdit && onEdit(row)}
            className='text-blue-500 hover:text-blue-700'
          >
            Edit
          </button>
          <button
            onClick={() => onDelete && onDelete(row)}
            className='text-red-500 hover:text-red-700'
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  )
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  onEdit,
  onDelete,
  showActions
}) => {
  return (
    <table className='min-w-full'>
      <thead className='bg-slate-200'>
        <tr className=' rounded-t-lg'>
          {columns.map(column => (
            <th
              key={column.key}
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              {column.header}
            </th>
          ))}
          {showActions && (
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {data.map((row, index) => (
          <TableRow
            key={index}
            row={row}
            columns={columns}
            onEdit={onEdit}
            onDelete={onDelete}
            showActions={showActions}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
