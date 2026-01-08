        
function addvalue(value) {
    var add = document.getElementById("input")
    if (add.value === '0') {
        add.value = value
    } else {
        add.value += value
    }
}

function del() {
    var add = document.getElementById("input")
    if (add.value !== '0') {
        add.value = add.value.slice(0, -1)
    } else {
        add.value = '0'
    }
}

function clearall() {
    var add = document.getElementById("input")
    add.value = '0'
}

function eual() {
    var equal = document.getElementById("input")
    if (!equal.value || equal.value.trim() === '0') {
        equal.value = "Error"
    } else {
        equal.value = eval(equal.value)


    }
}

function sin(){
    var input = document.getElementById("input") 
    input.value = Math.sin(input.value)
}
function cos(){
    var input = document.getElementById("input") 
    input.value = Math.cos(input.value)
}
function tan(){
    var input = document.getElementById("input") 
    input.value = Math.tan(input.value)
}
function log(){
    var input = document.getElementById("input") 
    input.value = Math.log(input.value)
}

function sqrt(){
    var input = document.getElementById("input") 
    input.value = Math.sqrt(input.value)
}

function sqr(){
    var input = document.getElementById("input") 
    input.value = input.value*input.value
}

function cube(){
    var input = document.getElementById("input") 
    input.value = input.value*input.value*input.value
}


