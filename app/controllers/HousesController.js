import { AppState } from "../AppState.js";
import { houseService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _drawHomes() {
  const house = AppState.houses
  let template = ''
  house.forEach(house => template += house.HouseTemplate)
  setHTML('houseListings', template)
}

export class HousesController {
  constructor() {

    console.log('house controller here', AppState.houses)
    _drawHomes();
  }

  createHouse(event) {

    event.preventDefault()
    console.log('submit?')

    const form = event.target
    const houseData = getFormData(form)
    console.log('House info?', houseData)
    houseService.createHouse(houseData)
    form.reset()
  }

}