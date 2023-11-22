'use client'

import React, { useState } from 'react'
import Table from '@/components/admin/Table'
import Modal from '@/components/Modal'
import { usePathname } from 'next/navigation'

const Payments: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [editRowId, setEditRowId] = useState<number | null>(null)

  const columns = [
    {
      key: 'name',
      header: 'Name',
      render: (row: { name: any }) => row.name
    },
    {
      key: 'email',
      header: 'Email Id',
      render: (row: { email: any }) => row.email
    },
    {
      key: 'status',
      header: 'Status',
      render: (row: { status: any }) => row.status
    }
  ]

  const data = [
    { name: 'Denny', email: 'denny@gmail.com', status: 'pending' },
    { name: 'Sara', email: 'sara@gmail.com', status: 'completed' }
  ]

  const handleEdit = (id: number) => {
    setEditRowId(id)
    setShowEditModal(true)
    console.log(`Edit row with ID: ${id}`)
  }

  const handleDelete = (id: number) => {
    console.log(`Delete row with ID: ${id}`)
  }

  const handleEditModalClose = () => {
    setEditRowId(null)
    setShowEditModal(false)
  }

  return (
    <div>
      <h2 className='pb-4 text-xl'>
        Dashboard /
        <strong className='text-2xl text-gray-800 font-semibold'>
          Appointments
        </strong>
      </h2>
      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        showActions={true}
      />
      <Modal
        isOpen={showEditModal}
        onClose={handleEditModalClose}
        title='Edit Entry'
      >
        {/* Edit form or content goes here */}
        <p>Edit entry with ID: {editRowId}</p>
        <button onClick={handleEditModalClose} className='btn-primary'>
          Close
        </button>
      </Modal>
    </div>
  )
}

export default Payments
