import { useState } from 'react';

export type FeaturedSong = {
  id: string;
  title: string;
  artist: string;
  album: string;
};

export const featuredSongs: FeaturedSong[] = [
  {
    id: '1',
    title: 'Midnight Echo',
    artist: 'Luna',
    album: 'Night Drive',
  },
  {
    id: '2',
    title: 'Neon Dreams',
    artist: 'Nova',
    album: 'After Dark',
  },
  {
    id: '3',
    title: 'Starlight',
    artist: 'Iris',
    album: 'Cosmic',
  },
];

export function useSongsLogic() {
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);

  const [selectedSongId, setSelectedSongId] = useState('1');

  const songSelect = (songId: string) => {
    setSelectedSongId(songId);
  };

  const selectedSong = featuredSongs.find(
    (song) => song.id === selectedSongId
  );

  const handlePlayPress = (songId: string) => {
    setPlayingSongId(
      playingSongId === songId ? null : songId
    );
  };

  const otherSongs = featuredSongs.filter(
    (song) => song.id !== selectedSongId
  );

  return {
    playingSongId,
    handlePlayPress,
    selectedSong,
    songSelect,
    otherSongs,
  };
}