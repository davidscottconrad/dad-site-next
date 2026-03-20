import Image from "next/image";
import drConrad from "../public/TimHeadshot.JPG";

function About() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Our Team</span>
          <h2>Meet Our Physician</h2>
          <div className="section-divider" />
        </div>

        <div className="about-single">
          <div className="doctor-card">
            <div className="doctor-photo-wrap">
              <Image
                alt="Dr. Tim Conrad"
                src={drConrad}
                width={196}
                height={196}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className="doctor-info">
              <h2>Tim Conrad, MD</h2>
              <p className="credential">Board Certified Ophthalmologist</p>
            </div>
            <div className="doctor-bio">
              <p>
                Trained at Duke University, the University of North Carolina at
                Chapel Hill, and the Kentucky Lions Eye Research Center at the
                University of Louisville, Dr. Conrad is committed to providing a
                personal, comprehensive approach to eye care.
              </p>
              <p>
                Dr. Conrad earned his BS in Chemical Engineering from Purdue
                University on full scholarship before earning his MD from Duke
                University School of Medicine in 1991, where he was named Scholar
                in Pathology and conducted original research on corneal
                neovascularization.
              </p>
              <p>
                He is double board certified through the American Board of
                Ophthalmology and the National Board of Ophthalmology, a Fellow of
                the American Academy of Ophthalmology, and a member of the
                Kentucky Medical Association and Indiana State Medical Association.
                Dr. Conrad founded Conrad Eye Centers to provide surgical, medical,
                and routine eye care to the Louisville area.
              </p>
              <p>
                Dr. Conrad lives in Louisville with his wife Margaret. He enjoys
                time with his five children, five grandchildren, and cheering on
                his alma maters — Purdue, Duke, and UofL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
