const chaveapi="db3251810a5084120a0ed34a3c41bcc9";

const botaodebusca=document.querySelector(".btn-busca")

botaodebusca.addEventListener("click", async() => {
    const cidade=document.getElementById("input-busca").value;

    if(!cidade) return;

    const dados =await buscardadosclima(cidade);
    
    if (dados)mostradadostela(dados,cidade);
 

});

 async function buscardadosclima(cidade){
    const apiurl=`http://api.weatherstack.com/current?access_key=${chaveapi}&query=${cidade}&units=m`;

    const resposta = await fetch(apiurl);

    const dados= await resposta.json();
    console.log(dados);
    return dados;


};

function mostradadostela(dados,cidade) {
    const temperatura=dados.current.temperature ;
    const condicao=dados.current.weather_descriptions;
    const humidade=dados.current.humidity ;
    const veloz_vento =dados.current.wind_speed ;


    document.getElementById("cidade").textContent=cidade;
    
    document.getElementById("temperatura").textContent = `${temperatura} ºC`;

    document.getElementById("humidade").textContent = `${humidade}%`;

    document.getElementById("condicao").textContent=condicao;

    document.getElementById("veloz-vento").textContent = `${veloz_vento} km/h`;
    

}

