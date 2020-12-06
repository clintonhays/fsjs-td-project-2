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

const search = document.querySelector('search');
const submit = document.querySelector('submit');
const studentList = document.querySelector('ul.student-list');
const linkList = document.querySelector('ul.link-list');

/**
 * displays page of student info cards
 * 
 * @param {array} list - A list of student information objects
 * @param {number} page - Current page displayed
 * 
 */

const showPage = (list, page) => {
  const firstIndex = page * 9 - 9;
  const finalIndex = page * 9;
  studentList.innerHTML = '';

  // loop through array and create student card based on object data
  list.forEach((item, index) => {
    if (index >= firstIndex && index < finalIndex) {
      const studentItem = `
         <li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src=${item.picture.large} alt="Profile Picture">
            <h3>${item.name.first} ${item.name.last}</h3>
            <span class="email">${item.email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${item.registered.date}</span>
         </div>
         </li>
        `;
      // insert student data to div
      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  });
};

/**
 * display pagination buttons based on length of data array
 * 
 * @param {array} list - A list of student information objects
 * 
 */

const addPagination = (list) => {
  const pages = Math.ceil(list.length / 9);
  linkList.innerHTML = '';
  console.log(pages);
  console.log(typeof pages);
  console.log(pages.length);

  for (let i = 0; i < pages; i++) {
    const button = `
        <li>
          <button id="pagination-button" type="button">${i + 1}</button>
        </li>
       `;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  const button = document.querySelector('#pagination-button');
  button.className = 'active';

  linkList.addEventListener('click', (e) => {
    target = e.target;
    console.log(target.textContent);
    if (target.tagName === 'BUTTON') {
      document.querySelector('.active').classList.remove('active');
      target.classList.add('active');
      showPage(list, target.textContent);
    }
  });
};

/**
 * 
 */

const searchFunc = (input, list) => {
  console.log(input);
  console.log(list);

  // const students =
};

// Call functions
showPage(data, 1);
addPagination(data);
