import Image from "next/image";
import drConrad from "../public/TimHeadshot.JPG";

function About() {
  return (
    <div id="about">
      <div className="container p-4 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
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
              Medicine, one of the nation&apos;s top medical schools. Dr. Conrad
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
              poodles, and being &ldquo;Pop-Pop&rdquo; to his five grandchildren. He&apos;s also
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
