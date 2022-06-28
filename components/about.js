import Image from 'next/image'
import drConrad from '../public/TimHeadshot.jpg'


function About() {
    return <div id="about">

        <div className="container p-4 mt-5">
            <div className="row" >
                <div className="col-sm-12">
                    <h2 className="text-center">Tim J. Conrad, M.D.</h2>
                    <h3 className="text-center mb-5">Board Certified Opthalmologist</h3>
                </div>
                <div className="col-lg-6 ">
                    <p className="text-left">Trained at Duke University, University of North Carolina in Chapel Hill, and the Kentucky Lions Eye Research Center at the University of Louisville, Dr. Conrad is committed to providing a personal comprehensive approach to eye care.</p>
                    <p>Dr. Tim Conrad was born in 1960 in Louisville, Kentucky, and spent his adolescent years in nearby Palmyra, Indiana. After graduating at the top of his high school class, he attended Purdue University on full scholarship where he achieved a BS degree in Chemical Engineering. From there he worked with Marathon Oil Company in Ohio for four years writing and developing analytical software.</p>
                    <p>In 1987 Dr. Conrad matriculated at Duke University School of Medicine, one of the nation’s top medical schools. Dr. Conrad excelled at Duke, receiving many honors and doing original collaborative research on corneal neovascularization (abnormal blood vessel growth in the front part of the eye) which yielded a new system for measuring blood vessel growth. In 1991 he was named a Scholar in Pathology and attained his M.D. degree. After Duke, Dr. Conrad trained in Internal Medicine at the University of North Carolina in Chapel Hill and returned to Louisville to complete his residency in Ophthalmology at the Kentucky Lions Eye Research Center at the University of Louisville.</p>
                    <p>Upon completion he started Conrad Eye Centers to provide surgical, medical, and routine eye care to the Louisville area. Dr. Conrad is double board certified through the American Board of Ophthalmology and the National Board of Ophthalmology, a fellow of the American Academy of Ophthalmology, and a member of the Kentucky Medical Association and the Indiana State Medical Association.</p>
                    <p>Dr. Conrad lives in Louisville with his wife Margaret raising their five children, Joe, Laurie, Julie, David, and Ginny. Dr. Conrad is an active community member participating in many medical interests, Boy Scouts of America, and other local organizations. He has been featured on multiple radio shows and is considered an expert in ophthalmology.</p>
                </div>
                <div className="col-lg-6">
                    <Image alt="scroll down button" src={drConrad} layout="responsive" />
                </div>
            </div>
        </div>
        <div style={{ height: "5vh" }}></div>
        
    </div>
}

export default About