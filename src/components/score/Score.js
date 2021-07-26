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
    if (rendererRef.current == null) {
      rendererRef.current = new Renderer(
        container.current,
        Renderer.Backends.SVG
      )
    }
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