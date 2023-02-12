import pageStyles1 from '@/styles/CollegeDescriptionCSS.module.css'


const applytocollege = () => {

  return (
    <div className={pageStyles1.maindiv}>
        <div id="mainHeading">
            <h1><b><u><center>Apply To College</center></u></b></h1>
        </div>
        <div id="carouselExampleIndicators" className="carousel-slide">
            <img className="d-block w-100" src="http://localhost:3000/7.jpeg" height="400px" width="200px"/>
        </div>


        <div id="content"  style={{backgroundColor: "#FCF5F5"}}>
            <h2 id="headin">Step-by-Step Process for the college application</h2>
            <br/>
            <h3 className={pageStyles1.subHeadin}>1. ACCUMULATE ALL YOUR APPLICATIONS</h3>
            <p className={pageStyles1.content}>It is the first and foremost step is to gather all your necessary documents before
                applying to Colleges, Like 10th and 12th Marksheets, Academic Certificates and
                medals, Entrance Test Scores, Etc.
            </p>
            <h3 className={pageStyles1.subHeadin}>2. CREATE AN ACCOUNT ON COLLEGE CONNECT</h3>
            <p className={pageStyles1.content}>Create an Account easily on College Connect by Clicking on “Create an Account “
                and filling in the required fields and information and all the Documents mentioned
                in point 1, and the courses you are interested in.
                The Account will keep up a database of which colleges you applied to
            </p>
            <h3 className={pageStyles1.subHeadin}>3. ADD COLLEGES -</h3>
            <p className={pageStyles1.content}>Now start adding colleges based on the Requirements and cut-offs mentioned
                by them, that match your Profile and the Desired Course.
                The College Search tab is where you will search for and add the colleges you
                want to apply to. If you have a school in mind you can search by name.
                Once you've added colleges, you can see them on your Dashboard.
            </p>
            <h3 className={pageStyles1.subHeadin}>4. SUBMITTING THE APPLICATION -</h3>
            <p className={pageStyles1.content} style={{marginBottom:"50px"}}>Submission is simple 3 part process -<br/>
                -- Reviewing your Application and the selected colleges matching your profile<br/>
                -- pay your Application Fees.<br/>
                -- Submitting your Application<br/>
            </p>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </div>
  )
}

export default applytocollege

