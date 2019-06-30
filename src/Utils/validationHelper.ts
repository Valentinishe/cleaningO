import { isEmpty } from 'lodash';
import { Request, Response } from 'express';

// types
import { IValidationMap, IValidationMapFull } from '@Types/tools/Validation';

// utils
import { responseErrorValidation } from '@Utils/responseHelper';
import { isRequiredText, isNotUseField } from '@Utils/errorsHelper';



type _onCheckDataType = {
    res: Response, 
    body: { [k:string]: string | number | boolean },
    validationMap: IValidationMap   
}


// SCENATIO 1 IF BODY EMPTY
const _onCheckEmptyRequest = ({ res, body, validationMap }: _onCheckDataType) => {
    let errors = {};
    const fieldsValidation = Object.keys(validationMap || {});
    if(isEmpty(body)) {
        fieldsValidation.forEach(field => errors[field] = isRequiredText);
    }
    if(!isEmpty(errors)){
        return responseErrorValidation(res, { validations: errors });
    }
}




const _onValidationBody = ({ res, body, validationMap }: _onCheckDataType) => {
 
    if(!validationMap || !body) return;

    let errors = {}
    const fieldsValidation = Object.keys(validationMap || {});

    fieldsValidation.forEach(field => {
        const value = body[field] || '';
        
        Object.keys(validationMap[field].methods).forEach(method => {
            const onRule = validationMap[field].methods[method];
            const errorText = validationMap[field].messages[method];
           
            if (!onRule(value)) {
              errors[field] = errorText;
            }
        });
    });

    if(!isEmpty(errors)){
        res.json(responseErrorValidation(res, { validations: errors }));
    }

}



// SCENATIO 3 IF BODY CONTAINS NOT USE FIELD
const _onCheckUnecessaryFieldsType = ({ res, body, validationMap }: _onCheckDataType) => {
    let errors = {};
    const fieldsValidation = Object.keys(validationMap || {});
    if(!isEmpty(body)) {
        Object.keys(body).forEach(item => !fieldsValidation.includes(item) ? errors[item] = isNotUseField.replace('{field}', item) : null)
    }
    if(!isEmpty(errors)){
        return res.json(responseErrorValidation(res, { validations: errors }));
    }
}




export const onValidation =  (validationMap: IValidationMapFull) => async (req: Request, res: Response, next): Promise<any> => {

    const params = req.params;

    // SCENATIO 1 IF BODY EMPTY
    _onCheckEmptyRequest({ body: params, res, validationMap: validationMap.params });

    // SCENATIO 2 VALIDATION
    _onValidationBody({ res, body: params, validationMap: validationMap.params });

    // SCENATIO 3 IF BODY CONTAINS NOT USE FIELD
    _onCheckUnecessaryFieldsType({ res, body: params, validationMap: validationMap.params });


    if(req.method === 'GET'){
        const query = req.query;

         // SCENATIO 1 IF BODY EMPTY
        _onCheckEmptyRequest({ body: query, res, validationMap: validationMap.query });

        // SCENATIO 2 VALIDATION
        _onValidationBody({ res, body: req.query, validationMap: validationMap.query });

        // SCENATIO 3 IF BODY CONTAINS NOT USE FIELD
        _onCheckUnecessaryFieldsType({ res, body: req.query, validationMap: validationMap.query });

    } else {
        const body = isEmpty(req.body) ? false: JSON.parse(req.body);

        // SCENATIO 1 IF BODY EMPTY
        _onCheckEmptyRequest({ body, res, validationMap: validationMap.body });

        // SCENATIO 2 VALIDATION
        _onValidationBody({ res, body, validationMap: validationMap.body });

        // SCENATIO 3 IF BODY CONTAINS NOT USE FIELD
        _onCheckUnecessaryFieldsType({ res, body, validationMap: validationMap.body });
    }

    next();
}