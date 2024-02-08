// ini adalah contoh api automation menggunakan common js
import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js"

const baseUrl = "https://restful-booker.herokuapp.com"

describe("Get Token Scenario", ()=> {
    let token;
    let bookingId;
    it("Positive - Succes Get Token ", async() => {
        const payload = {
            "username" : "admin",
            "password" : "password123"
        }
        // send request
        const response = await request (baseUrl)
            .post("/auth")  // endpoint
            .send(payload)  // request body
            .set("Content-Type", "application/json")     // header
        // console.log(response)
        
        expect(( await response).status).to.equal(200)
        token = ((await response).body)
        // console.log((await token))        
    })

    it("Positive - Succes Implement Token", async() => {
        // Put method 
        const response = await request(baseUrl)
            .put("/booking/"+bookingId)
            // .send(payload)
            .set("Cookie",token)
    })

    it ("Import token", async () => {
        const token = await createToken()
        console.log(await token)

    })
    // It Get token
    // It Create 
    // It Get
    // It Delete 
    // Flow CRUD di API Automation
})