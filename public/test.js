function switchArray(element) {
    sign=["Traumatisme crànien"]
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
            if(sign.indexOf("Traumatisme crànien")===-1) {
                sign.push("Traumatisme crànien")
                console.log('c bon')
            }
            else {
                console.log('else')
            }

            break;
        }



    }


}




var sign=["NAZIM","AYMEN","MOKHTAR","ABDELJALIL"]

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
console.log(buildHtml())