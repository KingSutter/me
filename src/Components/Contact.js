import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">
         <div className="row">
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address, Phone, and Email</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span><br />
                     {email}
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
