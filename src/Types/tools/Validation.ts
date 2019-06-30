export interface IValidationMap {
    [ field: string ]:{
        methods: {
            [ method: string ]: (any) => any
        },
        messages: {
            [ message: string ]: string
        }
    }
}

export interface IValidationMapFull {
    [IValidationType: string]: IValidationMap
}

export interface IValidationErrors {
    [ field: string ]: string
}

export enum IValidationType {
    'params',
    'query',
    'body'
}