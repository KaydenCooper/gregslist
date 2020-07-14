
import House from '../Models/house.js'
import store from '../store.js'

// @ts-ignore
const _api = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/",
    timeout: 3000
})


class HouseService {
    constructor() {
        this.getHouse()
    }

    getHouse() {
        _api.get("houses").then(res => {
            console.log(res);
            let houses = res.data.data.map(rawData => new House(rawData))
            store.commit("houses", houses)
        }).catch(err => console.error(err))
    }


    bidOnHouse(houseId) {
        let houseUpdate = store.State.houses.find(h => h.id == houseId)
        houseUpdate.price += 10000
        _api.put("houses/" + houseId, houseUpdate).then(res => {
            this.getHouse()
        }).catch(err => console.error(err))
    }
    deleteHouse(houseId) {
        _api.delete("houses/" + houseId).then(res => {
            this.getHouse()
        }).catch(err => console.error(err))
    }
    addHouse(rawData) {
        _api.post("houses", rawData).then(res => {
            this.getHouse()
        }).catch(err => console.error(err))
    }
}

const SERVICE = new HouseService()
export default SERVICE