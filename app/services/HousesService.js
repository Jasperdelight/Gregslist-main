import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {


  createHouse(houseData) {
    const newHouse = new House(houseData)

    console.log('new house?', newHouse)

    AppState.houses.push(newHouse)
  }
}

export const houseService = new HousesService()