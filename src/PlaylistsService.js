const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsInPlaylist(playlistId) {
    const query = {
      text: 'SELECT id, name FROM playlists WHERE id = $1',
      values: [playlistId],
    };
    const result = await this._pool.query(query);

    const querySongs = {
      text: `SELECT songs.id, songs.title, songs.performer
      FROM songs 
      INNER JOIN playlist_songs ON playlist_songs.song_id = songs.id
      WHERE playlist_songs.playlist_id = $1`,
      values: [playlistId],
    };
    const resultSongs = await this._pool.query(querySongs);

    return { playlist: { ...result.rows[0], songs: resultSongs.rows } };
  }
}

module.exports = PlaylistsService;
