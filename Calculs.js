class Calculs {

    constructor(operande1,operande2){
        this.operande1 = operande1 ;
        this.operande2 = operande2 ;
    }
    multiplier(){
        return this.operande1 * this.operande2;
    }
    
    additionner(){
        return this.operande1 + this.operande2;
    }

    diviser(){
        return this.operande1 / this.operande2;
    }

    soustraire(){
        return this.operande1 - this.operande2
    }
}

module.exports = Calculs;