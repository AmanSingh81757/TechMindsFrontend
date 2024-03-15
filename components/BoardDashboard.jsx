import React from 'react'

const BoardDashboard = () => {
  return (
    <>
    <div className="px-6 py-5 font-semibold border-b border-gray-100">
              The number of applied and left students per month
            </div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                Chart
              </div>
            </div>
    </>
  )
}

export default BoardDashboard