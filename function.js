function loadImages(){
    for (var x=1; x<152; x++){
        $("#poke").append("<img src='https://pokeapi.co/media/img/"+x+".png' id='"+x+"' class ='grid-img'>");
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
$(document).ready(function () {
    loadImages();
    $("img").click(function (e) { 
        e.preventDefault();
        var pkm = $(this).attr("id");
        console.log(pkm);
        $.get("https://pokeapi.co/api/v2/pokemon/"+pkm+"/", function(res) {
            console.log(res);
            var name = "<h2>"+ capitalizeFirstLetter(res.name)+"</h2>"
            var face = "<img src='https://pokeapi.co/media/img/"+pkm+".png' id='"+pkm+"' class ='box-img'>";
            var types = "<h3>Types</h3><ul id ='types'></ul>"
            var weight ="<h3>Weight</h3><p>"+res.weight+"</p>"
            var height = "<h3>Height</h3><p>"+res.height+"</p>"
            $("#info").append(name+face+types+height+weight);
            for(var i=0; i <res.types.length; i++){
                var tip = "<li>"+ capitalizeFirstLetter(res.types[i].type.name)+"</li>";
                $("#types").append(tip);
            }
        }, "json");
    });
});