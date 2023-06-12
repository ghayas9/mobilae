import React from "react";

export default function RightSection() {
  return (
    <div className="container RightSection">
      <div className="row px-lg-5  d-flex justify-content-start mt-5">
        <h2 style={{}}>Vergelijk 17 trapliften van 6 fabrikanten</h2>
        <button
          className="btn btn-lg"
          style={{ backgroundColor: "orangered", color: "white" }}
        >
          Vraag de gratis en vrijblijvende brochure aan
        </button>
      </div>

      <div className="row row px-lg-5  d-flex justify-content-start mt-5">
        <form className="card p-5">
          <div className="form-group mt-2">
            <label for="exampleInputEmail1">Aanhef:</label>
            <select className="form-control form-control">
              <option>Aanhef</option>
              <option>Aanhef 1</option>
              <option>Aanhef 2 </option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label for="formGroupExampleInput">Voornaam:</label>
            <input
              type="text"
              className="form-control mt-2"
              id="formGroupExampleInput"
              placeholder="Bv. Lore"
            />
          </div>
          <div className="form-group mt-2">
            <label for="formGroupExampleInput">Achternaam</label>
            <input
              type="text"
              className="form-control mt-2"
              id="formGroupExampleInput"
              placeholder="Bv. Peeters"
            />
          </div>
          <div className="form-group mt-2">
            <label for="formGroupExampleInput">Telefoonnummer:</label>
            <input
              type="text"
              className="form-control mt-2"
              id="formGroupExampleInput"
              placeholder="Bv. 0471123456"
            />
          </div>

          <div className="form-group mt-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Ja, ik wil graag deze informatie ontvangen en Mobilae mag mij
                per e-mail en/of telefoon contacteren. Ik ga akkoord met de
                voorwaarden
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-lg mt-4 p-3">
            BROCHURE AANVRAGEN {">>"}
          </button>
        </form>
      </div>
    </div>
  );
}
