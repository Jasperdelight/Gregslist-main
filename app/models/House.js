import { generateId } from "../utils/generateId.js";


export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.img = data.img
  }

  get HouseTemplate() {
    return `
    <div class="container-fluid">
    <section class="row">
      <div class="col-10">
        <section class="row elevation-5">
          <div class="col-6">
          <img class="img-fluid car-img"
            src="${this.img}"
            alt="${this.make} ${this.model}">
          </div>
          <div class="col-6 p-4 text-center">
            <section class="row">
              <div class="col-6">
                <h2>Price $${this.price}</h2>
                <h3>Bedrooms ${this.bedrooms}</h3>
                <h4>Bathrooms ${this.bathrooms}</h4>
              </div>
              <div class="col-6">
                <h5>SQ FT ${this.sqft}"</h5>
                <h6>Year ${this.year}</h6>
                <p class="">${this.description}</p>
                <button onclick="app.HousesController.deleteHome('${this.id}')" class="btn btn-danger mt-2">Delete House</button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
    `
  }

}

