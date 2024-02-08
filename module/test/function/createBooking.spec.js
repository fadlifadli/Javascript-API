import  Request  from "supertest";
import { baseUrl } from "../../data/config.js";

export async function createBooking(){
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
    
    return (await response)
}