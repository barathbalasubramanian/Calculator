
let textarea = document.getElementById('input_box')
let clrbtn = document.getElementById('clear')
let clearall = document.getElementById('el1')


clearall.addEventListener ('click',function(){
    textarea.value=''
})

clrbtn.addEventListener ('click',function(){
    textarea.value = textarea.value.slice(0,-1);
})

function display(num) {
    textarea.value += num;
}

function calculate () {
    try {
        textarea.value = eval(textarea.value)

    }
    catch(err) {
        textarea.value = ' SYNTAX ERROR '
    }
}
