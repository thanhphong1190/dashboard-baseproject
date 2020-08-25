import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">Orient</a>
        <span className="ml-1">&copy; 2020 Orient.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">Orient-CoreUI</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
