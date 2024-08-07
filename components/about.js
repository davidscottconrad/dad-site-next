import Image from "next/image";
import drConrad from "../public/TimHeadshot.JPG";
import laurie from "../public/Laurie_3.JPG";

function About() {
  return (
    <div id="about">
      <div className="container p-4 mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <div>
              <Image
                alt="Dr. Laurie Wilbanks Headshot"
                src={laurie}
                layout="responsive"
                id="headshot"
              />
            </div>
            <h2 className="text-center mt-2">Laurie Wilbanks, MD</h2>
            <h3 className="text-center">Board Certified Ophthalmologist</h3>
            <p className="text-left" style={{ marginTop: 1 + "em" }}>
              Dr. Laurie Wilbanks is a board-certified ophthalmologist
              specializing in medical and surgical care of glaucoma. Dr.
              Wilbanks is a native of Louisville, Kentucky. She graduated from
              Purdue University, then went on to complete her medical degree at
              the University of Louisville. After medical school, Dr. Wilbanks
              relocated to Charleston, South Carolina where she completed both
              her internship in General Surgery and her residency in
              Ophthalmology at the Medical University of South Carolina. After
              residency, Dr. Wilbanks worked in a private practice as a general
              ophthalmologist with a focus on cataract surgery as well as the
              care of a wide variety of conditions affecting the eyes and
              vision. During her years working in private practice, Dr. Wilbanks
              developed a passion for caring for patients with glaucoma. She
              decided to return to the Medical University of South Carolina to
              complete a fellowship in Glaucoma to expand her skillset to
              include surgical glaucoma care.
            </p>
            <p>
              Dr. Wilbanks’s unique experience allows her to offer customized
              glaucoma and cataract care to her patients. In addition to
              traditional glaucoma incisional surgeries, Dr. Wilbanks is also
              proficient in minimally invasive glaucoma surgery and combined
              cataract and glaucoma surgery. She has experience with advanced
              technology intraocular lenses, including toric lenses, multifocal
              lenses, and extended depth of focus lenses. Dr. Wilbanks enjoys
              working closely with her patients to tailor each of their
              individual needs and circumstances.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <Image
                alt="Dr. Tim Conrad Headshot"
                src={drConrad}
                layout="responsive"
                id="headshot"
              />
            </div>
            <h2 className="text-center mt-2">Tim Conrad, MD</h2>
            <h3 className="text-center">Board Certified Ophthalmologist</h3>
            <p className="text-left" style={{ marginTop: 1 + "em" }}>
              Trained at Duke University, University of North Carolina in Chapel
              Hill, and the Kentucky Lions Eye Research Center at the University
              of Louisville, Dr. Conrad is committed to providing a personal
              comprehensive approach to eye care.
            </p>
            <p>
              Dr. Tim Conrad was born in 1960 in Louisville, Kentucky, and spent
              his adolescent years in nearby Palmyra, Indiana. After graduating
              at the top of his high school class, he attended Purdue University
              on full scholarship where he achieved a BS degree in Chemical
              Engineering. From there he worked with Marathon Oil Company in
              Ohio for four years writing and developing analytical software.
            </p>
            <p>
              In 1987 Dr. Conrad matriculated at Duke University School of
              Medicine, one of the nation’s top medical schools. Dr. Conrad
              excelled at Duke, receiving many honors and doing original
              collaborative research on corneal neovascularization (abnormal
              blood vessel growth in the front part of the eye) which yielded a
              new system for measuring blood vessel growth. In 1991 he was named
              a Scholar in Pathology and attained his M.D. degree. After Duke,
              Dr. Conrad trained in Internal Medicine at the University of North
              Carolina in Chapel Hill and returned to Louisville to complete his
              residency in Ophthalmology at the Kentucky Lions Eye Research
              Center at the University of Louisville.
            </p>
            <p>
              Upon completion he started Conrad Eye Centers to provide surgical,
              medical, and routine eye care to the Louisville area. Dr. Conrad
              is double board certified through the American Board of
              Ophthalmology and the National Board of Ophthalmology, a fellow of
              the American Academy of Ophthalmology, and a member of the
              Kentucky Medical Association and the Indiana State Medical
              Association.
            </p>
            <p>
              Dr. Conrad lives in Louisville with his wife Margaret where they
              raised their five children, Joe, Laurie, Julie, David, and Ginny.
              He is an active community member participating in many medical
              interests and local organizations, and has been featured on
              multiple radio shows as an expert in Ophthalmology. Outside of the
              office Dr. Conrad enjoys spending time with his family, their
              poodles, and being “Pop-Pop” to his five grandchildren. He’s also
              an avid sports fan and cheers on his various Alma Maters, Purdue,
              Duke, and UofL.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: "5vh" }}></div>
    </div>
  );
}

export default About;
