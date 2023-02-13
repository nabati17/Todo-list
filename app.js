const button = document.querySelector('#Btn');

// membuat array baru
let tasks = [];

// ambil tugas dari penyimpanan lokal
const fetchTasks = () => {
  const tasksJSON = localStorage.getItem('tasks');
  if (tasksJSON !== null) {
    tasks = JSON.parse(tasksJSON);
    tasks.forEach((task) => {
      addTaskToList(task);
    });
  }
};

// simpan dari Penyimpanan Lokal
const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Tambahkan tugas ke list
const addTaskToList = (task) => {
  var li = document.createElement('li');
  var t = document.createTextNode(task);
  li.appendChild(t);
  document.getElementById('myUL').appendChild(li);

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  //even hapus
  span.addEventListener('click', (e) => {
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
      saveTasks();
    }
    li.remove();
  });
};

// jalankan button untuk menjalalankan tugas
button.addEventListener('click', (e) => {
  e.preventDefault();
  var inputValue = document.getElementById('myInput').value;
  if (inputValue === '') {
    alert('Anda belum memasukan list!');
  } else if (!inputValue.match(/\b\w{3,}\b/)) {
    alert('Input minimal harus 3 huruf!');
  } else {
    addTaskToList(inputValue);
    tasks.push(inputValue);
    saveTasks();
  }
  document.getElementById('myInput').value = '';
});

fetchTasks();

// const button = document.querySelector('#Btn');

// // membuat array baru
// let tasks = [];

// // ambil tugas dari penyimpanan lokal
// const fetchTasks = () => {
//   const tasksJSON = localStorage.getItem('tasks');
//   if (tasksJSON !== null) {
//     tasks = JSON.parse(tasksJSON);
//     tasks.forEach((task) => {
//       addTaskToList(task);
//     });
//   }
// };

// // simpan dari Penyimpanan Lokal
// const saveTasks = () => {
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// };

// // Tambahkan tugas ke list
// const addTaskToList = (task) => {
//   var li = document.createElement('li');
//   var t = document.createTextNode(task);
//   li.appendChild(t);
//   document.getElementById('myUL').appendChild(li);

//   var span = document.createElement('SPAN');
//   var txt = document.createTextNode('\u00D7');
//   span.className = 'close';
//   span.appendChild(txt);
//   li.appendChild(span);

//   //even hapus
//   span.addEventListener('click', (e) => {
//     const index = tasks.indexOf(task);
//     if (index > -1) {
//       tasks.splice(index, 1);
//       saveTasks();
//     }
//     li.remove();
//   });
// };

// // jalankan button untuk menjalalankan tugas
// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   var inputValue = document.getElementById('myInput').value;
//   if (inputValue === '') {
//     alert('Anda belum memasukan list!');
//   } else {
//     addTaskToList(inputValue);
//     tasks.push(inputValue);
//     saveTasks();
//   }
//   document.getElementById('myInput').value = '';
// });

// fetchTasks();
