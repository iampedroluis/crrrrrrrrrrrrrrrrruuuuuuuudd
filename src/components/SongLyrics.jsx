import React from 'react'

export const SongLyrics = ({lirycs}) => {
  return (
    <section>
    <blockquote style={{whiteSpace:"pre-wrap"}}>{lirycs}</blockquote></section>
  )
}
