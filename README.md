# Módulo de física para Delégua e JavaScript

Assim como Delégua é uma variação da linguagem Égua, esta biblioteca é uma variação da biblioteca Eguamat.

No entanto, diferente de Eguamat, que faz parte do código da linguagem Égua, essa biblioteca é distribuída independentemente da linguagem Delégua. Isso possibilita importar a biblioteca tanto para Delégua quanto para JavaScript. Basta para isso instalar a biblioteca usando o NPM. 

Além disso, Delégua deve ter uma automação para instalar o pacote quando for importado.

## Cinemática

### `velocidadeMedia()`

Calcula a velocidade média.

### `deltaS()`

Calcula o espaço percorrido.

### `deltaT()`

Calcula o tempo percorrido.

### `aceleracao()`
  
Calcula a aceleração.

### `mrufh()`
  
Calcula a função horária da posição (Movimento Retilíneo Uniforme).

### `mruv()`
  
Calcula o Movimento Retilíneo Uniformemente Variado.

## Exemplo de uso com TypeScript/JavaScript com ES Modules

```ts
import {mruv} from '@designliquido/delegua-fisica';

console.log(mruv(0, 10, 2));
```

## Exemplo de uso com JavaScript com CommonJS

```js
const { mruv } = require('@designliquido/delegua-fisica');

console.log(mruv(0, 10, 2));
```
