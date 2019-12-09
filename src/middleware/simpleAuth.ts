import BuildOrder from '../models/buildOrder';
import {NextFunction, Request, Response} from 'express';

class SimpleAuth {

    public authenticateWithPassword = (req: Request, res: Response, next: NextFunction) => {
        BuildOrder.findById(req.params.buildOrderID).then((data) => {
            if (data === null || req.get('auth') !== data.get('password')) {
                res.status(403).send({errors: {password: {message: 'You have entered the wrong password!'}}});
            } else {
                next();
            }
        });
    };

}

export default SimpleAuth;
