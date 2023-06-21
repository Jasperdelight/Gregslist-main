export const HouseView = /*html*/ `


<div class="container-fluid">
  <section class="row">
    <div class="col-12 p-4">
      <h1 class= 'm-3'>Houses</h1>
      <button class="btn btn-success ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#carCollapse" aria-expanded="false" aria-controls="collapseExample">
         House For Sale?
      </button>
    </div>
  </section>
  <section class="row">
    <div class="col-10 m-auto">
      <div class="collapse" id="carCollapse">
        <div class="card card-body">
          <form onsubmit="app.HousesController.createHouse(event)">
          <div>

    

          <div>
            <label for="housePrice">Price</label>
            <input id="housePrice" type="number" min="" max="" required name="price">
          </div>

          <div>
            <label for="houseBedrooms">Bedrooms</label>
            <input id="houseBedrooms" type="number" min="" max="" required name="bedrooms">
          </div>

          <div>
            <label for="houseBathrooms">Bathrooms</label>
            <input id="houseBathrooms" type="number" min="" max="" required name="bathrooms">
          </div>

          <div>
            <label for="houseYear">Year</label>
            <input id="houseYear" type="number" min="1800" max="2024" required name="year">
          </div>

          <div>
            <label for="houseSqft">Sq Ft</label>
            <input id="houseSqft" type="number" min="" max="" required name="sqft">
          </div>

          <div>
          <label for="houseImg">Image URL</label>
          <input type="url" id="houseImg" maxlength="300" required name="img">
        </div>

          <div>
          <label for="houseDescription">Description</label>
          <textarea id="houseDescription" name="description" rows="10" class="w-50">
          </textarea>
        </div>


          <button type="submit">Submit</button>
        </form>

        </div>
      </div>
    </div>
  </section>


  <section id="houseListings" class="row mt-3">
  
  </section>
</div>
`