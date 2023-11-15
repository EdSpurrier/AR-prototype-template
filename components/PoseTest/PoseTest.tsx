'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './PoseTest.module.css'
import { PoseTestProps } from './PoseTest.types'

const PoseTest = ({
  children,
  className,
}: PoseTestProps) => {


  return (
    <div 
      className={clsx(
        styles.root,
        className
      )}
    >
      PoseTest
      {children}
    </div>
  )
}


export default PoseTest