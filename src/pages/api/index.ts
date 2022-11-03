import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../utils/sample-data";

export default function handle(req: NextApiRequest, res:NextApiResponse){
  const { method } = req
  if(method == 'GET'){
    return res.json(sampleUserData)
  }
  else if( method == 'POST'){
    const data = req.body;
    sampleUserData.push(data)
    return res.status(201).json(data)
  }
}