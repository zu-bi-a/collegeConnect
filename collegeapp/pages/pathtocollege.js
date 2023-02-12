import React from 'react'
import pageStyles2 from '@/styles/PathToCollege.module.css'

const pathtocollege = () => {
  return (
    <div className={pageStyles2.mainContain}>
        <div style={{backgroundcolor: "lightgray"}}>
        <div id="mainHeading">
            <h1><b><u><center>Path To College</center></u></b></h1>
        </div>

        <div class="row">
            <div className="col-sm-8">
                <img className="d-block w-100" src="http://localhost:3000/5.jpeg"/>
            </div>
            <div id="quote" className="col-sm-4">
                “ We owe a lot to the ancient Indians for teaching us how to count. Without which most modern scientific
                discoveries would have been impossible. ” - <b>Albert Einstein</b>
            </div>
        </div>


        <p className={pageStyles2.para} style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px", paddingBottom: "10px"}}>
            As we know, In today’s day and age, the premise that providing quality higher education is crucial for
            sustainable human development is undeniable. Higher education leads to acquiring analytical and
            problem-solving skills, ultimately helping humans to develop intellectual curiosity and character. It pushes
            the students to identify and set career goals that make them ready for professional setups. Therefore, a
            refined higher education enables a student's economic, physical and social well-being
        </p>

    </div>

    <div style={{backgroundColor: "#FCF5F5"}}>
        <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px"}}>
            <h2 className={pageStyles2.paraheadin}>Indian Higher Education System</h2>
            <p>India has one of the largest higher education systems in the world that stands second in terms of the
                higher education network. The term ‘higher education’ with respect to India denotes the tertiary level
                education imparted after 12 years of schooling (10 years of primary education and 2 years of secondary
                education). India's entire higher education ecosystem comprises around 1000+ universities and 42,000+
                colleges imparting exceptional education. All these institutions fall under the purview of the Ministry
                of
                Education.
            </p>
            <p>
                The institutions in India are furnished with state-of-the-art infrastructure, modern libraries, and
                classrooms
                equipped with state-of-the-art amenities (such as smart class, computers, wifi-connectivity, etc). All
                in
                all,
                these top-grade resources facilitate interactive and 360-degree learning for the students. Due to these
                salient features, 3 Indian institutes namely, the Indian Institutes of Technology (IITs), the Indian
                Institute
                of
                Science (IISc), the National Institutes of Technology (NITs), Indian Institutes of Science Education and
                Research (IISERs) and Indian Institutes of Management (IIMs) have been featured in world top-ranking
                institutions lists. This solidifies the belief that India is emerging as a central education hub for
                both
                international and national students.
            </p>

            <h2 className={pageStyles2.paraheadin}>The Landscape of Indian Higher Education</h2>
            <p>On the basis of management, the universities are classified as:</p>
            <h4 className={pageStyles2.subHead}><b>Central Universities : </b></h4>
            <p>These are set up through an Act in Parliament. The Union Government funds the establishment and
                operation.
            </p>
            <h4 className={pageStyles2.subHead}><b>State Universities : </b></h4>
            <p>These are set up through an Act in the State Legislature. The state universities are primarily funded and
                operated by the State Government.</p>
            <h4 className={pageStyles2.subHead}><b>Private Universities : </b></h4>
            <p>These are set up through an Act in the State Legislatures. It includes specialised institutions and
                multidisciplinary research universities.</p>
            <h4 className={pageStyles2.subHead}><b>Deemed Universities : </b></h4>
            <p>- These are well-performing institutes that are declared to be of equal standing as the universities by
                the
                Central Government on the advice of the Union Grants Commission (UGC).</p>



            <h2 className={pageStyles2.paraheadin}>Courses</h2>
            <p>The courses offered in Indian higher education institutions can be generally classified into two
                categories:
            </p>

            <h3 className={pageStyles2.subHead}><b>STEM Courses -</b></h3>
            <p>STEM is a broad term for Science, Technology, Engineering and Mathematics and
                encompasses all the courses providing education in these disciplines. Instead of teaching the
                four disciplines separately, the purpose of STEM courses involves cohesive learning and it
                focuses on the practical application of the subjects. Effective education in STEM courses is not
                limited to theoretical learning but extends to experimental and research-based learning too. The
                well-equipped laboratories of Indian institutes enable the same and help the students to
                inculcate innovative, problem-solving and competent skills.
            </p>

            <h3 className={pageStyles2.subHead}><b>NON STEM Courses - </b></h3>
            <p style={{marginBottom: "150px"}}>The courses offered in disciplines such as Commerce, Arts, Business Management, Humanities, and
                Social Affairs are termed non-STEM courses. Yet again, Indian institutions are well equipped to
                provide education in these disciplines wherein the students can gain expertise in the subject of their
                choice. Non-STEM majors like humanities open a wide range of career opportunities where the
                skills, knowledge and deeper understanding are made applicable. Similarly, education, accounting,
                marketing, English, journalism, language studies, etc degrees all have plenty of uses for various
                professions. A few examples of career options under non-STEM courses include counsellors,
                education administrators, teachers, clinical psychologists, art or creative director, etc.
            </p>
        </div>
    </div>
    </div>
  )
}

export default pathtocollege