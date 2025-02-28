import type { Request, Response } from "express";
import { validateBody } from "./schemas.js";
import { modelUserLogin, modelValidateToken } from "./model.js";

/*
 *  @todo : Comment function
 */
export const userLogin = async (req: Request, res: Response): Promise<void> => {
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

    res.json(JSON.stringify(data.token));
  } catch (error: any) {
    res.status(401).json({ message: error.message });
    /*
     *  @todo : Proper status and error handling
     */
  }
};

/*
 *  @todo : Comment function
 */
export const validateToken = (req: Request, res: Response): void => {
  try {
    // ! This is NOT verified with Zod
    // TODO : Implement Zod verification

    const data = modelValidateToken(req.body);
    res.json(data);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
    /*
     *  @todo : Proper status and error handling
     */
  }
};
