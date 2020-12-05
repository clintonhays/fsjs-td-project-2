/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
 * Global Variables 
 **/

const classList = document.querySelector('ul.student-list');

const showPage = (list, page) => {
  const firstIndex = page * 9 - 9;
  const finalIndex = page * 9;
  ul.innerHtml = '';

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
            <span class="date">Joined ${item.registered.length}</span>
         </div>
         </li>
        `;
    }
  });
};

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
