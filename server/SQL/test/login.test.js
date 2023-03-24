const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require("../App");

chai.use(chaiHttp);

describe('Login', () => {
    it('should return login successful', (done) => {
        chai.request(app).get('/api/getUser?id=10').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res).to.be.not.null;
            done();
        })
    })
})