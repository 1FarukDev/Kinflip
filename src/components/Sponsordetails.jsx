import React from "react";
function Sponsorsdetails(props){
    // console.log(props);
        return(
            <section>
                <img src={`./images/${props.coverImg}`} alt="Sponsor Image" />
                <h1>{props.name}</h1>
                <h3>Founder:{props.founder}</h3>
            </section>
        )
}

export default Sponsorsdetails;