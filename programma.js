let idrogeno = {};
idrogeno.numero = 1;
idrogeno.simbolo = 'H';
idrogeno.nome = 'idrogeno'
idrogeno.wiki = 'https://it.wikipedia.ohttps://it.wikipedia.org/wiki/Idrogenorg/wiki/Pagina_principale';

let elio = {};
elio.numero = 2;
elio.simbolo = 'He';
elio.nome ='elio';
elio.wiki = 'https://it.wikipedia.org/wiki/Elio://it.wikipedia.org/wiki/Pagina_principale';


let elementi = [idrogeno, elio];

for (const element of elementi) {
    let contenitore =document.getElementById('contenitore');
contenitore.style.borderStyle = 'solid';

let elemento = document.createElement('div');
elemento.style.borderStyle = 'solid'
elemento.style.width = '70px'
elemento.style.textAlign = 'center'


let numeroAtomico = document.createElement('p');
numeroAtomico.innerText = element.numero;
elemento.appendChild(numeroAtomico);

let simbolo = document.createElement('a');
simbolo.innerText = element.simbolo;
simbolo.href = elemento.wiki
simbolo.style.fontSize = '25px'
elemento.appendChild(simbolo);


let nome = document.createElement('p');
nome.innerText = element.nome;
elemento.appendChild(nome);

contenitore.appendChild(elemento);
}
