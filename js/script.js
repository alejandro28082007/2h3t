clicado = () => alert("Alô mundo");
mensagem = (msg) => console.log(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros_simples = (c,j) => mult(c,div(j,100));
montante_juro_simples = (c,j) => soma(juros_simples(c,j),c);

mensagem(soma(15,soma(11,soma(4,7))));

mensagem(sub(18,7));

mensagem(soma(2,div(2,2)))
/* 
  Quanto é 18% de 420,00.
*/
mensagem(juros_simples(420,18));

mensagem(montante_juro_simples(420,18));




