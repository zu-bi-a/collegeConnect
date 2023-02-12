import styled from "styled-components";
import Link from "next/link";

const CardWrapper = styled.div`
  width: 300px;
  height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 10px;
`;

const CardSubText = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 10px;
`;

function StyledCard({ college }) {
  return (
    <>
      <CardWrapper>
          <CardImage src="http://localhost:3000/uniimages/1.jpg" />
          <CardBody>
            <CardTitle>{college.collegeName}</CardTitle>
            <CardText><a href={college.collegeWebsite}>{college.collegeWebsite}</a></CardText>
            <CardText>Exam Date: {college.examDate}</CardText>
            <CardSubText>Admit Card Date: {college.admitCardDate}</CardSubText>
            <CardSubText>Syllabus: {college.syllabus}</CardSubText>
          </CardBody>
      </CardWrapper>
    </>
      
  );
}

export default StyledCard;
