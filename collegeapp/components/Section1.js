import section1Styles from '@/styles/Section1.module.css'
import { use, useState } from 'react'
import SearchBar from './SearchBar';
import collegedata from '@/collegedata.json'


const Section1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseBar, setCourseBar] = useState(false)

  return (
    <div className={section1Styles.section1}>
      <h1 className='section1Styles.name' id="jumpsearch">Get all your college applications and admission process hustle free in one place</h1>
      <SearchBar placeholder="Search for a college" data={collegedata} />

        <button className={section1Styles.viewallcolbtn}>View All Colleges</button>

    </div>
  )
}

export default Section1
