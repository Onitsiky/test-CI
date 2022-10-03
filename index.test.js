const { expect } = require("chai")

describe("Should return true of false", () => {
    it("Should return true", ()=> {
        expect(addnumber(9,4)).to.be.true;
    })
    it("Should return false", ()=> {
        expect(addnumber(-8,0)).to.be.false;
    })
})