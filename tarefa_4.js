//ainda em construção
import gods from "./arquivo_exercicio_4.js";

function nome_feature(){
    gods.forEach(god => { console.log(god.name, god.features.length) });
}


function buscar_role() {
    gods.forEach(god => {
        if (god.roles.includes("Mid")) {
            console.log(god.name, "tem a role", god.roles);
        }
    })
}

function listar_panteao(){
    gods.sort((compara1, compara2) => compara1.pantheon.localeCompare(compara2.pantheon));
    console.log(gods)
}

function novo_array(){
    var newgods = [{nome:undefined, classe:undefined}];
    gods.forEach(god => {
        newgods.nome = god.name
        newgods.classe = god.class
    console.log(newgods)
    })
}

buscar_role()
nome_feature()
listar_panteao()
novo_array()