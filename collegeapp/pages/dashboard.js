import StyledCard from '@/components/StyledCard';
import cardStyle from '@/styles/Cards.module.css'

const dashboard = ({ mycolleges }) => {
  console.log(mycolleges)
  return (
    <div className={cardStyle.cardscontainer}>
        
        {mycolleges.map((mycollege) => (
        <StyledCard college={mycollege} />
        ))}

    </div>
  )
}

export default dashboard;


export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/mycolleges`)
  const mycolleges = await res.json()

  return {
    props: {
        mycolleges
    }
  }
}