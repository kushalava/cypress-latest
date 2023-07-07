/// <reference types="cypress" />
describe('cy.each stops iteration',()=>{
 it('cy.each stop iteration',()=>{
   const fruits=['mango','banana','oranges','pears','apples'];

   cy.wrap(fruits).each((fruit, k)=>{
    console.log(k,fruit);
    if(k===2){
        return false
     }
   cy.log('fruit',fruit)
   })
 })
})