import request from "supertest";
import { baseUrl } from "../../data/config.js";

async function getBookingAll(){
    let  response = await request(baseUrl) // baseUrl
    .get("/booking") //endpoint

    return (await response)
}

async function getBookingParam(paramFirstName,paramLastName){
    let  response = await request(baseUrl) // baseUrl    
    .get('/booking'+'?firstname=${paramFirstName}&lastname=${paramLastName}') //endpoint with query params

    return (await response)
}

async function getBookingId(bookingId){
    let  response = await request(baseUrl) // baseUrl
    .get('/booking/${bookingId}') //endpoint with by id

    return (await response)
}

export const getBooking ={
    all : getBookingAll,
    params : getBookingParam,
    id : getBookingId,

}