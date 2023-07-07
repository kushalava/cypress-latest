
/// <reference types="cypress"/>

describe("write and read data into JSON", () => {
    it("should write data into JSON", () => {
      cy.writeFile("log.json", { name: "John", age: 25, city:"dallas" });
    });
    it("should write data to the text file", () => {
      cy.writeFile("log.txt", "Cherchertech");
    });
    it("should read and verify data from JSON file", () => {
      cy.readFile("log.json").its("age").should("eq", 25);
    });
    it("should read and verify data from text file", () => {
      cy.readFile("log.txt").should("eq", "Cherchertech");
    });
  });