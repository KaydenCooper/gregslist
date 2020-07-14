import _carsService from '../Services/CarsService.js'
import store from '../store.js'

function draw() {
    let template = ''
    let cars = store.State.cars
    cars.forEach(car => template += car.Template)
    document.getElementById("cars").innerHTML = template
}


export default class CarsController {
    constructor() {
        store.subscribe("cars", draw)
    }
    openForms(input) {
        if (input)
            document.getElementById("car").removeAttribute("hidden")
        document.getElementById("cars").removeAttribute("hidden")
        document.getElementById("jobs").setAttribute("hidden", 'true')
        document.getElementById("houses").setAttribute("hidden", 'true')
        document.getElementById("house").setAttribute("hidden", 'true')
        document.getElementById("job").setAttribute("hidden", 'true')
    }

    bidOnCar(carId) {
        _carsService.bidOnCar(carId)
    }

    deleteCar(carId) {
        _carsService.deleteCar(carId)

    }
    addCar(event) {
        event.preventDefault();
        let formData = event.target
        let rawData = {

            make: formData.make.value,
            model: formData.model.value,
            year: formData.year.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value,
            description: formData.description.value,
        }
        _carsService.addCar(rawData)


    }
}