let album = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`);

let search = new URLSearchParams(window.location.search);
let phar = search.get(`i`);

console.log(window.location);

if (!albums[phar]) {
    album.innerHTML = `Ошибка, редирект на главную страницу через 1 секундe`;
    setTimeout(() => {
        window.location.pathname = `index.html`;
    }, 1000);
} else {

    album.innerHTML = `<div class="card mb-3">
<div class="row">
    <div class="col-4">
        <img src="${albums[phar].img}" alt="" class="img-fluid rounded-start">
    </div>
    <div class="col-8">
        <div class="card-body">
            <h5 class="card-title">${albums[phar].title}</h5>
            <p class="card-text">${albums[phar].description}</p>
            <p class="card-text"><small class="text-muted">${albums[0].year}</small></p>

        </div>
    </div>
</div>
</div>`;
    for (let i = 0; i < albums[phar].tracks.length; i++) {

        playlist.innerHTML += `<li class="list-group-item d-flex align-items-center">
    <img src="assets/play.png" alt="" height="30px" class="me-3">
    <div>
        <div>${albums[phar].tracks[i].title}</div>
        <div>${albums[phar].tracks[i].author}</div>
    </div>
    <div class="ms-auto">${albums[phar].tracks.time}</div>
</li>`;

    }
}