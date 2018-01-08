/*this function is added to Array prototype to remove element of specific index ex: myArray.remove(index)   or a range of element from to*/

var script = document.createElement('script');
script.src = '../js/jquery-3.2.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

var myVar;
var list=[];
var sign=[];
function myFunction() {
    document.getElementById("hypos").style.display="none";

    document.getElementById("loader").style.display="block";
    myVar = setTimeout(showPage, 1200);

}


function showingSignes() {
    document.getElementById("sign14").style.visibility="hidden";
    // console.log(document.getElementById("sign14"))

}

function showPage() {
    document.getElementById("loader").style.display = "none";
    signes();



    // document.getElementById("myDiv").innerHTML=buildHtml()
    // document.getElementById("myDiv").style.display = "block";

}


function handleChange(checkbox) {
    if(checkbox.checked == true){
        list.push(checkbox.id)
        console.log(list)
        console.log(checkbox);
        $('#checkbox14').prop('checked',false)
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

function switchArray(element) {

    switch (element){
        case "checkbox1" :
        case "checkbox2" :
        case "checkbox3" :
        case "checkbox4" :
        {

            if(sign.indexOf("Entorse")===-1){

                sign.push("Fracture non déplacée",
                    "Fracture déplacée","Entorse",
                    "Luxation")

            }


            break;
        }
        case "checkbox5":
        case "checkbox6":
        case "checkbox7":
        case "checkbox8":
        {

            if(sign.indexOf("Fracture vertébrale")===-1) {
                sign.push("Fracture vertébrale")
            }
            break;
        }
        case "checkbox9":
        case "checkbox10":
        case "checkbox11":
        case "checkbox12":
        case "checkbox13":
        {
            if(sign.indexOf("Traumatisme cranien")===-1) {
                sign.push("Traumatisme cranien")
            }
            break;
        }
    }
}


function signes() {

    list.forEach(function (e) {
        switchArray(e)
    })
    console.log(sign)
    localStorage.setItem("SIGN",sign);
    localStorage.setItem("list",list);
    location.href="signes.html";

}


function buildHtml() {
    var counter=15;
    var content="";

    var div='<div class="funkyradio-warning"> <input type="checkbox" name="checkbox" id="';
    var div2=   'onchange="handleChange(this)"/> <label for="' ;

    var tag=""

    sign.forEach(function (e) {

        var div3 =   '>'+e+'</label> </div>';

        var id="checkbox"+counter+"\" "
        tag+=div+id+div2+id+div3
        counter++;

    })
    return tag
}


