import React from 'react'
import { createComponent } from '@lit/react'
import { MdTextButton } from '@material/web/button/text-button'
import { MdIconButton } from '@material/web/iconbutton/icon-button'
import { MdElevatedButton } from '@material/web/button/elevated-button'
import { MdFilledTonalButton } from '@material/web/button/filled-tonal-button'
import { MdFilledButton } from '@material/web/button/filled-button'
import { MdFilledTonalIconButton } from '@material/web//iconbutton/filled-tonal-icon-button'
import { MdOutlinedIconButton } from '@material/web//iconbutton/outlined-icon-button'

export const TextButton = createComponent({
  tagName: 'md-text-button',
  elementClass: MdTextButton,
  react: React,
  events: {
    onClick: 'click',
  },
})

export const IconButton = createComponent({
  tagName: 'md-icon-button',
  elementClass: MdIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
})

// md-filled-tonal-icon-button
export const FilledTonalIconButton = createComponent({
  tagName: 'md-filled-tonal-icon-button',
  elementClass: MdFilledTonalIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
})

// md-outlined-icon-button
export const OutlinedIconButton = createComponent({
  tagName: 'md-outlined-icon-button',
  elementClass: MdOutlinedIconButton,
  react: React,
  events: {
    onClick: 'click',
  },
})

export const ElevatedButton = createComponent({
  tagName: 'md-elevated-button',
  elementClass: MdElevatedButton,
  react: React,
  events: {
    onClick: 'click',
  },
})

export const FilledTonalButton = createComponent({
  tagName: 'md-filled-tonal-button',
  elementClass: MdFilledTonalButton,
  react: React,
  events: {
    onClick: 'click',
  },
})

export const FilledButton = createComponent({
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
  react: React,
  events: {
    onClick: 'click',
  },
})
