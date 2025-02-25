
//document.getElementById('bangladesh-btn').addEventListener('click',
    //function(){
        //document.getElementById('bd').style.display = ('block');
        //document.getElementById('usa').style.display = ('none');
    //})
    document.getElementById("bangladesh-btn").addEventListener("click",function () {
        document.getElementById("bangladesh").style.display="block";
    
        document.getElementById("usa").style.display="none";
    })
    
    // use er click korla banmglesh hide hobe
    document.getElementById("usa-btn").addEventListener("click", function(){
        document.getElementById("usa").style.display="block"
        document.getElementById("bangladesh").style.display="none"
    })
    document.getElementById("bangladesh-btn").addEventListener("click", function(){
        document.getElementById("usa").style.display="none"
        document.getElementById("bangladesh").style.display="block"
    })