import React from 'react'
import img1 from "../../assets/Img/afspraak.png"

export default function BottomSection() {
  return (
   <div className="container-fluid BottomSection py-5">
     <div className="container ">
        <div className="row px-lg-5 d-flex justify-content-start">
            <div className="col-md-6">
                <h1 style={{fontWeight:'900'}}>Vind de geschikte traplift voor uw situatie</h1>
            </div>
        </div>
        <div className="row row px-lg-5 d-flex justify-content-start">
            <div className="col-md-6">
                <p style={{fontSize:'20px'}}>Wilt u weer gemakkelijk naar boven of beneden? Met een Mobilae traplift blijft u mobiel, veilig en zelfstandig in huis. Als onafhankelijk adviseur aan uw zijde helpen wij u bij het kiezen van de juiste traplift. Ons uitgebreide assortiment bevat uitsluitend hoogwaardige modellen van topfabrikanten. Samen met u lopen we de door verschillende mogelijkheden. We bekijken welk model van welke fabrikant het beste past bij uw persoonlijke woonsituatie, uw wensen en behoeften. Met 30 jaar ervaring in heel Europa zorgen we ervoor dat elke stap op weg naar uw nieuwe traplift eenvoudig en goed doordacht is. Van advies tot installatie en klantenservice. Onze unieke garanties en jaarlijks onderhoud zorgen ervoor dat u jarenlang tevreden bent.</p>
            </div>
            <div className="col-md-6">
                <img src={img1} alt="" className='img-fluid rounded' srcset="" />
            </div>
        </div>
    </div>
   </div>
  )
}
