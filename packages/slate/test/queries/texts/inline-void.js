/** @jsx jsx */

import { jsx } from '../../helpers'

export const input = (
  <value>
    <block>
      one<inline void>two</inline>three
    </block>
  </value>
)

export const run = editor => {
  return Array.from(editor.texts({ at: [] }))
}

export const output = [
  [<text>one</text>, [0, 0]],
  [<text>three</text>, [0, 2]],
]
