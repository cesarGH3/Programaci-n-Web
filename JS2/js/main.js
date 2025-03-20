const btnAlerta = document.getElementById("btn");
const t_a = document.getElementById("a");
const t_b = document.getElementById("b");
const t_c = document.getElementById("c");


btnAlerta.addEventListener("click", ()=>{
    t_c = Number( t_a.value) + Number(t_b.value);
});
