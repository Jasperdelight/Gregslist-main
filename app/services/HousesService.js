import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHomes() {
  saveState('houses', AppState.houses)
}


class HousesService {

  deleteHome(houseId) {
    const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
    console.log('button working in service', houseIndex)
    AppState.houses.splice(houseIndex, 1)
    _saveHomes()
    AppState.emit('houses')
    console.log(AppState.houses)
  }


  createHouse(houseData) {
    const newHouse = new House(houseData)

    console.log('new house?', newHouse)

    AppState.houses.push(newHouse)

    AppState.emit('houses')
    _saveHomes();
  }
}

export const houseService = new HousesService()