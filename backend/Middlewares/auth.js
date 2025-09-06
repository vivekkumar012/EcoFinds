<<<<<<< HEAD
import  jwt  from 'jsonwebtoken';
=======
import jwt  from 'jsonwebtoken';
>>>>>>> b1c4c1c5dca6eace434e92e046f75c43c73f8b8f

const isAuthenticate = async (req, res, next) => {
    try {
        const token = req.body.token;
        if(!token) {
            return res.status(400).json({
                message: "Please signin"
            })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) {
            return res.status(402).json({
                message: "Invalid token"
            })
        }
        req.id = decode.id;
        next();
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticate;