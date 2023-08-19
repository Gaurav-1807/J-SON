
let count =  sessionStorage.getItem("count") || 0;
document.getElementById("count").innerHTML = count;
document.getElementById("btn1").addEventListener("click",  () => {


        count++ ;
        document.getElementById("count").innerHTML = count 
        console.log(count);
        sessionStorage.setItem("count", count);

});