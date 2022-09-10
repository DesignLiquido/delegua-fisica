import { aceleracao, deltaS, deltaT, mrufh, mruv, velocidadeMedia } from "../cinematica"

describe('velocidadeMedia', () => {
  it('verifica se retorna o valor correto da velocidade média', () => {
    expect(velocidadeMedia(10, 2)).toEqual(5);
  })
})

describe('deltaS', () => {
  it('verifica se retorna o valor correto de deltaS', () => {
    expect(deltaS(2, 10)).toEqual(8);
  })
})

describe('deltaT', () => {
  it('verifica se retorna o cálculo correto de deltaT', () => {
    expect(deltaT(2, 10)).toEqual(8);
  })
})

describe('aceleracao', () => {
  it('verifica se retorna o cálculo correto da aceleracao', () => {
    expect(aceleracao(2, 10, 0, 10)).toEqual(0.8);
  })
})

describe('mrufh', () => {
  it('verifica se retorna', () => {
    expect(mrufh(2, 10, 0)).toEqual(["Função: 2+(10)*t<br>Posições: 2"]);
  })
})

describe('mruv', () => {
  it('verifica se retorna', () => {
    expect(mruv(2, 10, 0)).toEqual([-0, -0, 0, 0, 0, 0, 0, 0, 0, 0]);
  })
})