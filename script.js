node=document.querySelector("button") ;
nnode=document.querySelector("ul") ;
node.disabled=true;
console.log("button")

document.querySelectorAll("input").forEach(
    (item)=>{
    item.addEventListener("keyup", ()=>{
    if (document.querySelector("#nom").value!="" && document.querySelector("#content").value!=""){
        node.disabled=false;}
       
    })})

    node.addEventListener('click',()=> {
        node.disabled= true;
         newnode = document.createElement("li");
        newnode.innerText = document.querySelector("#nom").value + " :" + document.querySelector("#content").value + " ";
        document.querySelector("#nom").value = "";
        document.querySelector("#content").value = "";
        newnode.className = "list-group-item";
        icon = document.createElement("i");
        icon.className="fa fa-trash"
        newnode.appendChild(icon);
        nnode.appendChild(newnode);
        document.querySelectorAll(".fa").forEach(
            function (item) {
                item.addEventListener("click", () => {
                    item.parentNode.parentNode.removeChild(item.parentNode);
                });
            })})
    