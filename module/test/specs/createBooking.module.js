// ini adalah contoh api automation menggunakan common js
import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com"

describe("Create Booking Scenario", ()=> {
    it("Positive - succes Create Booking", async() => {
        const payload = {
            "firstname": "Sally",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2013-02-23",
                "checkout": "2014-10-23"
            },
            "additionalneeds": "Breakfast"
        }
        // send request
        const response = await request (baseUrl)
            .post("/booking")  // endpoint
            .send(payload)  // request body
            .set("Content-Type", "application/json")     // header
            // console.log(response)
        
        expect(( await response).status).to.equal(418)
        
    })
})