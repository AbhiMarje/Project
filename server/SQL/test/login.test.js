const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require("../App");

chai.use(chaiHttp);

describe('Get User', () => {
    it('should return user data', (done) => {
        chai.request(app).get('/api/getUser?id=10').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.not.null;
            done();
        })
    })
})

describe("login", () => {
    it('should login user', (done) => {
        chai.request(app).get('/api/loginUser?email=abcd@g&pass=abc@123').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.not.null;
            done();
        })
    })
})