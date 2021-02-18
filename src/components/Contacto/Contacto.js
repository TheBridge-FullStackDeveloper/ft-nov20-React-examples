import React, { Component } from "react";

class Contacto extends Component {
  render() {
    return <div>
            <h2>Contacta con nuestro perrito</h2>
            <img src={process.env.PUBLIC_URL + '/assets/img/dog.jpg'} alt="perro"/>

            <form action="">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            <input type="submit" value="Submit"/>

            </form>

    </div>;
  }
}

export default Contacto;
