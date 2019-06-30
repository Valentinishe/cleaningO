import * as sequelize  from 'sequelize';
import { isInteger } from 'lodash';
import { COUNT_PAGINATION, PAGE_PAGINATION } from '@config/paginations';
import { IPagination } from '@Types/tools/Pagination';
import { IDataBase } from '@Types/DB';

type model<T extends keyof IDataBase> = {
    model: IDataBase[T]
}

type IOnPagination = {
    count: IPagination['count'],
    page: IPagination['page'],
    model: sequelize.Model<any, any>,
    modelParams?: {}
};


export async function onPagination({ count, page, model, modelParams }: IOnPagination): Promise<IPagination> {
    const c = isInteger(+count) ? +count : COUNT_PAGINATION;
    const p = isInteger(+page) ? +page : PAGE_PAGINATION;

    const offset = p * c;
    const limit = c;
    const data = await model.findAndCountAll({ ...modelParams, offset, limit });
    
    return {
      page: p,
      pages: Math.ceil(+data.count / c),
      count: c,
      total: data.count,
      data: data.rows
    }
}