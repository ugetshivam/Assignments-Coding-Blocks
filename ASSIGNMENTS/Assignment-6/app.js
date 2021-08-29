const btn = document.querySelector('#taskbtn');
const inp = document.querySelector('input[type="text"]');
const lis = document.querySelector('ul');

btn.addEventListener('click', (e)=>{
    // console.log(inp.value)
    if(inp.value === ""){
        alert("Invalid Task");
    }
    else{
        lis.innerHTML += `<li>${inp.value}</li>`;
        lis.lastChild.innerHTML += `<i class="fas fa-pen edit" id="edit${lis.children.length} aria-hidden="true"></i>`;
        lis.lastChild.innerHTML += `<i class="fas fa-trash-alt trash" id="trash${lis.children.length}" onclick="trashIt(this)" aria-hidden="true"></i>`;
        lis.lastChild.innerHTML += `<i class="fa fa-angle-double-up up"  id="up${lis.children.length}" onclick="moveUp(this)" aria-hidden="true"></i>`;
        lis.lastChild.innerHTML += `<i class="fa fa-angle-double-down down" id="down${lis.children.length}" onclick="moveDown(this)" aria-hidden="true"></i>`;
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

f