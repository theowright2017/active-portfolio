import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Header/Navigation/Navigation.js'
import MastHead from './Components/Masthead/Landing/MastHead.js'
import About from './Components/About/About.js'
import Portfolio from './Components/Portfolio/Portfolio.js'
import Contact from './Components/Contact/Contact.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <div className="mainContainer1">

      <Navigation />

      {/*<!-- Masthead --> */}
      <MastHead />

      {/* <!-- About Section --> */}
      <About />

      { /*<!-- Portfolio Section --> */}
      <Portfolio />

      { /* <!-- Contact Section --> */ }
      <Contact />

      { /* <!-- Footer --> */}
      <Footer />
      </div>

    </div>
  );
}

export default App;




// { /*<!-- Services Section --> */}
//   <section className="page-section" id="services">
//     <div className="container">
//       <h2 className="text-center mt-0">At Your Service</h2>
//       <hr className="divider my-4"/>
//       <div className="row">
//         <div className="col-lg-3 col-md-6 text-center">
//           <div className="mt-5">
//             <i className="fas fa-4x fa-gem text-primary mb-4"></i>
//             <h3 className="h4 mb-2">Sturdy Themes</h3>
//             <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 text-center">
//         <div className="mt-5">
//           <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
//           <h3 className="h4 mb-2">Up to Date</h3>
//           <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
//         </div>
//       </div>
//       <div className="col-lg-3 col-md-6 text-center">
//         <div className="mt-5">
//           <i className="fas fa-4x fa-globe text-primary mb-4"></i>
//           <h3 className="h4 mb-2">Ready to Publish</h3>
//           <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
//         </div>
//       </div>
//       <div className="col-lg-3 col-md-6 text-center">
//         <div className="mt-5">
//           <i className="fas fa-4x fa-heart text-primary mb-4"></i>
//           <h3 className="h4 mb-2">Made with Love</h3>
//           <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
//         </div>
//       </div>
//       </div>
//       </div>
//       </section>




// { /* <!-- Call to Action Section --> */}
// <section className="page-section bg-dark text-white">
//   <div className="container text-center">
//     <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
//     <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
//   </div>
// </section>
