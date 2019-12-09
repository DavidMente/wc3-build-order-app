import request from 'supertest';
import app from '../src/server';
import {Mockgoose} from 'mockgoose';
import mongoose from 'mongoose';
import BuildOrder from '../src/models/buildOrder';
import {ActionCode, Race} from '../src/client/src/store/common/types';

describe('BuildOrderTest', () => {

    const mockgoose: Mockgoose = new Mockgoose(mongoose);

    const buildOrderFactory = (doc: object) => new BuildOrder(doc).save();

    beforeAll((done) => {
        mockgoose.prepareStorage().then(() => {
            mongoose.connect(process.env.MONGODB_URI || '',
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }, () => done());
        });
    });

    afterEach(async () => {
        await mongoose.connection.db.dropCollection('buildorders');
    });

    afterAll(async () => {
        await mockgoose.helper.reset();
        await mongoose.disconnect();
        mockgoose.mongodHelper.mongoBin.childProcess.kill('SIGTERM');
    });

    it('fetches the expected build orders', async (done) => {
        await buildOrderFactory({
            name: 'TestBO',
            race: Race.NIGHTELF,
            tasks: [{id: 1, actionCode: ActionCode.PEASANT, description: 'TestDesc'}],
            views: 10,
        });

        request(app)
            .get('/api/build_orders')
            .end((err, res) => {
                expect(res.status).toBe(200);
                expect(res.body.length).toBe(1);
                expect(res.body[0].name).toBe('TestBO');
                expect(res.body[0].race).toBe(Race.NIGHTELF);
                expect(res.body[0].tasks.length).toBe(1);
                expect(res.body[0].views).toBe(10);
                expect(res.body[0].password).toBeUndefined();
                expect(res.body[0].tasks[0].actionCode).toBe(ActionCode.PEASANT);
                expect(res.body[0].tasks[0].description).toBe('TestDesc');
                done();
            });
    });

    it('saves a new build order to db', (done) => {
        request(app)
            .post('/api/build_orders')
            .send({name: 'Fast Expansion', race: Race.ORC})
            .end((err, res) => {
                expect(res.status).toBe(201);
                expect(res.body.name).toBe('Fast Expansion');
                expect(res.body.race).toBe(Race.ORC);
                done();
            });
    });

    it('fetches the correct build order and increases view count by 1', async (done) => {
        const buildOrder = await buildOrderFactory({
            name: 'TestBO',
            race: Race.UNDEAD,
            tasks: [{id: 1, actionCode: ActionCode.PEASANT, description: 'TestDesc'}],
            views: 10,
        });

        request(app)
            .get('/api/build_orders/' + buildOrder._id)
            .end((err, res) => {
                expect(res.status).toBe(200);
                expect(res.body.name).toBe('TestBO');
                expect(res.body.race).toBe(Race.UNDEAD);
                expect(res.body.views).toBe(11);
                expect(res.body.password).toBeUndefined();
                done();
            });
    });

    it('successfully updates a build order', async (done) => {

        const buildOrder = await buildOrderFactory({
            name: 'TestBO',
            race: Race.UNDEAD,
            tasks: [{id: 1, actionCode: ActionCode.PEASANT, description: 'TestDesc'}],
            views: 10,
            password: 'password123',
        });

        request(app)
            .put('/api/build_orders/' + buildOrder._id)
            .set({ auth: 'password123' })
            .send({name: 'Fast Expansion', race: Race.ORC, views: 100, password: 'password321', tasks: []})
            .end((err, res) => {
                expect(res.status).toBe(200);
                expect(res.body.name).toBe('Fast Expansion');
                expect(res.body.race).toBe(Race.ORC);
                expect(res.body.views).toBe(10);
                done();
            });

    });

    it('does not update the build order if the password is wrong', async (done) => {

        const buildOrder = await buildOrderFactory({
            name: 'TestBO',
            race: Race.UNDEAD,
            tasks: [{id: 1, actionCode: ActionCode.PEASANT, description: 'TestDesc'}],
            views: 10,
            password: 'password123',
        });

        request(app)
            .put('/api/build_orders/' + buildOrder._id)
            .set({ auth: 'password321' })
            .send({name: 'Fast Expansion', race: Race.ORC, views: 100, password: 'wrongpassword'})
            .end((err, res) => {
                expect(res.status).toBe(403);
                done();
            });

    });

    it('successfully deletes the correct build order', async (done) => {
        const buildOrder = await buildOrderFactory({
            name: 'TestBO',
            race: Race.UNDEAD,
            tasks: [{id: 1, actionCode: ActionCode.PEASANT, description: 'TestDesc'}],
            views: 10,
            password: 'password123',
        });

        await request(app)
            .delete('/api/build_orders/' + buildOrder._id)
            .set({ auth: 'password123' })
            .then((res) => {
                expect(res.status).toBe(200);
            });

        request(app)
            .get('/api/build_orders/' + buildOrder._id)
            .end((err, res) => {
                expect(res.status).toBe(404);
                done();
            });
    });

    it('does not delete the build order if the password is wrong', async (done) => {
        const buildOrder = await buildOrderFactory({
            name: 'TestBO',
            race: Race.UNDEAD,
            tasks: [{id: 1, actionCode: ActionCode.BARRACKS, description: 'TestDesc'}],
            views: 10,
            password: 'password1234',
        });

        request(app)
            .delete('/api/build_orders/' + buildOrder._id)
            .set({ auth: 'password123' })
            .send({password: 'wrongpassword'})
            .end((err, res) => {
                expect(res.status).toBe(403);
                done();
            });
    });

});
