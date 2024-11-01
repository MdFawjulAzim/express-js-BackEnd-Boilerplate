import { DecodeToken, EncodeToken } from "../utility/tokenUtility.js"

export const TokenEncode = async (req,res)=>{
   let result = EncodeToken("mdfawjulazim617@gmail.com",'123');
   res.json({token:result});

}

export const TokenDecode = async (req,res)=>{
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kZmF3anVsYXppbTYxN0BnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMTIzIiwiaWF0IjoxNzMwNDk5MzEwLCJleHAiOjE3MzMwOTEzMTB9.6Ob0FUTI_zb4NFKpcq54d5ov6ZzcgVhHCwoh-3duqlQ");
    
   res.json({token:result});

}