const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
       for (let i in library) {
              if (i === "playlists") {
                     for (let j in library[i]) {
                            for (let item in library[i][j]) {
                                   if (item === "tracks") {
                                          console.log(`${j}: Coding Music - ${library[i][j][item].length} tracks`);
                                   }
                            }
                     }

              }
       }
}
// printPlaylists();
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
       for (let i in library) {
              if (i === "tracks") {
                     for (let j in library[i]) {
                            let str = "";
                            for (let item in library[i][j]) {
                                   
                                   if (item === "artist") {
                                          str += "by "
                                   }
                                   if (item === "album" ) {
                                          str+= "("
                                   }
                                   str += library[i][j][item] + " ";
                            }
                            console.log(str + ")");
                     }

              }
       }
}

// printTracks();

const printPlaylistsByGivenPlaylist = function (playList) {
       for (let i in library) {
              if (i === "tracks") {
                     for (let j in library[i]) {
                            let str = "";
                            if(j === playList){
                                   for (let item in library[i][j]) {
                                          
                                          if (item === "artist") {
                                                 str += "by "
                                          }
                                          if (item === "album" ) {
                                                 str+= "("
                                          }
                                          str += library[i][j][item] + " ";
                                   }
                                   console.log(str + ")");
                            }                            
                     }
              }
              if (i === "playlists") {
                     for (let j in library[i]) {
                            if(j === playList){
                                   for (let item in library[i][j]) {
                                          if (library[i][j][item] === playList) {
                                                 console.log(`${j}: Coding Music - ${library[i][j][item].length} tracks`);
                                          }
                                   }
                            }
                     }
              }
       }
}

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
       printPlaylistsByGivenPlaylist(playlistId);
}

//printPlaylist("p02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
       for (let i in library) {
              if (i === "playlists") {
                     for (let j in library[i]) {
                            if(j === playlistId){
                                   for (let item in library[i][j]) {
                                          if (item === "tracks") {
                                                 library[i][j][item].push(trackId);
                                          }
                                   }
                            }
                     }
              }
       } 
}
//addTrackToPlaylist("t01","p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
const addTrack = function (name, artist, album) {
       const obj = {};
       let id = generateUid();
       for (let i in library) {
              if (i === "tracks") {
                     obj["id"] = id;
                     obj["name"] = name;
                     obj["artist"] = artist;
                     obj["album"] = album;
                     library[i][id] = obj;
                     console.log(library[i]);
                     break;
              }
       }
}
addTrack("fun song","megha","Sing a Song")

// adds a playlist to the library
const addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}