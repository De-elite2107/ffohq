import React from 'react'
import Search from './search';

const Layout = (props: any) => {
  return (
    <>
        <Search/>
        {props.children}
    </>
  )
}

export default Layout;