var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//tuples
var arr = ['ap', 30, true];
arr[0] = true;
arr[1] = 'leeee';
var tuple = ['ryu', 25, true];
tuple[0] = 'heeelo';
tuple[1] = 30;
//enums
var Resources;
(function (Resources) {
    Resources[Resources["Person"] = 0] = "Person";
    Resources[Resources["Woman"] = 1] = "Woman";
    Resources[Resources["Man"] = 2] = "Man";
    Resources[Resources["Camera"] = 3] = "Camera";
    Resources[Resources["TV"] = 4] = "TV";
})(Resources || (Resources = {}));
//generics <T>
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'AP', age: 30 });
console.log(docOne);
var docThree = {
    uid: 1,
    resourceName: Resources.Person,
    data: { name: 'ap' }
};
var docFour = {
    uid: 1,
    resourceName: Resources.Woman /*'person'*/,
    data: ['lee', 'sapa']
};
console.log(docThree, docFour);
var listTemplate = /** @class */ (function () {
    function listTemplate(container) {
        this.container = container;
    }
    listTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start')
            this.container.prepend(li);
        else
            this.container.append(li);
    };
    return listTemplate;
}());
var Payment = /** @class */ (function () {
    function Payment(recipient, //can use but can't change from both outside and inside
    details, //can't used from outside
    amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
var Invoice = /** @class */ (function () {
    function Invoice(client, //can use but can't change from both outside and inside
    details, //can't used from outside
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
// interface Person{
//     name:string,
//     age:number,
//     speak(a:string):void;
//     spend(a:number):number;
// }   
// const me: Person={
//     name:'shaun',
//     age:30,
//     speak(text:string):void {
//         console.log(text);
//     },
//     spend(amount:number):number {
//         console.log('I spent',amount);
//         return amount;
//     }
// };
// console.log(me);
// const greetPerson= (p:Person) =>{
//     console.log('Hello',p.name);
// }
// greetPerson(me);
// const invOne=new invoice('Aung','Works on AP Website',300);
// const invTwo=new invoice('Paing','Works on AP Website',400);
// console.log(invOne);
// let invoices: invoice[]=[]; //only allow invoice obj arrays, can used with string[] or number[]
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invOne.client='mello'; //can change values without access modifiers
// invTwo.amount=500;
// invoices.forEach(inv =>{
//     console.log(inv.client,inv.amount,inv.format());
// });
var form = document.querySelector('.new-item-form'); //default null
//console.log(form.children);
var type = document.querySelector('#type'); //can use with ('#type')! for element
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul'); //or use 'as HTMLUListElement'
var list = new listTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice')
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
// const anchor=document.querySelector('a');
//     if(anchor){
//         console.log(anchor.href);
//     }
// let greet: (a:string,b:string)=>void;
// greet = (name:string,greeting:string)=>{
//     console.log(`${name} says ${greeting}`)
// }
// let calc: (a:number,b:number,c:string)=>number;//return type
// calc=(numOne: number, numTwo:number, action:string)=>{
//     if(action==='add'){
//         return numOne+numTwo;
//     }
//     else{
//         return numOne-numTwo;
//     }
// }
// let logDetails: (obj:{name:string,age:number})=>void;
// logDetails= (ninja:{name:string,age:number})=>{
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// type StringOrNum= string|number; //alias type declaration
// type ObjWithName= {name:string, uid:string|number};
// const LogDetails= (uid:StringOrNum, item:string)=>{
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet=(user:ObjWithName)=>{
//     console.log(`${user.name} says hello`);
// }
// let greet: Function;
// console.log('leebel');
// greet =()=>{
//     console.log('hello, leelar');
// }
// const add=(a: number,b: number,c?: number|string) =>{
// //const add=(a: number,b: number,c: number|string=10):void =>{
//     console.log(a+b);
//     console.log(c);
// }
// add(5,10,20);
// const minus=(a:number, b:number)=>{
//     return a-b;
// }
// let result: number;
// result = minus(10,7);
//any type variable, will compromise typescript's type stricting rules
// let age:any=25;
// age=true;
// console.log(age);
// age='hello';
// console.log(age);
// let mixed: any[]=[];
// mixed.push(5);
// mixed.push('hello');
// mixed.push(false);
// console.log(mixed);
// //object type, can't use '=' beside ninja
// let ninja: {name:any,age:any};
// ninja={name:'yoshi',age:35};
// console.log(ninja);
// ninja={name:25,age:'wello'};
// console.log(ninja);
// let character:string;// can define types without value for future use
// let age:number;
// let LoggedIn:boolean;
// let ninjas: string[]=[];    //to push or something u can begin with empty array assigned
// //union array types
// let mixed : (string|number|boolean)[]=[];
// mixed.push('agag'); // can't push when assigned value to array without empty array assigned
// mixed.push(20);
// mixed.push(false);
// console.log(mixed);
// let uid: string|number; //mixed type variable
// //object types declarations
// let ninjaOne:object;
// ninjaOne={name:'eelo',age:30};
// let ninjaTwo : {
//     name: string,
//     age: number,
// };
// ninjaTwo={name:'weelo',age:25};
// let names=['luigi','mario','yoshi']; //array with one type can't insert another types
// names.push('toad');
// let numbers=[10,20,30];
// numbers.push(25);
// let mixed =['ryu',8,'chun-li',true];
// let ninja={
//     name:'wiwi',
//     age:30,
//     belt:'black'
// }
// ninja.age=40;
// let character='mario';
// let age=30;
// let Blackbelt=false;
// const circ=(diameter:number)=>{
//     return diameter*Math.PI;
// };
// console.log(circ(4));
// const character='luigi';
// console.log(character);
// const inputs= document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input=>{
//     console.log(input);
// });
