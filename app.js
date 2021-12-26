const menu = [
  {
    id: 1,
    title: "ravva dosa",
    category: "breakfast",
    price: 4.99,
    img: "./images/item-1.jpeg",
    desc: `I'm rava dosa made with sooji rava all-purpose flour buttermilk and added some spices.`,
  },
  {
    id: 2,
    title: "biryani",
    category: "lunch",
    price: 9.99,
    img: "./images/item-4.jpeg",
    desc: `I'm biryani made with basmati rice and added some spices into it.`,
  },
  {
    id: 3,
    title: "tali",
    category: "dinner",
    price: 9.99,
    img: "./images/item-7.jpeg",
    desc: `I'm tali with rice roti indian pickle curries rasam some crisps and yogurt.`,
  },
  {
    id: 4,
    title: "dokla",
    category: "breakfast",
    price: 4.99,
    img: "./images/item-3.jpeg",
    desc: `I'm dokla made with chickpea flour all-purpose flour and butter-milk`,
  },
  {
    id: 5,
    title: "rice plate",
    category: "lunch",
    price: 10.99,
    img: "./images/item-5.jpeg",
    desc: `I'm tali with rice vada ghee curries papad and rasam.`,
  },
  {
    id: 6,
    title: "rice with sweet",
    category: "dinner",
    price: 8.99,
    img: "./images/item-8.jpeg",
    desc: `I'm tali with rice roti indian curries gulab-jamun and yogurt.`,
  },
  {
    id: 7,
    title: "bread omlet",
    category: "breakfast",
    price: 5.99,
    img: "./images/item-2.jpeg",
    desc: `I'm tali with rice roti indian pickle curries some crisps and yogurt.`,
  },
  {
    id: 8,
    title: "full meals",
    category: "lunch",
    price: 12.99,
    img: "./images/item-6.jpeg",
    desc: `I'm tali with rice roti pulao curries dal and fried potatoes-curry and yogurt.`,
  },
  {
    id: 9,
    title: "mini meals",
    category: "dinner",
    price: 8.99,
    img: "./images/item-9.jpeg",
    desc: `I'm tali with rice sweet yogurt-rice crisps and salad.`,
  },
  {
    id: 10,
    title: "milk shake",
    category: "shake",
    price: 7.99,
    img: "./images/item-10.jpeg",
    desc: `I'm shake made with milk and chocolate.`,
  },
  {
    id: 11,
    title: "godzilla milkshake",
    category: "shake",
    price: 7.99,
    img: "./images/item-11.jpeg",
    desc: `I'm shake made with milk and chocolate.`,
  },
  {
    id: 12,
    title: "godzilla milkshake",
    category: "shake",
    price: 7.99,
    img: "./images/item-12.jpeg",
    desc: `I'm shake made with milk and chocolate.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//LOAD ITEMS
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);

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
  const filterBtns = document.querySelectorAll(".filter-btn");

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
