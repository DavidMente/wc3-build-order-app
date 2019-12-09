import {Request, Response} from 'express';
import BuildOrder from '../models/buildOrder';

class BuildOrderController {

    private buildOrderRequest = (req: Request) => ({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        race: req.body.race,
        tasks: req.body.tasks,
    });

    public index = (req: Request, res: Response) => {
        const filters = {
            name: {$regex: req.query.search || '', $options: 'i'},
            race: {$regex: req.query.race || ''},
        };
        const sortBy = req.query.sortBy === 'id' ? {_id: -1} : {views: -1};
        BuildOrder.find(filters)
            .select('-password')
            .sort(sortBy)
            .then((data) => res.send(data))
            .catch((error) => res.send(error));
    };

    public create = (req: Request, res: Response) => {
        BuildOrder.create(this.buildOrderRequest(req))
            .then((data) => {
                res.status(201).send(data);
            })
            .catch((error) => res.status(422).send(error));
    };

    public show = (req: Request, res: Response) => {
        BuildOrder.findByIdAndUpdate(req.params.buildOrderID, {$inc: {views: 1}}, {new: true})
            .select('-password')
            .then((data) => {
                if (!data) {
                    return res.status(404).send('No result found');
                }
                res.send(data);
            })
            .catch((error) => res.send(error));
    };

    public update = (req: Request, res: Response) => {
        BuildOrder.findByIdAndUpdate(req.params.buildOrderID, this.buildOrderRequest(req), {
            new: true,
            runValidators: true,
        })
            .then((data) => res.send(data))
            .catch((error) => res.status(422).send(error));
    };

    public delete = async (req: Request, res: Response) => {
        BuildOrder.findByIdAndDelete(req.params.buildOrderID)
            .then((data) => res.send(data))
            .catch((error) => res.send(error));
    };

}

export default BuildOrderController;
