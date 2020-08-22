const getİnput = () => document.querySelector('.input-value').innerText;
const printİnput = (n) => document.querySelector('.input-value').innerText = n;
const getHistory = () => document.querySelector('.history-value').innerText;
const printHistory = (n) => document.querySelector('.history-value').innerText = n;

const number = document.getElementsByClassName('number');
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        let input = getİnput();
        input = input + this.id;//new num add to next to current value on screan
        printİnput(input)// it prevent to over write each print
    })
}

const operator = document.getElementsByClassName('operator');
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == 'clear'){
            printİnput('');
            printHistory('');
        }
        else if(this.id == 'backspace'){
            let input = getİnput();
            input = input.substr(0,input.length-1);
            printİnput(input)
        }
        else{
            input = getİnput()
            let history = getHistory()
            history = history + input;
            if(this.id == '='){
                    printİnput('')
                    printHistory(eval(history))
            }else{
                history=history+this.id;
                printHistory(history);
                printİnput('')
            }
        }
    })
}