#language: pt 

Funcionalidade: Calculadora
Como não sei fazer conta de cabeça
Quero usar a calculadora do sistema
Para obter os resultados corretos

Cenário: Soma de dois números
Dado que acesse a calculadora
Quando eu somar 2 com 3
Então o resultado da soma deve ser 5

Esquema do Cenário: Soma de dois números usando tabela
Dado que acesse a calculadora
Quando eu somar <valor1> com <valor2>
Então o resultado da soma deve ser <total>

Exemplos: 
|valor1| valor2| total |
|2|3|5|
|20|3|23|
|200|300|5000|
|2000|30|2030|


