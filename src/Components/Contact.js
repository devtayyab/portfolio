import React, { Component } from 'react';

class Contact extends Component {

   constructor(props){
      super(props);
      this.state = {name : '', email: '', subject :'', message :''}
      }
      handlechange(e){
         e.preventDefault();
         console.log(this.state)
      }
    
  render() {
     console.log(this.state)
   console.log(this.state)
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form  id="contactForm" name="contactForm" onSubmit={this.handlechange}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue={this.state.name} size="35"
                      id="contactName" name="contactName"
                       onChange={(e)=>{
                         this.setState({name: e.target.value})
                      }}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue={this.state.email} size="35
                     " id="contactEmail" name="contactEmail"
                     onChange={(e)=>{
                        this.setState({email: e.target.value})
                     }}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue={this.state.subject} size="35" 
                     id="contactSubject" name="contactSubject"
                     onChange={(e)=>{
                        this.setState({subject: e.target.value})
                     }}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" defaultValue={this.state.message} rows="15" 
                     id="contactMessage"
                     onChange={(e)=>{
                        this.setState({message: e.target.value})
                     }} 
                     name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button
                     type="submit"
                     // onClick={()=>this.handleChange}
                     >Submit</button>
                     <span id="image-loader">
                        {/* <img alt="" src="images/loader.gif" /> */}
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
                     {email}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
