/*this function is added to Array prototype to remove element of specific index ex: myArray.remove(index)   or a range of element from to*/
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

var myVar;
var list=[];
function myFunction() {
    document.getElementById("hypos").innerHTML="<div></div>";
    document.getElementById("loader").style.display="block";
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";


}


function handleChange(checkbox) {
    if(checkbox.checked == true){
        list.push(checkbox.id)
        console.log(list)
    }
    else{
        var index= list.indexOf(checkbox.id);
        list.remove(index);
        console.log(list);

    }
}

function clearList() {
    list.forEach(function (e) {
        var checkbox=document.getElementById(e)
        checkbox.checked=false;


    })
    list=[];

}


function signes() {
    signe_1_4=["checkbox1","checkbox2","checkbox3","checkbox4"]

    var sign=[]
    list.forEach(function (e) {


    })





}