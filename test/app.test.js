// let chai = require('chai');
// let chaiHttp = require('chai-http');
// //let { response } = require('express');
// let server = require('../app');

// const { it,describe } = require('mocha');
// const { expect } = require('chai');
// const tester = {
// 	email: 'admin@gmail.com',
// 	password: '123456',
// 	name: 'James'
// };

// chai.should();

// chai.use(chaiHttp);

// describe ('models', () =>{


//     describe("get/models/Post", () => 
//     {
// // get all post
//         it("it should get all the posts", async() =>
//          {
//             const result = await chai.request(server).get("/posts/")
//             console.log(result);
//             expect(result.status).to.be.equal(200)
//             expect(result.body).to.be.a("array")
//         }).timeout(30000);

//         // get comment by id
//         it("it should get comment by id", async() =>
//          {
//             const result = await chai.request(server).get("/comments/:commentId")
//             console.log(result);
//             expect(result.status).to.be.equal(200)
//             expect(result.body).to.be.a("object")
//       }).timeout(30000);



//         // post a message
//         it("it should post a message", async() =>
//         {
//             const post = {
//                 name: 'fred',
//                 email: 'fred@gmail.com',
//                 subject : 'help',
//                 message : 'thank you'
//             };
//            const result = await chai.request(server).post("/messages/").send(post)
//            console.log(result);
//            expect(result.status).to.be.equal(200)
//            expect(result.body).to.be.a("object")
//       }).timeout(30000);


// 	it('should signup a user.', async () => {
// 		const res = await chai.request(server).post('/user').send(tester);
//         // console.log(res.body)
// 		expect(res.status).to.be.equal(201);
// 		expect(res.body).to.be.a('object');
// 	}).timeout(30000);

//                // delete an article
//                it("it should delete an article", async() =>
//                {
//                   const result = await chai.request(server).delete("/posts/:postId")
//                   console.log(result);
//                   expect(result.status).to.be.equal(200)
//               }).timeout(30000);              
//     });
// });
