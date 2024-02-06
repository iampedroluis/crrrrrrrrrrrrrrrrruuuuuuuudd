import React, { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) {
      return;
    }
    const fetchData = async () => {
      const {artist, song } = search;

      
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    
      setLoading(true);
      const [songRes] = await Promise.all([
        helpHttp().get(songUrl),
      ]);
      
      
      setLyric(songRes)
      setLoading(false);

    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    
    setSearch(data);
  };

  return (
    <>
  <h2> Lyric Song Search <i className="em em-musical_note" ></i></h2>
    <div className="grid-1-2">
      
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      {search && !loading && <SongDetails search={search} lyric={lyric} />}
      
    </div>
    </>
  );
};
