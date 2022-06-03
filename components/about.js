import Image from 'next/image'
import drConrad from '../public/internetprofilepic.jpg'


function About() {
    return <div id="about">
        

        <div className="container p-4 mt-5">
        <div className="row" >
            <div className="col-sm-12">
                <h2 className="text-center">Tim J. Conrad, M.D.</h2>
                <h3 className="text-center">Board Certified Opthalmologist</h3>
                <div className="text-center">
                <a className="btn btn-primary text-center mb-5" id="aboutButton" href="/aboutPage" role="button">More About Dr. Conrad</a></div>
            </div>
            <div className="col-sm-6 ">
                <p className="text-left">Trained at Duke University, University of North Carolina in Chapel Hill, and the Kentucky Lions Eye Research Center at the University of Louisville, Dr. Conrad is committed to providing a personal comprehensive approach to eye care.</p>
                
            </div>
            <div className="col-sm-6">
            <Image src={drConrad} layout="responsive"/>
            </div>
            </div>
            </div>
        <div  style={{ height: "5vh" }}></div>
    </div>
}

export default About