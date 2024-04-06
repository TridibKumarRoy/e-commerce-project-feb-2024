import React from 'react'
import './error.css'

export const Error404 = () => {
  return (
      <>
          <div class="error-page">
              <div>
                  <h1 data-h1="404">404</h1>
                  <p data-p="NOT FOUND">NOT FOUND</p>
                  <a href="/" className='errpageHomeButton'>Go to home</a>
              </div>
          </div>
          <div id="particles-js"></div>
      </>
  )
}
