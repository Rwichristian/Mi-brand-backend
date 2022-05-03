const mocha =require( 'mocha');
const chai=require( 'chai');
const { expect } =require( 'chai');
const chaiHttp =require( 'chai-http');
const app =require( '../app');
const User =require( '../models/usermodel');

const { it, describe, beforeEach, after } = mocha;

const tester = {
	email: 'jullls@gmail.com',
	password: 'jullls',
	name: 'Jullls'
};

chai.expect();
chai.use(chaiHttp);

describe('Testing Auth routes', () => {
	beforeEach(async () => {
        // await User.create({})
		await User.deleteMany({
			where: { email: { $not: ['admin@gmail.com'] } },
		});
	});
	after(async () => {
		// await User.deleteMany({
		// 	where: { email: { $not: ['admin@gmail.com'] } },
		// });
	});
	it('should register a user.', async () => {
		const res = await chai.request(app).post('/user').send(tester);
		expect(res.status).to.be.equal(201);
		expect(res.body).to.be.a('object');
	});
	it('should login user.', async () => {
        const user = await chai.request(app).post('/user').send(tester);
		const res = await chai.request(app).post('/user/login').send({email:tester.email,name:tester.name,password:tester.password});
		expect(res.status).to.be.equal(200);
		expect(res.body).to.be.a('object');
	});
});