var list=document.getElementsByTagName("li")
for(var i=0;i<list.length;i++){
    var span=document.createElement("span");
    span.className="close";
    var close=document.createTextNode("\u00D7");
    span.appendChild(close);
    list[i].appendChild(span);
}

var close=document.getElementsByClassName("close")
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var d=this.parentElement;
        d.style.display="none";
    }
}

function mylist(){
    var li=document.createElement("li");
    var mytxt=document.getElementById("mytext").value;
    var txt=document.createTextNode(mytxt);
    li.appendChild(txt);
    if(mytxt==""){
        alert("Field is empty")
    }else{
        document.getElementById("myul").appendChild(li);
    }
    
    var list=document.getElementsByTagName("li")
    for(var i=0;i<list.length;i++){
    var span=document.createElement("span");
    span.className="close";
    var close=document.createTextNode("\u00D7");
    span.appendChild(close);
    list[i].appendChild(span);
    }
    
    var close=document.getElementsByClassName("close")
    for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var d=this.parentElement;
        d.style.display="none";
    }
  }

}