import Collapsible from "./Collapsible/collapsible"


function Resources() {
    return (
        <div className="container" id="resources" style={{ marginTop: "5vh" }}>
            <div className='row'>
    <Collapsible label="Glossary of Eye Problems">
    There are a multitude of disorders that can affect the eye, and as your source for comprehensive eye care we have provided an introduction to many common problems associated with eyes.
    </Collapsible>
    
    <Collapsible label="Insurance Options">
    Conrad Eye Centers accepts most medical and vision plans.
    </Collapsible>
   
    <Collapsible label="Notice of Privacy Practice">
    At Conrad Eye Centers we take your privacy seriously.
     </Collapsible>
    </div>
        </div>
    )
}

export default Resources
