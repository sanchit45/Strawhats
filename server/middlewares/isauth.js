import jwt from "jsonwebtoken"
export const isauth = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const decodedid = jwt.verify(token, "abcdefghijklmnop")
        req.user = await user.findById(decodedid);
        next();
    }
    else{
        return res.json({
            message:"please login first"
        })
    }
}