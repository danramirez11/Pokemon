class Pokemon {
    constructor(id, name, image, weight, height) {
        this.id = id
        this.name = name
        this.image = image
        this.weight = weight
        this.height = height
    }

    toHtml(pos) {
        return `
        <div class="card" onclick="selected(${pos})">
            <p>${this.name}</p>
            <img width="100" src="${this.image}" />
        </div>
        `
    }

    toHTMLdetail(){

        return `<div class="menu">

        <div class="welcome">
            <img class="p1" src="${this.image}" alt="">
            <div class="title">
            <h1 class="name">${this.name}</h1>
            <p class="wei">Weight: ${this.weight} hg</p>
            <p class="hei">Height: ${this.height} dm</p>
            <button class="fav">
                <p>Add to favorites</p>
                <i class="fa-regular fa-bookmark"></i>
            </button>
            </div>
        </div>
        </div>`
    }
}