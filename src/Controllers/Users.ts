import { Request, Response } from 'express';
import DB from '@Services/PostgresSQL';
import { responseDataItem, responseErrorMessage ,responseDataList, responseNotFound} from '@Utils/responseHelper';
import { IUser } from '@Types/Users';
import { DEFAULT_ROLE } from '@config/settings';
import { onPagination } from '@Utils/paginationHelper';




export async function getUsers(req: Request, res: Response) {
    try {
        const db = DB.getDB();
        const count = req.query.count;
        const page = req.query.page;

        const data =  await onPagination({ page, count, model: db.Users });
        await responseDataList(res, data);

    } catch(e) {
        await responseErrorMessage(res, { message: e });
    }
}

export async function postUser(req: Request, res: Response) {
    try {
        const db = DB.getDB();
        const body :IUser  = JSON.parse(req.body);

        const data = await db.Users.create({  
            lastName: body.lastName,
            firstName: body.firstName,
            email: body.email,
            phone: body.phone,
            // TODO: temporary solution
            roleId: DEFAULT_ROLE,
         }).then( result => result.get());
        // await db.cre
        await responseDataItem(res, { code: 201, data });
    } catch(e) {
        await responseErrorMessage(res, { message: e });
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const db = DB.getDB();
        const id = req.params.id;

        const data = await db.Users.findOne({ where: { id }});

        if(data){
            await responseDataItem(res, { data });
        } else {
            await responseNotFound(res);
        }

    } catch(e) {
        await responseErrorMessage(res, { message: e });
    }
}

export async function putUser(req: Request, res: Response) {
    try {
        const db = DB.getDB();
        const id = req.params.id;
        const body :IUser  = JSON.parse(req.body);


        await db.Users.update(
            {
                lastName: body.lastName,
                firstName: body.firstName,
                email: body.email,
                phone: body.phone,
                roleId: body.roleId,
            }, 
            {   
                where: { id },
                returning: true,
            }
        ).then(result => result[0] 
            ? responseDataItem(res, { data: result[1][0] }) 
            : responseNotFound(res)
        );

    } catch(e) {
        await responseErrorMessage(res, { message: e });
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const db = DB.getDB();
        const id = req.params.id;

        await db.Users.destroy({ where: { id }}).then( deletedRecord => { 
            console.log('dasd', deletedRecord);
            deletedRecord ? responseDataItem(res, { data: null }) : responseNotFound(res);
        });

    } catch(e) {
        await responseErrorMessage(res, { message: e });
    }
}


