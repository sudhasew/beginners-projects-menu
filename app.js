const menu = [
  {
    id: 1,
    title: "sooji dosa",
    category: "breakfast",
    price: 4.99,
    img: "./images/item-1.jpeg",
    desc: `I'm rava dosa made with sooji, all-purpose flour, buttermilk and added some spices.`,
  },
  {
    id: 2,
    title: "veg biryani",
    category: "lunch",
    price: 9.99,
    img: "./images/item-4.jpeg",
    desc: `I'm biryani made with basmati rice, veggies and added some spices into it.`,
  },
  {
    id: 3,
    title: "tali",
    category: "dinner",
    price: 9.99,
    img: "./images/item-7.jpeg",
    desc: `I'm tali with rice roti, indian pickle, curries, rasam, rice crisps and yogurt.`,
  },
  {
    id: 4,
    title: "chocolate milkshake",
    category: "shake",
    price: 7.99,
    img: "./images/item-10.jpeg",
    desc: `I'm shake made with milk and venila ice-cream.`,
  },
  {
    id: 5,
    title: "chocolate icecream",
    category: "icecream",
    price: 6.99,
    img: "./images/item-13.jpeg",
    desc: `I'm a cool and delicious icecream made with cream and chocolate.`,
  },
  {
    id: 6,
    title: "dokla",
    category: "breakfast",
    price: 4.99,
    img: "./images/item-3.jpeg",
    desc: `I'm dokla made with chickpea flour, all-purpose flour, and butter-milk.`,
  },
  {
    id: 7,
    title: "rice plate",
    category: "lunch",
    price: 10.99,
    img: "./images/item-5.jpeg",
    desc: `I'm tali with rice vada, ghee, curries, papad and rasam.`,
  },
  {
    id: 8,
    title: "rice with sweet",
    category: "dinner",
    price: 8.99,
    img: "./images/item-8.jpeg",
    desc: `I'm tali with rice, roti, indian curries, gulab-jamun and yogurt.`,
  },
  {
    id: 9,
    title: "venila milkshake",
    category: "shake",
    price: 7.99,
    img: "./images/item-11.jpeg",
    desc: `I'm shake made with milk and chocolate.`,
  },
  {
    id: 10,
    title: "venilla icecream",
    category: "icecream",
    price: 5.99,
    img: "./images/item-14.jpeg",
    desc: `I'm a cool and delicious icecream made with cream and venila.`,
  },
  {
    id: 11,
    title: "bread omelette",
    category: "breakfast",
    price: 5.99,
    img: "./images/item-2.jpeg",
    desc: `I'm bread omlette with eggs and white bread. And added some spices into it`,
  },
  {
    id: 12,
    title: "full meals",
    category: "lunch",
    price: 12.99,
    img: "./images/item-6.jpeg",
    desc: `I'm tali with rice, roti, pulao, curries, dal, fried potato-curry and yogurt.`,
  },
  {
    id: 13,
    title: "mini meals",
    category: "dinner",
    price: 8.99,
    img: "./images/item-9.jpeg",
    desc: `I'm tali with rice, sweet, yogurt-rice, crisps and salad.`,
  },
  {
    id: 14,
    title: "chocolate milkshake with venila",
    category: "shake",
    price: 9.99,
    img: "./images/item-12.jpeg",
    desc: `I'm shake made with milk and chocolate.`,
  },
  {
    id: 15,
    title: "oreo icecream",
    category: "icecream",
    price: 8.99,
    img: "./images/item-15.jpeg",
    desc: `I'm a cool and delicious icecream made with cream and oreo biscuits.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//LOAD ITEMS
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const catogiries = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = catogiries
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
          </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");

  //FILTER ITEMS
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCatogery = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      //console.log(menuCatogery);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCatogery);
      }
    });
  });
}
