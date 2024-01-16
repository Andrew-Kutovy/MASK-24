import {Request, Response, NextFunction} from "express";
import mongoose from "mongoose";
import {ApiError} from "../errors/api.error";
import {ObjectSchema} from "joi";

class CommonMiddleware {
    public isIdValid(field: string) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const id = req.params[field]

                if (!mongoose.isObjectIdOrHexString(id)) {
                    throw new ApiError("Not valid ID", 400);
                }

                next()
            } catch (e) {
                next(e)
            }
        }

    }
    public isBodyValid(validator: ObjectSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const { error, value } = validator.validate(req.body);

                if (error) {
                    throw new ApiError(error.message, 400);
                }

                req.body = value;
                next();
            } catch (e) {
                next(e);
            }
        };
    }
}

export const commonMiddleware = new CommonMiddleware()