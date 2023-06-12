import React from "react";
import book from "../../assets/Img/catalogue.png"

export default function LeftSection() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
          <img
            src={book}
            alt=""
            className="img-fluid"
            style={{ marginTop: "-50px" }}
          />

          <h1>Veiliger wonen in uw eigen huis</h1>
          <p>
            Als u meer moeite hebt met traplopen, kan een traplift een uitkomst
            zijn. U wordt veilig en comfortabel naar boven en beneden gebracht.
            In onze gratis traplift brochure kunt u op uw gemak alles lezen over
            trapliften. Met deze brochure krijgt u een beeld van de
            mogelijkheden en modellen, maar ook de aankoop en financiering.
          </p>

          <h3>Vraag onze brochure aan en ontdek:</h3>
        </div>
      </div>
  );
}
