import React, { useContext } from 'react'
import {Context} from "../../main"

function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by lakshya</div>
]
      
    </footer>
  )
}

export default Footer