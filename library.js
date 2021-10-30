// adds an existing track to an existing playlist
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

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
       },
       printPlaylist : function () {
                     for (let i in this) {
                            if (i === "playlists") {
                                   for (let j in this[i]) {
                                          for (let item in this[i][j]) {
                                                 if (item === "tracks") {
                                                        console.log(`${j}: Coding Music - ${this[i][j][item].length} tracks`);
                                                 }
                                          }
                                   }
              
                            }
                     }
              },
       printTracks : function () {
                     for (let i in this) {
                            if (i === "tracks") {
                                   for (let j in this[i]) {
                                          let str = "";
                                          for (let item in this[i][j]) {
              
                                                 if (item === "artist") {
                                                        str += "by "
                                                 }
                                                 if (item === "album") {
                                                        str += "("
                                                 }
                                                 str += this[i][j][item] + " ";
                                          }
                                          console.log(str + ")");
                                   }
              
                            }
                     }
              },

       printPlaylist : function (playList) {
                     for (let i in this) {
                            if (i === "tracks") {
                                   for (let j in this[i]) {
                                          let str = "";
                                          if (j === playList) {
                                                 for (let item in this[i][j]) {
              
                                                        if (item === "artist") {
                                                               str += "by "
                                                        }
                                                        if (item === "album") {
                                                               str += "("
                                                        }
                                                        str += this[i][j][item] + " ";
                                                 }
                                                 console.log(str + ")");
                                          }
                                   }
                            }
                            if (i === "playlists") {
                                   for (let j in this[i]) {
                                          if (j === playList) {
                                                 for (let item in this[i][j]) {
                                                        if (this[i][j][item] === playList) {
                                                               console.log(`${j}: Coding Music - ${this[i][j][item].length} tracks`);
                                                        }
                                                 }
                                          }
                                   }
                            }
                     }
              },
       addTrackToPlaylist : function (trackId, playlistId) {
                     for (let i in this) {
                            if (i === "playlists") {
                                   for (let j in this[i]) {
                                          if (j === playlistId) {
                                                 for (let item in this[i][j]) {
                                                        if (item === "tracks") {
                                                               this[i][j][item].push(trackId);
                                                        }
                                                 }
                                          }
                                   }
                            }
                     }
              },
       addTrack : function (name, artist, album) {
                     const obj = {};
                     let id = generateUid();
                     for (let i in this) {
                            if (i === "tracks") {
                                   obj["id"] = id;
                                   obj["name"] = name;
                                   obj["artist"] = artist;
                                   obj["album"] = album;
                                   this[i][id] = obj;
                                   break;
                            }
                     }
              },
              
              // adds a playlist to the library
       addPlaylist : function (name) {
                     const obj = {};
                     let id = generateUid();
                     for (let i in this) {
                            if (i === "playlists") {
                                   obj["id"] = id;
                                   obj["name"] = name;
                                   this[i][id] = obj;
                                   break;
                            }
                     }
              }
};
// library.printPlaylist();
// library.printTracks();
// library.printPlaylist("p01");
library.addTrackToPlaylist("t01","p01");
library.addPlaylist("a","b","c");
// library.addPlaylist("testPlayList");
console.log(library);
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// printPlaylists();
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)




// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


//printPlaylist("p02");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}