import React from 'react'

function payment() {
  return (
    <div>
    <h1>Payment</h1>
    <div>  <form className="mb-5">

    <div className="form-outline mb-5">
      <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
        value="1234 5678 9012 3457" minlength="19" maxlength="19" />
      <label className="form-label" for="typeText">Card Number</label>
    </div>

    <div className="form-outline mb-5">
      <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
        value="John Smith" />
      <label className="form-label" for="typeName">Name on card</label>
    </div>

    <div className="row">
      <div className="col-md-6 mb-5">
        <div className="form-outline">
          <input type="text" id="typeExp" className="form-control form-control-lg" value="01/22"
            size="7"  minlength="7" maxlength="7" />
          <label className="form-label" for="typeExp">Expiration</label>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="form-outline">
          <input type="password" id="typeText" className="form-control form-control-lg"
            value="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
          <label className="form-label" for="typeText">Cvv</label>
        </div>
      </div>
    </div>


        

    <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>

    <h5 class="fw-bold mb-5" style={{position: "absolute", bottom: "0"}}>
      <a href="#!"><i className="fas fa-angle-left me-2"></i>Back to shopping</a>
    </h5>

  </form></div>
  </div>
  )
}

export default payment