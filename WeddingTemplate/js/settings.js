





const color = [
{name:"pink",code:"#fb839e",url:"css/skin/pink.css"},
{name:"light blue", code:"#3e99f4",url:"css/skin/light-blue.css"},
{name:"light green", code:"#0dcebd",url:"css/skin/light-green.css"},
{name:"red",code:"#cc3a3b",url:"css/skin/red.css"},
{name:"yellow",code:"#ff9801",url:"css/skin/yellow.css"}
 ]

$(document).ready(function(){
    setColor();
    function setColor(){
        for (let i=0; i < color.length; i++ ){
            // console.log(color[i].name)
            const span = document.createElement("span")
            span.style.backgroundColor=color[i].code;
            $(".colors").append(span);
        }
    }

    // Change of element color
    $(".colors span").click(function(){
        const index =  $(this).index();
        // console.log(index)
        console.log("color:", color[index])
        $(".alternate-style").attr("href", color[index].url)
    });

    // theme light & dark mode 
    $(".theme-mode").change(function(){
        console.log($(this).val());
        if($(this).val() === "light"){
            $("body").removeClass("dark");
        }else{
            $("body").addClass("dark");
        }
    });
    // toggle setting box
    $(".s-toggle-btn").click(function()
    {
        $(".setting").toggleClass("open");
    });
});

