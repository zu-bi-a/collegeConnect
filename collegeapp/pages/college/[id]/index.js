import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import CollegePageStyle from '@/styles/CollegePage.module.css'
import styled from "styled-components";

const CardImage = styled.img`
  width: 500px;
  height: 50px;
  object-fit: cover;
`;

const CardWrapper = styled.div`
  width: 300px;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin: 20px;
`;

const college = ({ college }) => {

    const addToMyColleges = async () => {
        var colname = college.College;
        console.log(colname);

        const newcol = {
            "collegeName": college.College,
            "courseName": "somecourse",
            "collegeWebsite": college.CollegeWebsite,
            "examDate": "somedate"
        };
        //console.log({newcol});

        const response = await fetch('/api/mycolleges', {
          method: 'POST',
          body: JSON.stringify({ 
            collegeName: college.College,
            courseName: "somecourse",
            collegeWebsite: college.CollegeWebsite,
            examDate: college.Examdate,
            admitCardDate: college.Admitcarddate,
            syllabus: college.Syllabus
           }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log(data)
      }

  return ( 
    <div className={CollegePageStyle.mainbody}>
      <CardImage src="http://localhost:3000/uniimages/1.jpg" /> 
      <div className={CollegePageStyle.maincontainer}> 
        <div className={CollegePageStyle.left}>
          <h1 className={CollegePageStyle.coltitle}>{college.College}</h1>
          <p className={CollegePageStyle.coldesc}>{college.Desc}</p>
          <br />
          <button className={CollegePageStyle.addbtn} onClick={addToMyColleges}>Add to my Colleges</button>
        </div>
        <div className={CollegePageStyle.right}>
          <div>
            <h2>Courses Offered</h2>
            <ul>
              {
                  college.Courses.map((i) => (
                  <li key={i}>{i}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/colleges/${context.params.id}`)

  const college = await res.json()

  return {
    props: {
      college,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/colleges`)

  const colleges = await res.json()

  const ids = colleges.map((college) => college.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default college