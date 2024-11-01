import { DecodeToken, EncodeToken } from "../utility/tokenUtility.js"
import EmailSend from "../utility/emailUtility.js";

export const TokenEncode = async (req,res)=>{
   let result = EncodeToken("mdfawjulazim617@gmail.com",'123');
   res.json({token:result});

}

export const TokenDecode = async (req,res)=>{
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1kZmF3anVsYXppbTYxN0BnbWFpbC5jb20iLCJ1c2VyX2lkIjoiMTIzIiwiaWF0IjoxNzMwNDk5MzEwLCJleHAiOjE3MzMwOTEzMTB9.6Ob0FUTI_zb4NFKpcq54d5ov6ZzcgVhHCwoh-3duqlQ");

   res.json({token:result});

}

export const Email = async (req,res)=>{

    let EmailTo ="md@gmail.com";
    let EmailText ="md@gmail.com";
    let EmailSubject ="md@gmail.com";
    let EmailHTMLBody ="md@gmail.com";

    let result =await EmailSend(EmailTo,EmailText,EmailSubject,EmailHTMLBody)
    res.json({emailStatus:result});
}

export const Profile =async (req,res)=>{
    res.json({status:"ok"});
}

export const CreateCookies = async (req,res)=>{
    let cookieOptions ={
        expires: new Date(Date.now() + 3600*1000),
        httpOnly: true,
        sameSite:true,
    }
    let data ="md@gmail.com";
    let cookieName = "Mern07"

    res.cookie(cookieName,data,cookieOptions);

    res.json({status:"ok"});
}

export const RemoveCookies = async (req,res)=>{
    let cookieOptions ={
        expires: new Date(Date.now() - 3600*1000),
        httpOnly: true,
        sameSite:true,
    }
    let data ="";
    let cookieName = "Mern07"

    res.cookie(cookieName,data,cookieOptions);

    res.json({status:"ok"});
}