// class Cars {
//     name ;
//     color;
//     type;
//     cost;
//     constructor(name,color,type,cost){

    
//         this.name = name
//         this.color = color
//         this.type =type 
//         this.cost = cost
//     }
//     speak(){
    
//         console.log("Bu method ishlamoqda " + this.name , this.color);
//     }
// }
// const malibu = new Cars("Malibu", "Black", "Sedan" , " 35000");
// console.log(malibu.speak());
// const cobalt = new Cars("Cobalt" , " Choco" , "sedan" , 14000);
// console.log(cobalt.speak());


// class Animals {
//     name;
//     color;
//     age ; 
//     constructor(name,color,age){
//         this.name =name 
//         this.color = color 
//         this.age = age
//     }
// }
// class Dog extends Animals{
//     name;
//     color;
//     age;
//     constructor(name,color,age){
//         super()
//         this.name = name 
//         this.color = color 
//         this.age = age
//     }
// }  
//  // inherietance

// // intance - 1 
// const layka = new Dog("layka" ,  "aquamarine" , 3) ;
// console.log(layka);
// // instance - 2
// const alaba = new Animals("alaba" , " white" , 4);
// console.log(alaba);



class Fastfoods {
    name ;
    since;
    cost;
    type ;
    constructor(name,since,cost,type){
        this.name = name
        this.since = since 
        this.cost = cost 
        this.type = type
    }

}
class Feedup extends Fastfoods {}

const hamburgar = new Feedup("Gamburger" , 1994 , 21000 , "quickly");
console.log(hamburgar);

class Evos extends Fastfoods{
    name; 
    since;
    cost;
    type;
    constructor(name, since,cost, type){
        super()
        this.name = name 
        this.since = since 
        this.cost = cost 
        this.type = type
    }
}

const lavash = new Evos("Lavash" , 2009 , 25000 , " quickly");
console.log(lavash);

class Belissimo extends Evos{
    name; 
    since;
    cost;
    type;
    constructor(name, since,cost, type){
        super()
        this.name = name 
        this.since = since 
        this.cost = cost 
        this.type = type
    }
    speak(){
        console.log("speak methodi ishlamoqda" + this.name);
    }
}

const pizza = new Belissimo("Pizza" , 1879 , 50000 , "nutritious");
console.log(pizza.speak());

class Bravissimo extends Belissimo{}

const plov = new Bravissimo("plov" , 1200 , 100000 , " nutritious")
console.log(plov);
