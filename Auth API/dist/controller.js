import { validateBody } from "./schemas.js";
import { modelUserLogin, modelValidateToken } from "./model.js";
import cookieParser from "cookie-parser";
/**
 * Validate user credentials
 *
 * @async
 * @function userLogin
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Response} JSON with a jsonwebtoken-
 */
export const userLogin = async (req, res) => {
    const validation = validateBody(req.body);
    if (!validation.success) {
        res.status(400).json({ message: JSON.parse(validation.error.message) });
        /*
         *  @todo : Proper status and error handling
         */
        return;
    }
    try {
        const data = await modelUserLogin(validation.data);
        res
            .status(200)
            .cookie("auth_token", data.token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 72,
            // secure: true, // Required for SameSite=None (must use HTTPS)
            // sameSite: "none", // Allows cross-site usage
            // path: "/",
        })
            .send(data.publicUserData);
    }
    catch (error) {
        res.status(401).json({ message: error.message });
        /*
         *  @todo : Proper status and error handling
         */
    }
};
/**
 * Removes a cookie
 *
 * @async
 * @function userLogout
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Response} JSON with a success message.
 */
export const userLogout = (_, res) => {
    res.clearCookie("auth_token");
    res.status(200).json({ message: "Logout successful " });
};
/**
 * Validates a jsonwebtoken and returns the information inside it if
 * it's valid.
 *
 * @async
 * @function validateToken
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Response} JSON response with user data.
 */
export const validateToken = (req, res) => {
    try {
        const token = req.cookies.auth_token;
        if (!token) {
            console.log("token not found");
            throw new Error("Token not found");
        }
        const data = modelValidateToken(token);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(401).json({ message: error.message });
        /*
         *  @todo : Proper status and error handling
         */
    }
};
