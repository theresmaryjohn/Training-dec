const container = document.querySelector(".container-list");
const discounts = document.querySelector(".discounts");
const content = [
  {
    name: "Wedding",
    photo: "img/01.webp",
  },
  {
    name: "Jewellery",
    photo: "img/02.webp",
  },
  {
    name: "Clothing",
    photo: "img/03.webp",
  },
  {
    name: "Home & Living",
    photo: "img/04.webp",
  },
  {
    name: "Wall Art",
    photo: "img/05.webp",
  },
  {
    name: "Kitchen & Dining",
    photo: "img/06.webp",
  },
];
const discountItems = [
  {
    name: "Up to 40% off on",
    photo: "img/0201.webp",
    text: "Women's Ethnic Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0202.webp",
    text: "Women's Western Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0203.webp",
    text: "Men's Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0204.webp",
    text: "Fashion Jewellery",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0205.webp",
    text: "Winter Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0206.webp",
    text: "Wedding Clothing",
  },
];
const popularGifts = [
  {
    name: "Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
    photo: "img/0301.avif",
    rating:"",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0202.webp",
    text: "Women's Western Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0203.webp",
    text: "Men's Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0204.webp",
    text: "Fashion Jewellery",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0205.webp",
    text: "Winter Clothing",
  },
  {
    name: "Up to 40% off on",
    photo: "img/0206.webp",
    text: "Wedding Clothing",
  },
];
addList();
function addList() {
  const addContents = document.createElement("ul");
  container.appendChild(addContents);
  console.log(addContents);

  for (let i = 0; i < content.length; i++) {
    const list = document.createElement("li");
    addContents.appendChild(list);

    const listImage = document.createElement("img");
    list.appendChild(listImage);
    listImage.src = content[i].photo;

    const listName = document.createElement("a");
    list.appendChild(listName);
    listName.innerHTML = content[i].name;
  }
}

discountList();
function discountList() {
  for (let i = 0; i < discountItems.length; i++) {
    const discount_list = document.createElement("ul");
    discounts.appendChild(discount_list);
    console.log(discount_list);

    const list_items = document.createElement("li");
    discount_list.appendChild(list_items);
    console.log(list_items);

    const list_image=document.createElement("div")
    list_items.appendChild(list_image)
    console.log(list_image);

    const img_items=document.createElement("img")
    list_image.appendChild(img_items)
    console.log(img_items);
    img_items.src=discountItems[i].photo

    const discount_text=document.createElement("a")
    list_items.appendChild(discount_text)
    console.log(discount_text);

    const discount_text_small=document.createElement("small")
    discount_text.appendChild(discount_text_small)
    discount_text_small.innerHTML=discountItems[i].name

    const discount_text_p=document.createElement("p")
    discount_text.appendChild(discount_text_p)
    discount_text_p.innerHTML=discountItems[i].text
  }

}

