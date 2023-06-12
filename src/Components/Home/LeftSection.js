import React from "react";
import book from "../../assets/Img/catalogue.png";

export default function LeftSection() {
  const liList = [
    "Tips en adviezen",
    "Grootste assortiment in merken en modellen",
    "Trapliften in ledere prijsklasse",
    "Vul hiernaast uw gegevens in en ontvang de gratis traplift brochure",
  ];
  return (
    <div className="container ">
      <div className="row px-lg-5 d-flex justify-content-end">
        <img
          src={book}
          alt=""
          className="img-fluid"
          style={{ marginTop: "-50px" }}
        />

        <h2 style={{fontWeight:'900'}}>Veiliger wonen in uw eigen huis</h2>
        <p>
          Als u meer moeite hebt met traplopen, kan een traplift een uitkomst
          zijn. U wordt veilig en comfortabel naar boven en beneden gebracht. In
          onze gratis traplift brochure kunt u op uw gemak alles lezen over
          trapliften. Met deze brochure krijgt u een beeld van de mogelijkheden
          en modellen, maar ook de aankoop en financiering.
        </p>

        <h3>Vraag onze brochure aan en ontdek:</h3>
        <ol>
          {
            liList.map((item,index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })
          }
        </ol>
      </div>
    </div>
  );
}
