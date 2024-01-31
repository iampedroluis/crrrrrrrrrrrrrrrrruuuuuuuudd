import React from 'react';
import { SongLyrics } from './SongLyrics';
import { Message } from './Message';

export const SongDetails = ({ search, lyric }) => {
  if(!lyric ) return null 

  return (
  <div>
    {lyric.error || lyric.name === "AbortError" ? <Message /> : (
       <>
      <h2>Letra de {search.artist} - {search.song}</h2>
      <SongLyrics search={search} />
      </>
    ) }
      
        
  </div>
  )
}


