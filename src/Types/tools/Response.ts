import { IPagination } from '@Types/tools/Pagination'
import { IValidationErrors } from '@Types/tools/Validation'



export type ErrorMessageType = { code?: number, message: string | {} };
export type ErrorValidationType = { validations: IValidationErrors };
export type DataListType = IPagination;
export type DataItemType = { code?: number, data: any };
