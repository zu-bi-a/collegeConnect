import {colleges} from '@/collegesdata.js'

export default function handler({ query: { id }}, res) 
{
     const filtered = colleges.filter(college => college.id === id)
    
    if (filtered.length > 0) {
         res.status(200).json(filtered[0])
     } else {
         res
             .status(404)
             .json({message: `{id} is not found` })
     }

 }

