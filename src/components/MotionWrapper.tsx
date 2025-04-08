'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  variants?: any;
  viewport?: any;
}

const MotionDiv = ({ 
  children, 
  className, 
  initial, 
  animate, 
  transition, 
  variants, 
  viewport,
  ...props 
}: MotionDivProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv;
