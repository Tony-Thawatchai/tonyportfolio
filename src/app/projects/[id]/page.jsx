
import React from 'react'
import { project } from '@/app/content/project/project'
import LayoutSingle from '@/app/layout/LayoutSingle'

function page({params}) {
  // console.log("params",params)
  // console.log("content", project[params.id] )
    return (
    <>
      <LayoutSingle content={project[params.id]}/>
    </>
  )
}

export default page
