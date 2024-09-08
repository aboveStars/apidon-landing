import { chakra, ChakraProps, HTMLChakraProps } from '@chakra-ui/react'
import { motion, HTMLMotionProps } from 'framer-motion'

export interface MotionBoxProps
  extends HTMLMotionProps<'div'>,
    Omit<ChakraProps, 'transition' | 'color'> {}

// @ts-ignore
export const MotionBox = motion(chakra.div)
