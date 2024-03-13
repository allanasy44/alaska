const menu = [
  {
    id: 1,
    title: "baby shoots",
    category: "weddings",
    img: "images/place1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "",
    category: "indoor",
    img: "images/place2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "",
    category: "outdoor",
    img: "images/place3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "",
    category: "weddings",
    img: "images/place4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "",
    category: "indoor",
    img: "images/ROORA(1).jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "",
    category: "outdoor",
    img: "images/ROORA(2).jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "",
    category: "weddings",
    img: "images/ROORA(3).jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "",
    category: "indoor",
    img: "images/ROORA(4).jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "",
    category: "outdoor",
    img: "images/slide3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Code to ADD DYNAMIC HTML CODE USING JAVASCRIPT

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// load items

window.addEventListener('DOMContentLoaded',function()
{
  displayMenuItems(menu);
  displayMenuButtons();
});

// Code to ADD DYNAMIC HTML CODE FOR MENU ITEMS

function displayMenuItems(menuItems)
{
  let displayMenu = menuItems.map(function(item)
  {
     return `<article class="menu-item">
          <img src=${item.img} class="photo" alt= ${item.title}/>
          <div class="item-info">
              <h4>${item.title}</h4>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu; 
}

// Code to ADD DYNAMIC HTML CODE FOR MENU FILTER BUTTONS

function displayMenuButtons()
{
  const catagories = menu.reduce(function(values,item)
  {
    if (!values.includes(item.category)) 
    {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
  );

  const categoryBtns = catagories.map(function(catagory)
  {
    return `<button type="button" class="filter-btn" data-id=${catagory}>
    ${catagory}</button>`;
  }).join('');

  container.innerHTML = categoryBtns; 
  const filterBtns = document.querySelectorAll('.filter-btn');

  
  // filter items

  filterBtns.forEach(function(btn)
  {
    btn.addEventListener('click',function(e)
    {
      const category = e.currentTarget.dataset.id; 
      const menuCategory = menu.filter(function(menuItem)
      {

        if (menuItem.category == category) 
        {
          return menuItem;
        }

      });       

        if (category == 'all')
        {
          displayMenuItems(menu);
        }
        else
        {
          displayMenuItems(menuCategory);
        }
    });
  });
}

// id with dataset is the name of the object we gave with the data attribute in our html button tag, it is just an object name so we can name it whatever we want


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function()
{
 links.classList.toggle('show-links');

});