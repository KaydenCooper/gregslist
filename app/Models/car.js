export default class Car {
    constructor(data) {
        this.id = data._id || data.id
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
    }
    get Template() {
        return `
      <div class="col-3 border rounded bg-light shadow p-2 text-center m-3">
                <h1>${this.make}</h1>
                <h1>${this.model}</h1>
                <h1>${this.year}</h1>
                <h1>${this.price}</h1>
                <img class="img-fluid" src="${this.imgUrl}" alt="image">
                <h1>${this.description}</h1>
                <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">DELETE</button>
                <button class="btn btn-primary" onclick="app.carsController.bidOnCar('${this.id}')">BID</button>
            </div>

`

    }
}

