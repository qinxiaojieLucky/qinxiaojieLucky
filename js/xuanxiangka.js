window.onload = function(){
    var listBoxs = document.querySelectorAll(".publish");
    var lists = zx_list.getElementsByTagName("li");
    for(var i=0; i<lists.length; i++){     
        lists[i].onclick = function(){
            alert("hello");
            changeDisplay(this.value,listBoxs);
            return false;
        }
    }
    
    function changeDisplay(value,obj){
        for(var i=0;i<obj.length;i++){
            obj[i].style.display = 'none';
        }
        obj[value].style.display = 'block';
    }
}