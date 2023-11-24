export default function Navbar () {
  return (
    <>
      <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='pl-2 flex items-center justify-start rtl:justify-end gap-2'>
              <span className='flex flex-shrink-0 justify-center items-center w-10 h-10  text-lg font-bold uppercase text-gray-800 bg-white rounded-full '>
                C
              </span>
              <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                Clousor
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
