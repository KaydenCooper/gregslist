
import _houseService from '../Services/HouseService.js';
import store from '../store.js';

function draw() {
    let template = ''
    let houses = store.State.houses
    houses.forEach(house => template += house.Template)
    document.getElementById("houses").innerHTML = template
}

export default class HouseController {
    constructor() {
        store.subscribe("houses", draw)
    }

    openForms(input) {
        if (input)
            document.getElementById("house").removeAttribute("hidden")
        document.getElementById("houses").removeAttribute("hidden")
        document.getElementById("cars").setAttribute("hidden", 'true')
        document.getElementById("jobs").setAttribute("hidden", 'true')
        document.getElementById("car").setAttribute("hidden", 'true')
        document.getElementById("job").setAttribute("hidden", 'true')
    }

    deleteHouse(houseId) {
        _houseService.deleteHouse(houseId)
    }

    bidOnHouse(houseId) {
        _houseService.bidOnHouse(houseId)
    }

    addHouse(event) {

        event.preventDefault();
        let formData = event.target
        let rawData = {
            year: formData.year.value,
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            levels: formData.levels.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value,
            description: formData.description.value,

        }
        _houseService.addHouse(rawData)

    }
}