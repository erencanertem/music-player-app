import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  songEndHandler,
}) => {
  return (
    <div
      className={`library ${libraryStatus === true ? "active-library" : ""}`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            setSongs={setSongs}
            songEndHandler={songEndHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
