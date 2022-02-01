import {Parent} from './module1'

export class Child extends Parent {
    constructor(name,sname){
       super(name);
       this.sname = sname;
    }

    cDemo(){
        console.log("cDemo running");
    }
}