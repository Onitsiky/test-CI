import { expect } from "chai";
import  addnumber  from "./index.js"

describe("Should return true of false", () => {
    it("Should return true", ()=> {
        expect(addnumber(9,4)).to.be.true;
    })
    it("Should return false", ()=> {
        expect(addnumber(-8,0)).to.be.false;
    })
})