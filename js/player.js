let playBtn = document.getElementById('submit');
let form = document.getElementById('form');
let dropdown = document.getElementById('dropdown');
let showFavAlbum = document.getElementById('showFavAlbum');
let favoriteAlbum = document.getElementById('favoriteAlbum');
let span = document.createElement('span');
let playList = [
    ['Avenged Sevenfold', 'City of Evil'],
    ['Eminem', 'The Eminem Show'],
    ['Weezer', 'Weezer(Teal Album)'],
    ['Green Day', 'American Idiot'],
    ['System Of A Down', 'Toxicity']
];

for(let i = 0; i < playList.length; i++) {
    let option = document.createElement('option'),
    txt = document.createTextNode(playList[i], playList[i]);
    option.appendChild(txt);
    option.setAttribute('value',`album${[i+1]}`);
    dropdown.insertBefore(option, dropdown.lastChild);
}

class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

var jbox = new Jukebox();

const album1 = new Album('Avenged Sevenfold', 'City of Evil');
const album2 = new Album('Eminem', 'The Eminem Show');
const album3 = new Album('Weezer', 'Weezer(Teal Album)');
const album4 = new Album('Green Day', 'American Idiot');
const album5 = new Album('System Of A Down', 'Toxicity');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);
jbox.addAlbum(album4);
jbox.addAlbum(album5);

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdown.value === 'album1') {
        album1.play()
    } else if (dropdown.value === 'album2') {
        album2.play()
    } else if (dropdown.value === 'album3') {
        album3.play()
    } else if (dropdown.value === 'album4') {
        album4.play()
    } else if (dropdown.value === 'album5') {
        album5.play()
    }
    if (span.parentNode == favoriteAlbum) {
        favoriteAlbum.removeChild(span)
    }
})
showFavAlbum.addEventListener('click', (e) =>{
    span = document.createTextNode(`Your favorite album is: ${jbox.favoriteAlbum()}`)
    favoriteAlbum.appendChild(span)
})