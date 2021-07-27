import React, { useRef, useEffect } from 'react'
import Vex from 'vexflow'

const VF = Vex.Flow
const { Formatter, Renderer, Stave, StaveNote } = VF

const clefAndTimeWidth = 10

export const Score = ({
  staves = [],
  clef = 'treble',
  timeSignature = '',
  width = 600,
  height = 120
}) => {
  const container = useRef()
  const rendererRef = useRef()

  useEffect(() => {
    //conditional clears existing staves in container div before
    //rendering new staves and notes
    //Direct DOM manipulation that stands in rebellion to React
    //standard practices, but the ends justify the means.
    //This is only intended to be a temporary fix
    if (container.current.hasChildNodes()) {
      container.current.removeChild(container.current.firstChild)
    }
    rendererRef.current = new Renderer(
      container.current,
      Renderer.Backends.SVG
    )
    const renderer = rendererRef.current
    renderer.resize(width, height)
    const context = renderer.getContext()
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed')
    const staveWidth = (width - clefAndTimeWidth) / staves.length - 2

    let currX = 10
    staves.forEach((notes, i) => {
      const stave = new Stave(currX, 0, staveWidth)
      if (i === 0) {
        stave.setWidth(staveWidth)
        stave.addClef(clef)
        //stave.setWidth(staveWidth + clefAndTimeWidth)
        //stave.addClef(clef).addTimeSignature(timeSignature)
      }
      currX += stave.getWidth()
      stave.setContext(context).draw()

      const processedNotes = notes
        .map(note => (typeof note === 'string' ? { key: note } : note))
        .map(note =>
          Array.isArray(note) ? { key: note[0], duration: note[1] } : note
        )
        .map(({ key, ...rest }) =>
          typeof key === 'string'
            ? {
              key: key.includes('/') ? key : `${key[0]}/${key.slice(1)}`,
              ...rest,
            }
            : rest
        )
        .map(
          ({ key, keys, duration = 'w' }) =>
            new StaveNote({
              keys: key ? [key] : keys,
              duration: String(duration),
            })
        )
      Formatter.FormatAndDraw(context, stave, processedNotes, {
        auto_beam: true,
      })
    })
  }, [staves, clef, timeSignature, height, width])

  return <div ref={container} />
}