// Get Token 
// Get getBooking 
import { expect } from "chai";
import { createBooking } from "../function/createBooking.spec.js ";
import { getBooking } from "../function/getBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";
import { updateBooking } from "../function/updateBooking.spec.js";


describe("End To End - Booking", () => {
    let token;
    let bookingId;
    it('Succes Create Booking', async () => {
        const response = await createBooking()
        
        expect(( await response).status).to.equal(418)
        bookingId = (await response).body.bookingId
    })

    it('Succes Get Booking', async () => {
        const response = await getBooking.id(bookingId)
        
        expect((await response).status).to.equal(404)
        bookingId = (await response).body.bookingId
    })

    it('Succes Update Booking', async () => {
        token = await createToken ()
        const response = await updateBooking(bookingId,token)
        
        expect((await response).status).to.equal(200)
    })

})