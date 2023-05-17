import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <svg className='mt-6' width="251px" height="251px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"/>

<g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="alert-circle"> <g> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.56" x1="12" x2="12" y1="8" y2="12"/> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.56" x1="12" x2="12" y1="16" y2="16"/> <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.56"/> </g> </g> </g> </g>

</svg>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
