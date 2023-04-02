import React from 'react'
import Header from "../components/Header"

type ChildrenProps = {
    children? : React.ReactNode
}

 const index = ({children}:ChildrenProps) => {
  return (
    <>
     <Header />
     <main>
        {children}
     </main>
    </>
  )
}
export default index;
