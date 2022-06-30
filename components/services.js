import React, { useState, useEffect } from 'react';
import Collapsible from './Collapsible/collapsible';

function Services() {



  return <div id="services">

    <div className="container">
      <h2 className="text-center pb-5">Services </h2>
      <div className='row'>

        <Collapsible label="Glasses and Contacts" readMoreLink={'/Services/GlassesAndContacts'}>
        Conrad Eye Centers focuses on your vision with one-on-one personalized eye exams for any age. Each of our locations has a full service optical boutique. 
        </Collapsible>

        <Collapsible label="Eye Injuries and Infections" readMoreLink={'/Services/EyeInjuries'}>
          Is your eye red, irritated, scratchy, watery, or painful? Dr. Conrad is your convenient, quick, and knowledgeable answer. 
        </Collapsible>

        <Collapsible label="Laser Vision Correction" readMoreLink={'/Services/Laser'}>
        <p>Lasik and PRK</p>

        <p>Reduce your need for glasses or contacts</p> 
        </Collapsible>
      </div>

      <div className='row'>
        <Collapsible label="Eye Diseases" readMoreLink={'/Services/EyeDiseases'}>
          Conrad Eye Centers can provide you the best care and treatment in Louisville for chronic eye diseases such as glaucoma, macular degeneration, diabetic retinopathy, and many others.
        </Collapsible>

        <Collapsible label="Eye Implants" readMoreLink={'/Services/Implants'}>
        Conrad Eye Centers uses the most advanced multi-focal lens implant technology in intraocular lens replacement for cataracts.
        </Collapsible>

        <Collapsible label="Surgical Procedures" readMoreLink={'/Services/SurgicalProcedures'}>
        Cataract Surgery, Chalazion/Stye Excision, and Skin Tag Removal
        </Collapsible>
      </div>

      <div className='row'>
        

        {/* <Collapsible label="Pediatric Opthalmology" readMoreLink={'/Services/Pediactric'}>
          Dr. Conrad sees patients of all ages, and has had additional training in pediatric eye diseases.
        </Collapsible> */}

        {/* <Collapsible label="Cosmetics" readMoreLink={'/Services/Cosmetics'}>
          Latisse and Botox
        </Collapsible> */}
      </div>




    </div>
  </div>
}

export default Services