require('colors');

function tablaDeMultiplicarConColor(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'.red)
        console.log(`${numero} x ${i} = ${resultado}`.bgMagenta);
        console.log('pppppppppppppppppppppppppppppppppppppp'.red)
    }
}

module.exports = {
    tablaDeMultiplicarConColor: tablaDeMultiplicarConColor
};
