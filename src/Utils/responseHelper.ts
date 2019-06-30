import { Response } from 'express';
import { ErrorMessageType, DataListType, ErrorValidationType, DataItemType } from '@Types/tools/Response';
import { isNotFoundText } from '@Utils/errorsHelper';

export function responseErrorValidation(res:Response, { validations }: ErrorValidationType) {
    res.status(422).json({ 
        status: 422,
        validations
    });
} 

export function responseErrorMessage(res: Response, { code, message }: ErrorMessageType) {
    const status = code || 400;
    res.status(status).json({ 
        status,
        message
    });
} 


export function responseDataItem(res: Response, { code, data }: DataItemType) {
    const status = code || 200;
    res.status(status).json({ 
        status,
        data
    });
} 

export function responseDataList(res: Response, { page, pages, count, total, data }: DataListType) {
    return res.status(200).json({ 
        status: 200,
        data,
        pagination: {
            page,
            pages,
            count,
            total
        }
    });
} 

export function responseNotFound(res: Response ) {
    responseErrorMessage(res, { code: 404, message: isNotFoundText })
} 