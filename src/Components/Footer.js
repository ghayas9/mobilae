import React from 'react'

export default function Footer() {

  const lilist = [
    {
      name:"Privacy Policy",
      link:""
    },
    {
      name:"Impressum ",
      link:""
    },
    {
      name:"Cookie Statment ",
      link:""
    },
    {
      name:"Algemene Voorwaarden ",
      link:""
    },

  ]
  return (
    <div className="container-fluid Footer">
        <ul>
          {
            lilist.map((item,index)=>{
              return(
                <li key={index}>{item.name}</li>
              )
            })
          }
        </ul>
    </div>
  )
}
