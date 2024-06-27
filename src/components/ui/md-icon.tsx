import React from 'react'
import { createComponent } from '@lit/react'
import { MdIcon } from '@material/web/icon/icon'

const BaseIcon = createComponent({
  tagName: 'md-icon',
  elementClass: MdIcon,
  react: React,
})

interface IconProps {
  children: React.ReactNode
  className?: string
  [key: string]: unknown
}

export function Icon({ children, className, ...props }: IconProps) {
  return <BaseIcon className={`notranslate ${className}`} {...props}>{children}</BaseIcon>
}
