import React from 'react'

function billingAddressSample() {
  return (
    <div><form class="needs-validation" novalidate="">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="firstName">First name</label>
        <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
        <div class="invalid-feedback">
          Valid first name is required.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last name</label>
        <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
        <div class="invalid-feedback">
          Valid last name is required.
        </div>
      </div>
    </div>

    

    <div class="mb-3">
      <label for="email">Email <span class="text-muted">(Optional)</span></label>
      <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
      <div class="invalid-feedback">
        Please enter a valid email address for shipping updates.
      </div>
    </div>

    <div class="mb-3">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
      <div class="invalid-feedback">
        Please enter your shipping address.
      </div>
    </div>

    <div class="mb-3">
      <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
      <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
    </div>

    <div class="row">
      <div class="col-md-5 mb-3">
        <label for="country">Country</label>
        <select class="custom-select d-block w-100" id="country" required="choose your country">
          <option value="" disabled>Choose...</option>
          <option>United States</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid country.
        </div>
      </div>
      <div class="mb-3">
      <label for="address2">City <span class="text-muted">(Optional)</span></label>
      <input type="text" class="form-control" id="city" placeholder="City" required="enter your city"/>
    </div>
    
      <div class="col-md-3 mb-3">
        <label for="zip">Postal Code</label>
        <input type="text" class="form-control" id="zip" placeholder="" required=""/>
        <div class="invalid-feedback">
          Zip code required.
        </div>
      </div>
    </div>
     
   
    <hr class="mb-4"/>
    <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
</form></div>
  )
}

export default billingAddressSample