// ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com"
const paramFirstName = "sally"
const paramLastName = "brown"
const bookingId= "78"


// describe the last suite
describe("Get All Booking", ()=>{
    it('Positive - succes get all booking', async ()=> {
        let  response = await request(baseUrl) // baseUrl
        .get("/booking") //endpoint
    
        // Assertion pake chai 
        expect(( await response).status).to.equal(200)
        console.log(await (response.body))
    })

    it('Positive - succes get with param', async ()=> {
        const response = await request(baseUrl) // baseUrl
        .get('/booking'+'?firstname=${paramFirstName}&lastname=${paramLastName}') //endpoint with query params
    
    // Assertion pake chai
    expect(( await response).status).to.equal(200)
    console.log(await (response.body))
    })

    it('Positive - succes get booking id', async ()=> {
        let response = await request(baseUrl) // baseUrl
        .get('/booking/${bookingId}') //endpoint with by id

        console.log('/booking/${bookingId}')
    
    // Assertion pake chai
    expect(( await response).status).to.equal(200)
    console.log(await (response.body))
    })
})

describe("Get Booking Scenario by function", () => {
    it("succes get booking all by function", async () => {
        const response = await getBooking.all();
        console.log((await response).status)

        // Assertion pake chai
        expect(( await response).status).to.equal(200)
        console.log(await (response.body))
    })
})