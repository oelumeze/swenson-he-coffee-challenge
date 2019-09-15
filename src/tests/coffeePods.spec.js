import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('CoffeePods', () => {
    
    const COFFEE_POD_URL = `/coffeePods`
    const LARGE_COFFEE_PODS = `COFFEE_POD_LARGE`;
    const SMALL_COFFEE_PODS = `COFFEE_POD_SMALL`;
    const SEVEN_DOZEN_PACK = `SEVEN_DOZEN`;
    const ESPRESSO_VANILLA_FLAVOR = `vanilla`;

    it('should show all large pods', (done) => {
        
        chai.request(app)
            .get(`${COFFEE_POD_URL}/getByProductType/${LARGE_COFFEE_PODS}`)
            .end((err, res) => {
                if(err) {
                    console.log("an error occured", err)
                }
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body.data).to.be.an('array');
                expect(res.body.data).to.have.lengthOf.above(0)
                done();
            })
    })

    it('should show all espresso vanilla pods', (done) => {

        chai.request(app)
            .get(`${COFFEE_POD_URL}/getByCoffeeFlavor/${ESPRESSO_VANILLA_FLAVOR}`)
            .end((err, res) => {
                if(err) {
                    console.log("an error occured", err)
                }
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body.data).to.be.an('array');
                expect(res.body.data).to.have.lengthOf.above(0)
                done();
            })
    })

    it('should show all small pods', (done) => {

        chai.request(app)
            .get(`${COFFEE_POD_URL}/getByProductType/${SMALL_COFFEE_PODS}`)
            .end((err, res) => {
                if(err) {
                    console.log("an error occured", err)
                }
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body.data).to.be.an('array');
                expect(res.body.data).to.have.lengthOf.above(0)
                done();
            })
    })

    it('should show all pods sold in 7 dozen packs', (done) => {

        chai.request(app)
            .get(`${COFFEE_POD_URL}/getByPackSizes/${SEVEN_DOZEN_PACK}`)
            .end((err, res) => {
                if(err) {
                    console.log("an error occured", err)
                }
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.body.data).to.be.an('array');
                expect(res.body.data).to.have.lengthOf.above(0)
                done();
            })
    })
})