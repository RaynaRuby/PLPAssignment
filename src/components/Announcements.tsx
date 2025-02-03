const Announcements = () => {
  return (
      <div className="bg-white p-4 rounded-md">
          <div className='flex items-center justify-between'>
              <h1 className='text-xl font-semibold'>Announcements</h1>
              <span className="text-xs text-gray-400">View All</span>
          </div>
          <div className='flex flex-col gap-4 mt-4'>
              <div className='bg-blue-100 rounded-md p-4'>
                  <div className='flex items-center justify-between'>
                      <h2 className="font-medium">Main Quiz on Wednesday</h2>
                      <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-02-08</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                      The Quiz will cover topics from Week 6 to Week 10. Make sure to prepare well.
                  </p>
              </div>
          </div>
          <div className='bg-red-100 rounded-md p-4'>
              <div className='flex items-center justify-between'>
                  <h2 className="font-medium">Assignment Brief Released</h2>
                  <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-02-08</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                    The Assignment brief for the final project has been released. Make sure to check the details
              </p>
          </div>
          <div className='bg-yellow-100 rounded-md p-4'>
              <div className='flex items-center justify-between'>
                  <h2 className="font-medium">Test Results Released</h2>
                  <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-02-08</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                    The results for the last test have been released. Make sure to check your scores
              </p>
          </div>
      </div>
  );
}

export default Announcements;