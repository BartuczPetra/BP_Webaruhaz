$(function(){
    kiir();
    $("#OK").click(ment);
    $("#torol").click(torol);
    
});

var termekJSON='[{"id":"a1","nev":"Tej","ar":"500 Ft","tipus":"laktózmentes","szin":"lila"},{"id":"c4","nev":"Nadrág","ar":"2000 Ft","tipus":"farmer","szin":"kék"}]';
var termekObjektum=JSON.parse(termekJSON);

function kiir(){
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr>");
    for (var item in termekObjektum[0]) {
        $("article table tr").append("<th id=\""+item+"\">"+item+"</th>");
    }
    
    for (var i = 0; i < termekObjektum.length; i++) {
        $("article table").append("<tr>");
        for (var item in termekObjektum[i]) {
            $("article table tr").eq(i + 1).append("<td>" + termekObjektum[i][item] + "</td>");
                       
        }
        $("article table tr").eq(i + 1).append('<td class="torolgomb" id="'+(i + 1)+'">' + '<form><input type="button" id="torol" name="torol" value="TÖRÖL"></form>' + "</td>");

    }
    $("th").click(rendez);
}

function ment(){
    var ujTermek={};
    ujTermek.id=$("#id").val();
    ujTermek.nev=$("#nev").val();
    ujTermek.ar=$("#ar").val();
    ujTermek.tipus=$("#tipus").val();
    ujTermek.szin=$("#szin").val();
    termekObjektum.push(ujTermek);
    
    kiir();
    
    
}

var irany=false;

function rendez(){
    var id=$(this).attr("id");
    if (irany) {
        termekObjektum.sort(function(a,b){
       return Number(a[id]>b[id])-0.5;
    });
    }else{
        termekObjektum.sort(function(a,b){
       return Number(a[id]<b[id])-0.5;
    });
    }
    irany=!irany;
    kiir();
}

function torol(){
    /*var ti = $(this).attr("id");
    termekObjektum.splice()
                $("article table tr").eq(ti-i);*/

    
}