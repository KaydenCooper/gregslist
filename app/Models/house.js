export default class House {
    constructor(data) {
        this.id = data._id || data.id
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
    }
    get Template() {
        return `
      <div class="col-3 border rounded shadow p-2 bg-light text-center m-3">
                <h1>${this.year}</h1>
                <h1>${this.bedrooms}</h1>
                <h1>${this.bathrooms}</h1>
                <h1>${this.levels}</h1>
                <h1>${this.price}</h1>
                <img class="img-fluid" src="${this.imgUrl}" alt="image">
                <h1>${this.description}</h1>
<button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">DELETE</button>
                <button class="btn btn-primary" onclick="app.houseController.bidOnHouse('${this.id}')">BID</button>
            </div>

`
    }
}