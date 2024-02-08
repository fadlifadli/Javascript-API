import  Request  from "supertest";
import { baseUrl } from "../../data/config.js";

export async function updateBooking(bookingId,token){
    const response = await request (baseUrl)
    put("/booking/"+bookingId)
    .set("Cookie",token)

    return response
}