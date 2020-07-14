import Car from '../Models/car.js'
import store from '../store.js'

// @ts-ignore
const _api = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api",
    timeout: 3000
})

class CarsService {
    constructor() {
        this.getCars()
    }



    getCars() {
        _api.get("cars").then(res => {
            console.log(res);
            let cars = res.data.data.map(rawData => new Car(rawData))
            store.commit("cars", cars)
        }).catch(err => console.error(err))
    }

    bidOnCar(carId) {
        let carUpdate = store.State.cars.find(c => c.id == carId)
        carUpdate.price += 100
        _api.put("cars/" + carId, carUpdate).then(res => {
            this.getCars()
        }).catch(err => console.error(err))
    }

    deleteCar(carId) {
        _api.delete("cars/" + carId).then(res => {
            this.getCars()
        }).catch(err => console.error(err))
    }


    addCar(rawData) {
        _api.post("cars", rawData).then(res => {
            this.getCars()
        }).catch(err => console.error(err))
    }
}

const SERVICE = new CarsService()

export default SERVICE