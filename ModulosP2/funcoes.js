const { respostas } = require('./dados');

// funcoes que calcula as quantidades
let Quantidades = {
    quantRespostas: respostas.length,

    quantOtimo: (array) => {
        let quantOtimo = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 3) {
                quantOtimo++;
            }
        }
        return quantOtimo;
    },

    quantBom: (array) => {
        let quantBom = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 2) {
                quantBom++;
            }
        }
        return quantBom;
    },

    quantRegular: (array) => {
        let quantRegular = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 1) {
                quantRegular++;
            }
        }
        return quantRegular;
    }
}




// funcao que calcula a media de idades
let Medias = {
    mediaIdadesOtimo: (array) => {
        let somaIdades = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 3) {
                somaIdades += array[i].idade;
            }
        }
        return somaIdades / Quantidades.quantOtimo(array);
    },

    mediaIdadesBom: (array) => {
        let somaIdades = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 2) {
                somaIdades += array[i].idade;
            }
        }
        return somaIdades / Quantidades.quantBom(array);
    },

    mediaIdadesRegular: (array) => {
        let somaIdades = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 1) {
                somaIdades += array[i].idade;
            }
        }
        return somaIdades / Quantidades.quantRegular(array);
    }
}




// funcao que calcula a porcentagen
let Porcentagens = {
    porcentagemBom: (array) => {
        return (Quantidades.quantBom(array) / Quantidades.quantRespostas) * 100;
    },

    porcentagemRegular: (array) => {
        return (Quantidades.quantRegular(array) / Quantidades.quantRespostas) * 100;
    },

    porcentagemOtimo: (array) => {
        return (Quantidades.quantOtimo(array) / Quantidades.quantRespostas) * 100;
    }
}

// exportando todas funcoes como modulos
module.exports = {
    Quantidades,
    Medias,
    Porcentagens
}