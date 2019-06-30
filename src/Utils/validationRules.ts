import * as lodash from 'lodash';

export function isRequired(value: any): boolean{
    return Boolean(value);
}

export function isEmail(value: string): boolean {
    const regEmail: RegExp = new RegExp('^[0-9a-z-_\\+.]+\\@([0-9a-z-]{2,}\\.)+[a-z]{2,}$', 'i');
    return regEmail.test(value);
}

export function isInteger(value: number): boolean {
    return lodash.isInteger(+value);
}