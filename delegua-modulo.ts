import { aceleracao, deltaS, deltaT, mrufh, mruv, velocidadeMedia } from './cinematica';

export const DeleguaModuloFisica = {
    // Cinemática
    velocidadeMedia: {
        tipoRetorno: 'número',
        funcao: velocidadeMedia,
        argumentos: [
            { nome: 'intervaloDeslocamento', tipo: 'número' },
            { nome: 'intervaloTempo', tipo: 'número' }
        ]
    },
    deltaS: {
        tipoRetorno: 'número',
        funcao: deltaS,
        argumentos: [
            { nome: 's0', tipo: 'número' },
            { nome: 's', tipo: 'número' }
        ]
    },
    deltaT: {
        tipoRetorno: 'número',
        funcao: deltaT,
        argumentos: [
            { nome: 't0', tipo: 'número' },
            { nome: 't', tipo: 'número' }
        ]
    },
    aceleracao: {
        tipoRetorno: 'número',
        funcao: aceleracao,
        argumentos: [
            { nome: 'velocidadeFinal', tipo: 'número' },
            { nome: 'velocidadeInicial', tipo: 'número' },
            { nome: 'tempoFinal', tipo: 'número' },
            { nome: 'tempoInicial', tipo: 'número' }
        ]
    },
    mrufh: {
        tipoRetorno: 'vetor',
        funcao: mrufh,
        argumentos: [
            { nome: 's0', tipo: 'número' },
            { nome: 'v', tipo: 'número' },
            { nome: 't', tipo: 'número' }
        ]
    },
    mruv: {
        tipoRetorno: 'vetor',
        funcao: mruv,
        argumentos: [
            { nome: 's0', tipo: 'número' },
            { nome: 's', tipo: 'número' },
            { nome: 'a', tipo: 'número' }
        ]
    }
}
