import { EncodeToken } from "../utility/tokenUtility.js"

export const TokenEncode = async (req,res)=>{
   let result = EncodeToken("mdfawjulazim617@gmail.com",'123');
   res.json({token:result});

}

export const TokenDecode = async (req,res)=>{

}