// const card = {
//     one : 'one',
//     two : 'two',
//     getNum : function() {
//         let _this = this;
//         const getOne = function(){
//             return _this.one
//         }
//         return `${getOne()} , ${this.two}`
//     }
// }
// const card = {
//     name : 'some',
//     surname : 'awesome',
//     getNum : function() {
//         console.log('getNum' , this)
//         const getOne = function() {
//             console.log('getOne' , this);
//             return this.name
//         }
//         return `${getOne.call(this)} - ${this.surname}` // call , apply , bind => context call 
//     }
// }
const card = {
    name : 'some',
    surname : 'awesome',
    getNum : function() {
        const getOne = () =>  this.name;
        return `${getOne.call(this)} - ${this.surname}`  // ()=> look for function declaretion and give him this 
    }
}
console.log(card.getNum());
