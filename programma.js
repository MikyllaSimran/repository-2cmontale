
for (const element of elementi) {
    let contenitore =document.getElementById('contenitore');
contenitore.style.borderStyle = 'solid';
contenitore.style.position = 'relative';

let elemento = document.createElement('div');
elemento.style.borderStyle = 'solid';
elemento.style.width = '100px';
elemento.style.height = '130px';
elemento.style.textAlign = 'center';
elemento.style.position = 'absolute';
elemento.style.left = 100 * (element.xpos -1 ) + 'px';
elemento.style.top = 130 * (element.ypos -1 ) + 'px';
elemento.style.backgroundColor = '#' + element['cpk-hex'];
elemento.style.boxSizing = 'border-box';
elemento.style.borderWidth = '0.5px';
elemento.addEventListener('click', () => {
    let immagineScheda = document.getElementById('immagine-scheda');
    immagineScheda.src = element.image.url;
    immagineScheda.style.borderStyle = 'solid';
    immagineScheda.style.borderColor = '#' + element ['cpk-hex'];
    immagineScheda.style.boxSizing = 'border-box';
    immagineScheda.style.borderWidth = '4.5px';

    let titoloScheda = document.getElementById('titolo-scheda');
    titoloScheda.innerText = element.name;

    let descrizioneScheda = document.getElementById('descrizione-scheda');
    descrizioneScheda.innerText = element.summary;

    let catergoriaScheda = document.getElementById ('categoria-scheda');
    catergoriaScheda.innerText = "category: " + element.category;

    let densityScheda = document.getElementById ('density-scheda');
    densityScheda.innerText = "density: " + element.density;
})


let numeroAtomico = document.createElement('p');
numeroAtomico.innerText = element.number;
numeroAtomico.style.textAlign = 'left';
elemento.appendChild(numeroAtomico);


let simbolo = document.createElement('a');
simbolo.innerText = element.symbol;
simbolo.href = element.source;
simbolo.style.fontSize = '25px';
simbolo.style.textDecoration = 'none';
elemento.appendChild(simbolo);
simbolo.style.fontWeight = 'bold';


let nome = document.createElement('p');
nome.innerText = element.name;
elemento.appendChild(nome);

contenitore.appendChild(elemento);
}
