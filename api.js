// Chamar API
// Traduzir a resposta da API
//Trabalhar com dados da API

// AJAX antiga não deve usar
//FETCH 2015 + OK
//AXIOS MAIS MADERNA, POREMPRECISA DE BIBLIOTECA EXTERNA

//metodos do fetch para ler os dados da api
//funcões arrow - Arrow Function

let dadosApi;

const cep = document.querySelector("#cep")
const rua = document.querySelector("#rua")
const estado = document.querySelector("#uf")
const bairro = document.querySelector("#bairro")
const cidade = document.querySelector("#cidade")
const complemento = document.querySelector("#comp")
const rodopiao = document.querySelector(".loader")

const todoForm = [cep, rua, estado, bairro, cidade, complemento];



    function buscaCep(cep){
        fetch(`https://viacep.com.br/ws/${cep}/json/`) 

    .then((resposta) => {
        console.log(resposta)
        desabilitarForm()
        rodopiao.style.display = "block"        
        return resposta.json()
    })
    .then(dados => {
        dadosApi = dados;
        setTimeout(() => {
            preencherForm(dadosApi);
            habilitarForm()
            rodopiao.style.display = "none"
        } , 5000)
        
    })
    }

    function preencherForm(dadosApi){
        rua.value = dadosApi.logradouro;
        estado.value = dadosApi.uf;
        bairro.value = dadosApi.bairro;
        cidade.value = dadosApi.localidade;
        complemento.value = dadosApi.complemento;

    }
    function desabilitarForm(){
        for (const input of todoForm) {
            input.disabled = true;            
        }
    }
    function habilitarForm(){
        for (const input of todoForm) {
            input.disabled = false
            
        }
    }

    cep.addEventListener("keydown", (e) => {
        if (e.key === "Enter"){
            buscaCep(cep.value)
        }
    })

    

    




