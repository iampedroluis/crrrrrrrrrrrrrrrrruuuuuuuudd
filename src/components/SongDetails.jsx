import React from 'react';
import { SongLyrics } from './SongLyrics';
import { Message } from './Message';

export const SongDetails = ({ search, lyric }) => {
  if(!lyric ) return null 

  return (
  <div>
    {lyric.err || lyric.name === "AbortError" ? <Message msg={`Error: no se encontro la cancion " ${search.song} de ${search.artist} " `} bgColor="#dc3545" /> : (
      <>
      <h2>Letra de {search.artist} - {search.song}</h2>
      <SongLyrics lirycs={lyric.lyrics} />
      </>
    ) }
      
        
  </div>
  )
}


