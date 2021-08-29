const btn = document.querySelector('#taskbtn');
const inp = document.querySelector('input[type="text"]');
const lis = document.querySelector('ul');

btn.addEventListener('click', (e)=>{
    // console.log(inp.value)
    if(inp.value === ""){
        console.log("Empty String");
    }
    else{
        lis.innerHTML += `<li>${inp.value}</li>`;
        lis.lastChild.innerHTML += ` <i class="fas fa-pen edit" onclick="editIt(this)" aria-hidden="true"></i>`;
        lis.lastChild.innerHTML += ` <i class="fas fa-trash-alt trash" onclick="trashIt(this)" aria-hidden="true"></i>`;
        lis.lastChild.innerHTML += ` <i class="fa fa-angle-double-up up" onclick="moveUp(this)" aria-hidden="true"></i>`;
        lis.lastChild.innerHTML += ` <i class="fa fa-angle-double-down down" onclick="moveDown(this)" aria-hidden="true"></i>`;
        inp.value = "";
    }
})

function moveUp(node){
    try{
        var x = node.parentElement.innerHTML;
        var y = node.parentElement.previousSibling.innerHTML;
        node.parentElement.previousSibling.innerHTML = x;
        node.parentElement.innerHTML = y;
    }
    catch(msg){
        console.log("cant move up");
    }
}

function moveDown(node){
    try{
    var x = node.parentElement.innerHTML;
    var y = node.parentElement.nextSibling.innerHTML;
    node.parentElement.nextSibling.innerHTML = x;
    node.parentElement.innerHTML = y;
    }
    catch(msg){
        console.log("Cant Move down");
    }
}
function trashIt(node){
    node.parentElement.remove();
}

function editIt(node){
    // console.log(node);
    // console.log(node.parentElement.innerText);
    var val = prompt("Change text");
    // console.log(val);
    if(val != "" && val != null){
    var x = `${val} <i class="fas fa-pen edit" onclick="editIt(this)" aria-hidden="true"></i> <i class="fas fa-trash-alt trash" onclick="trashIt(this)" aria-hidden="true"></i> <i class="fa fa-angle-double-up up" onclick="moveUp(this)" aria-hidden="true"></i> <i class="fa fa-angle-double-down down" onclick="moveDown(this)" aria-hidden="true"></i>`;
    node.parentElement.innerHTML = x; 
    }
    // node.parentElement.innerHTML = ;
}
