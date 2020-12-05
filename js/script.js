/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
 * Global Variables 
 **/
const classList = document.querySelector('ul.student-list');
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
  classList.innerHtml = '';

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
      classList.innerHTML += studentItem;
    }
  });
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
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
          <button type="button">${i + 1}</button>
        </li>
       `;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  const button = document.querySelector('button');
  button.className = 'active';

  linkList.addEventListener('click', (e) => {
    target = e.target;
    if (target.tagName === 'BUTTON') {
      document.querySelector('.active').classList.remove('active');
      target.classList.add('active');
    }
  });
};

// Call functions
showPage(data, 1);
addPagination(data);
