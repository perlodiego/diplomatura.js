function generarTabla(value) {
  if (document.getElementById('tabla').childElementCount == 0) {
    const MOUNTAINS = [
      { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
      { name: 'Everest', height: 8848, place: 'Nepal' },
      { name: 'Mount Fuji', height: 3776, place: 'Japan' },
      { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
      { name: 'Denali', height: 6168, place: 'United States' },
      { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
      { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
    ];

    let tabla = document.createElement('table');
    let titleRow = document.createElement('tr');
    let headTable = ['Name', 'Height', 'Place'];
    let headTableSpanish = ['Nombre', 'Altura', 'Lugar'];

    if (value) {
      for (let i = 0; i < headTable.length; i++) {
        let th = document.createElement('th');
        th.textContent = headTable[i];
        titleRow.appendChild(th);
      }
    } else {
      for (let i = 0; i < headTableSpanish.length; i++) {
        let th = document.createElement('th');
        th.textContent = headTableSpanish[i];
        titleRow.appendChild(th);
      }
    }
    tabla.appendChild(titleRow);
    for (let i = 0; i < MOUNTAINS.length; i++) {
      let bodyTable = document.createElement('tr');
      let cell1 = document.createElement('td');
      cell1.textContent = MOUNTAINS[i].name;
      bodyTable.appendChild(cell1);
      let cell2 = document.createElement('td');
      cell2.textContent = MOUNTAINS[i].height;
      bodyTable.appendChild(cell2);
      let cell3 = document.createElement('td');
      cell3.textContent = MOUNTAINS[i].place;
      bodyTable.appendChild(cell3);
      tabla.appendChild(bodyTable);
    }
    tabla.setAttribute('border', '2');
    document.getElementById('tabla').appendChild(tabla);
  } else {
    document.getElementsByTagName('table')[0].remove();
    generarTabla(value);
  }
}
function delItem(item) {
  item.remove();
}
function addToList(value) {
  if (value) {
    let li = document.createElement('li');
    li.textContent = value;
    const delBtn = document.createElement('button');
    delBtn.className = 'delBtn';
    delBtn.textContent = 'DELETE';
    delBtn.addEventListener('click', () => delItem(li));
    li.appendChild(delBtn);
    document.getElementById('lista').appendChild(li);
    document.getElementsByTagName('input')[0].value = '';
  }
}
if (document.getElementById('app1')) {
  document.getElementById('app1').innerHTML = 'Hello World!';
  const tabla = document.createElement('div');
  tabla.id = 'tabla';
  document.getElementsByTagName('body')[0].appendChild(tabla);
  generarTabla(false);
} else if (document.getElementById('app2')) {
  const btn1 = document.createElement('button');
  btn1.textContent = 'Generate now!';
  btn1.addEventListener('click', () => generarTabla(true));
  const btn2 = document.createElement('button');
  btn2.textContent = '¡Generar ahora!';
  btn2.addEventListener('click', () => generarTabla(false));
  document.getElementById('buttons').appendChild(btn1);
  document.getElementById('buttons').appendChild(btn2);
} else if (document.getElementById('app3')) {
  const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];
  const lista = document.createElement('ul');
  lista.id = 'lista';
  document.getElementById('app3').appendChild(lista);
  const input = document.createElement('input');
  document.getElementById('app3').appendChild(input);
  const btn = document.createElement('button');
  btn.className = 'btAdd';
  btn.addEventListener('click', () => {
    addToList(input.value);
  });
  btn.textContent = 'Add To List';
  document.getElementById('app3').appendChild(btn);
  TODO.forEach((x) => {
    addToList(x);
  });
}
