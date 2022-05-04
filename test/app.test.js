const mocha =require( 'mocha');
const chai=require( 'chai');
const { expect } =require( 'chai');
const chaiHttp =require( 'chai-http');
// const Sinon = require('sinon');
const path = require('path')
const app =require( '../app');
const Article =require( '../models/Post');
// const cloudinary = require('../src/config/cloudinary');

const { it, describe, before, after } = mocha;

const testingData={
    title:'testing article title',
    description:'testing article content',
}
const testingDataUpdate={
    title:'testing article title update',
    description:'testing article content update',
}

const admin={
    email:'jullls@gmail.com',
    password:'jullls',
    name:'jullls'
}

chai.expect();
chai.use(chaiHttp);

describe('Testing Blog routes', () => {

    before(async () => {

		await Article.deleteMany();
	})

    after(async () => {
		await Article.deleteMany();
	});
    it('should create new blog post.',async()=>{
        const adminSignin=await chai.request(app).post('/user/login').send(admin)
        const token = `Bearer ${adminSignin.body.token}`;
        const res=await chai.request(app).post('/posts/').send(testingData).set('Authorization', token)
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a('object')
    }),
    it('should get all blog articles.',async()=>{
        const res=await chai.request(app).get('/posts/')
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.a('array')
    }),
    it('should get one blog article by id',async()=>{
        const adminSignin=await chai.request(app).post('/user/login').send(admin)
        const token = `Bearer ${adminSignin.body.token}`;
        const res1=await chai.request(app).post('/posts').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/posts/')
        const id=article.body[0]._id
        const res=await chai.request(app).get(`/posts/${id}`)
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.a('object')
    }),
    it('should update blog article',async()=>{
        const adminSignin=await chai.request(app).post('/user/login').send(admin)
        const token = `Bearer ${adminSignin.body.token}`;
        const res1=await chai.request(app).post('/posts').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/posts/')
        const id=article.body[0]._id
        const res=await chai.request(app).patch(`/posts/${id}`).send(testingDataUpdate).set('Authorization', token)
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.a('object')
    }),
    it('should delete blog article',async()=>{
        const adminSignin=await chai.request(app).post('/user/login').send(admin)
        const token = `Bearer ${adminSignin.body.token}`;
        const res1=await chai.request(app).post('/posts').send(testingData).set('Authorization', token)
        const article=await chai.request(app).get('/posts/')
        const id=article.body[0]._id
        const res=await chai.request(app).delete(`/posts/${id}`).set('Authorization', token)
        expect(res.status).to.be.equal(200)
        expect(res.body).to.be.a('object')
    })
   
})