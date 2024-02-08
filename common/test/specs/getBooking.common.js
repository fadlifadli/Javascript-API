// ini adalah contoh api automation menggunakan common js
const { expect } = require("chai")
const request = require("supertest")

const baseUrl = "https://restful-booker.herokuapp.com/"

// describe the last suite
describe("Get All Booking", ()=>{
    it('Positive - succes get all booking', ()=> {
        const response = request(baseUrl)
        .get("/booking") //endpoint
    
    // Assertion pake chai
    expect(response.status).to.equal(200)
    })
})