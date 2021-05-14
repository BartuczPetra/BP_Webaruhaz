$(function(){
    alapKiir();
    kiir();
    $("#OK").click(ment);
    
});

var termekJSON='[{"id":"v1","nev":"Virág","ar":"500 Ft","fajta":"Tulipán","szin":"Rózsaszín"},{"id":"b4","nev":"Bonbon","ar":"1000 Ft","fajta":"Dupla csokis","szin":"Barna"}]';
var termekObjektum=JSON.parse(termekJSON);


function alapKiir(){
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr>");
    var tablazatCim=["ID","Termék neve","Termék ára","Termék fajtája","Termék színe"];
    for (var item in tablazatCim) {
        $("article table tr").append("<th id=\""+item+"\">"+tablazatCim[item]+"</th>");
    }
    
    for (var i = 0; i < termekObjektum.length; i++) {
        $("article table").append("<tr>");
        for (var item in termekObjektum[i]) {
            $("article table tr").eq(i + 1).append('<td class="'+(i + 1)+'">' + termekObjektum[i][item] + "</td>");
        }
    }
}


function kiir(){
    for (var i = 0; i < $("article table tr").length; i++) {
        $("article table tr").eq(i + 1).append('<td class="torolgomb" id="'+(i)+'">' + '<form><input type="button" id="torol" name="torol" value="TÖRÖL"></form>' + "</td>");
        $("article table tr").eq(i + 1).append('<td class="modosit" id="m'+(i)+'">' + '<form><input type="button" id="modosit" name="modosit" value="Módosítás"></form>' +"</td>");
    }
    
    $(".torolgomb").click(torol);
    $(".modosit").click(modositas);
    $("th").click(rendez);
}

function ment(){
    var ujTermek={};
    ujTermek.id=$("#id").val();
    ujTermek.nev=$("#nev").val();
    ujTermek.ar=$("#ar").val();
    ujTermek.fajta=$("#fajta").val();
    ujTermek.szin=$("#szin").val();
    termekObjektum.push(ujTermek);
    
    alapKiir();
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
    var i = $(this).attr("id");
    termekObjektum.splice(i,1);
    alapKiir();
    kiir();    
}
function modositas(){
    console.log(termekObjektum);
    var i = $(this).attr("id");
    var index=i[1];
    $("article").append('<section><form><fieldset><div><label for="iduj">ID:</label><input type="text" id="iduj" name="iduj" value="'+termekObjektum[index].id+'"></div><div><label for="nevuj">Termék neve:</label><input type="text" id="nevuj" name="nevuj" value="'+termekObjektum[index].nev+'"></div><div><label for="aruj">Termék ára:</label><input type="text" id="aruj" name="aruj" value="'+termekObjektum[index].ar+'"></div><div><label for="fajtauj">Termék fajtája:</label><input type="text" id="fajtauj" name="fajtauj" value="'+termekObjektum[index].fajta+'"></div><div><label for="szinuj">Termék színe:</label><input type="text" id="szinuj" name="szinuj" value="'+termekObjektum[index].szin+'"></div></fieldset><br><input type="button" id="MODOK" name="OK" value="OK"></form></section>');
    $("#MODOK").click(csere);
    function csere(){
        termekObjektum[index].id=$("#iduj").val();
        termekObjektum[index].nev=$("#nevuj").val();
        termekObjektum[index].ar=$("#aruj").val();
        termekObjektum[index].fajta=$("#fajtauj").val();
        termekObjektum[index].szin=$("#szinuj").val();
        alapKiir();
        kiir();
    }
}
