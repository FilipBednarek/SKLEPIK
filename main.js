const btn = document.querySelector('#addGrades');
const display = document.querySelector('#display');

gradesList = [];

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name');
  const classYear = document.querySelector('#classYear');
  const permission = document.querySelector('#permission');
  const grades = document.querySelector('#grades');

  console.log(permission);
  console.log(permission.value);
  //   gradesList.push(grades.value);

  // if (permission.value = ) {

  // }

  const object = {
    name: name.value,
    classYear: classYear.value,
    permission: permission.cheked ? permission.value : 'on',
    // grades: gardesList.value,
  };
  //   console.log(gradesList.value);

  display.innerHTML += ` <li>imie: ${name.value}, Klasa: ${
    classYear.value
  }, pozwolenie:  ${object.permission ? 'Zgoda ' : 'Brak zgody'} </li>`;
});
