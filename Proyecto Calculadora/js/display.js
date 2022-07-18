class Display{
    constructor(displayValueBefore,displayValueActualy){
        this.displayValueActualy = displayValueActualy;
        this.displayValueBefore = displayValueBefore;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.valueActualy='';
        this.valueBefore = '';

    }

   

   

    delete(){
        this.valueActualy = this.valueActualy.toString().slice(0,-1);
        this.printValue();
    }
    deleteDisplay(){
        this.valueActualy = '';
        this.valueBefore = '';
        this.typeOperation = undefined;
        this.printValue();
    }
    
    compute(type){
        this.typeOperation !== 'same' && this.calculate();
        this.typeOperation = type;
        this.valueBefore = this.valueActualy || this.valueBefore;
        this.valueActualy = '';
        this.printValue();
    }

    addNumber(numero){
        if(numero === '.' && this.valueActualy.includes ('.'))  return
        this.valueActualy = this.valueActualy.toString() + numero.toString();
        this.printValue();
    }

    printValue(){
        this.displayValueActualy.textContent = this.valueActualy;
        this.displayValueBefore.textContent = this.valueBefore;
    }

    calculate(){
        const valueBefore = parseFloat(this.valueBefore);
        const valueActualy = parseFloat(this.valueActualy);
        
        if(isNaN(valueActualy) || isNaN(this.valueBefore)) return 
        this.valueActualy = this.calculator[this.typeOperation](valueBefore, valueActualy);
    }
  
}