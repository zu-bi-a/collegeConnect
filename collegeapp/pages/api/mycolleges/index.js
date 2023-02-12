import { mycolleges } from '@/mycolleges'

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(mycolleges)
    } else if (req.method === 'POST') {
        const mycourse = req.body.course
        const myNewCollege = {
            collegeName: req.body.collegeName,
            courseName: req.body.courseName,
            collegeWebsite: req.body.collegeWebsite,
            examDate: req.body.examDate,
            admitCardDate: req.body.admitCardDate,
            syllabus: req.body.syllabus,
        }
        mycolleges.push(myNewCollege)
        res.status(201).json(myNewCollege)
    }
}

