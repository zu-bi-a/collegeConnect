import {colleges} from '@/collegesdata'

export default function handler(req, res) {
    res.status(200).json(colleges)
}