$(function(){
    kiir();
    
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
}