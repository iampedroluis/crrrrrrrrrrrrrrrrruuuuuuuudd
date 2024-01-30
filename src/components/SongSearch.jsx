import React, { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) {
      return;
    }
    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      let songUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    
      setLoading(true);
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      console.log(artistRes, songRes)

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);

    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
      {loading && <Loader />}
    </div>
  );
};
