import jwt from "jsonwebtoken"
const generatejwt = (userid, res) => {
    const token = jwt.sign({userid},"abcdefghijklmnop"
        // ,{
        // expiresIn:"15d" //will expire in 15 days.
        // }
);
    res.cookie("token",token,{
        maxAge: 60*60*1000,
        httpOnly: true,
        samesite:"None"
    })
}
export default generatejwt;