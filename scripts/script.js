let todos = document.getElementById("todos");
let carne = document.getElementById("carne");
let vegano = document.getElementById("vegano");
let singluten = document.getElementById("singluten");
let exclusiva = document.getElementById("exclusiva");

function mostrarImagenes(x)
{
    if(x == "todo")
    {
        todos.style.display = "inline";
        carne.style.display = "none";
        vegano.style.display = "none";
        singluten.style.display = "none";
        exclusiva.style.display = "none";
    }
    if(x == "carne")
    {
        carne.style.display = "inline";
        todos.style.display = "none";
        vegano.style.display = "none";
        singluten.style.display = "none";
        exclusiva.style.display = "none";
    }
    if(x == "vegano")
    {
        carne.style.display = "none";
        todos.style.display = "none";
        vegano.style.display = "inline";
        singluten.style.display = "none";
        exclusiva.style.display = "none";
    }
    if(x == "singluten")
    {
        carne.style.display = "none";
        todos.style.display = "none";
        vegano.style.display = "none";
        singluten.style.display = "inline";
        exclusiva.style.display = "none";
    }
    if(x == "exclusivo")
    {
        carne.style.display = "none";
        todos.style.display = "none";
        vegano.style.display = "none";
        singluten.style.display = "none";
        exclusiva.style.display = "inline";
    }
}