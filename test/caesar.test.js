// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Thinkful", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const actual = caesar("thinkful", 0);
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const actual = caesar("thinkful", 26);
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });

    // Add more test cases based on your requirements
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });

    // Add more test cases based on your requirements
  });
});
