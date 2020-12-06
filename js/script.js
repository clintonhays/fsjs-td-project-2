/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
 * insert search form
 **/
const header = document.querySelector('header');
header.insertAdjacentHTML(
  'beforeend',
  `<label for="search" class="student-search">
      <input id="search" placeholder="Search by name...">
      <button id="submit" type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`
);

/**
 * Global Variables 
 **/

const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const studentList = document.querySelector('ul.student-list');
const linkList = document.querySelector('ul.link-list');

/**
 * displays page of student info cards
 * 
 * @param {array} list - list of student information objects
 * @param {number} page - current page displayed
 * 
 */

const showPage = (list, page) => {
  const firstIndex = page * 9 - 9;
  const finalIndex = page * 9;
  studentList.innerHTML = '';

  // loop through array and create student card based on object data
  list.forEach((student, index) => {
    const { picture, name, email, registered } = student;
    //check index of student object
    if (index >= firstIndex && index < finalIndex) {
      const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src=${picture.large} alt="Profile Picture">
            <h3>${name.first} ${name.last}</h3>
            <span class="email">${email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${registered.date}</span>
         </div>
         </li>
        `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  });
};

/**
 * display pagination buttons based on length of data array
 * 
 * @param {array} list - list of student information objects
 * 
 */

const addPagination = (list) => {
  // determine number pagination buttons to display
  const pages = Math.ceil(list.length / 9);
  linkList.innerHTML = '';

  // loop over pages total and create button for each page
  for (let i = 0; i < pages; i++) {
    const button = `
        <li>
          <button id="pagination-button" type="button">${i + 1}</button>
        </li>
       `;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  // target firt pagination button & add class
  const button = document.querySelector('#pagination-button');
  button.className = 'active';

  /* when button is clicked, remove active class from prev button
   * and apply it to current button
   */
  linkList.addEventListener('click', (e) => {
    target = e.target;
    if (target.tagName === 'BUTTON') {
      document.querySelector('.active').classList.remove('active');
      target.classList.add('active');
      showPage(list, target.textContent);
    }
  });
};

/**
 * display no results notice for search
 */

const noResults = () => {
  const alert = `
      <h1 class="no-results">No results found</h1>
   `;

  studentList.innerHTML = alert;
  linkList.innerHTML = '';
};

/**
 * search through student array and insert matching student objects
 * 
 * @param {string} input - value of search input
 * @param {array} list - list of student information objects
 */

const searchFunc = (input, list) => {
  const newStudentList = [];

  // loop over student array and add objects that match search value
  list.forEach((student) => {
    const { name } = student;
    const studentName = `${name.first} ${name.last}`;
    if (studentName.toLowerCase().includes(input.value.toLowerCase())) {
      newStudentList.push(student);
      showPage(newStudentList, 1);
      addPagination(newStudentList);
    }
  });
  // call noResults function if no search results are found
  if (newStudentList.length === 0) {
    noResults();
  }
};

search.addEventListener('keyup', () => {
  searchFunc(search, data);
});

submit.addEventListener('click', () => {
  searchFunc(search, data);
});

// Call functions
showPage(data, 1);
addPagination(data);
