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
    this.imgUrl = data.imgUrl
  }

  get HouseTemplate() {
    return `
    <div class="container-fluid">
    <section class="row">
      <div class="col-10">
        <section class="row">
          <div class="col-6">
            <img class="img-fluid"
              src="${this.imgUrl}"
              alt="house">
          </div>
          <div class="col-6">
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

