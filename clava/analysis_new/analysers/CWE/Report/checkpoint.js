class checkpoint{
    
    constructor(element,name,check,line,desc){
        this.element=element
        this.name=name
        this.check=check
        this.line=line
        this.desc=desc
    }


    setCheck(NewCheck){
        this.check=NewCheck
    }

    setDesc(NewDesc){
        this.desc=NewDesc
    }

    getDesc(){
        return this.desc
    }

    getCheck(){
        return this.check
    }

    getName(){
        return this.name
    }
     getLine(){
        return this.line
    }

     getElement(){
        return this.element
    }
}