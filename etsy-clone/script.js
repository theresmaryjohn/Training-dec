const container = document.querySelector(".container-list");
const discounts = document.querySelector(".discounts");
const popularGif = document.querySelector(".popular-gifts")

const halfStar = "img/half-star.svg"
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
    starcount: 5,
    rating: 'img/full-star.svg',
    reviews: ' (9920)',
    price: "",
    actualprice: 1710,
    discount: 50,
    delivery:"",
    type: "image",
    videoURL: "",
  },

  {
    name: "Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality & DURABL",
    photo: "img/0302.avif",
    starcount: 5,
    rating:'img/full-star.svg',
    reviews: ' (13,357)',
    price: "",
    actualprice: 1452,
    discount: 50,
    delivery:"",
    type: "video",
    videoURL: "img/0302-vid.mp4",
  },
  {
    name: "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
    photo: "img/0303.avif",
    starcount: 5,
    rating:'img/full-star.svg',
    reviews: ' (13,952)',
    price: "",
    actualprice: 3293,
    discount: 50,
    delivery:"FREE Delivery",
    type: "image",
    videoURL: "",
  },
  {
    name: "Personalised Song Plaque With Stand, Any Photo / Song, Any Playlist, Photo and Music Gift, Music Prints",
    photo: "img/0304.avif",
    starcount: 4,
    rating:'img/full-star.svg',
    reviews: ' (5466)',
    price: "",
    actualprice: 2152,
    discount: 70,
    delivery:"FREE Delivery",
    type: "video",
    videoURL: "img/0304-vid.mp4",
  },
  {
    name: "Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift Folding Knife Groomsmen Gift Anniversary Wedding Personalized Gift for Men",
    photo: "img/0305.avif",
    starcount: 5,
    rating:'img/full-star.svg',
    reviews: ' (6579)',
    price: "",
    actualprice: 7703,
    discount: 70,
    delivery:"",
    type: "video",
    videoURL: "img/0305-vid.mp4",
  },
  {
    name: "Faceless Portrait, custom illustration, personalised photo, photo illustration, personalised portrait, boyfriend gift, girlfriend gift",
    photo: "img/0306.avif",
    starcount: 5,
    rating:'img/full-star.svg',
    reviews: ` (7362)`,
    price: "",
    actualprice: 1541,
    discount: 70,
    delivery:"FREE Delivery",
    type: "image",
    videoURL: "",
  },
];


function addList() {
  const addContents = document.createElement("ul");
  container.appendChild(addContents);

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

addList();

function discountList() {
  for (let i = 0; i < discountItems.length; i++) {
    const discount_list = document.createElement("ul");
    discounts.appendChild(discount_list);

    const list_items = document.createElement("li");
    discount_list.appendChild(list_items);

    const list_image = document.createElement("div");
    list_items.appendChild(list_image);

    const img_items = document.createElement("img");
    list_image.appendChild(img_items);
    img_items.src = discountItems[i].photo;

    const discount_text = document.createElement("a");
    list_items.appendChild(discount_text);

    const discount_text_small = document.createElement("small");
    discount_text.appendChild(discount_text_small);
    discount_text_small.innerHTML = discountItems[i].name;

    const discount_text_p = document.createElement("p");
    discount_text.appendChild(discount_text_p);
    discount_text_p.innerHTML = discountItems[i].text;
  }
}

discountList();

function popularList() {
  const popular_list = document.createElement("ul");
  popularGif.appendChild(popular_list);

  for (let i = 0; i < popularGifts.length; i++) {
    const popular_items = document.createElement("li");
    popular_list.appendChild(popular_items);

    const popular_image = document.createElement("div");
    popular_items.appendChild(popular_image);
    popular_image.classList.add("popular-div");

    function videoList() {
      if (popularGifts[i].type === "video") {
        const video_popular = document.createElement("video");
        video_popular.src = popularGifts[i].videoURL;
        video_popular.poster = popularGifts[i].photo;
        popular_image.appendChild(video_popular);

        video_popular.addEventListener("mouseenter", () => {
          //  video_popular.autoplay=false;
          video_popular.muted = "muted";
          video_popular.play();
        });
        video_popular.addEventListener("mouseleave", () => {
          video_popular.pause();
          // video_popular.currentTime = 0;
          video_popular.load();
        });
        const playButton=document.createElement("div")
        popular_image.appendChild(playButton)
        playButton.classList.add("playbutton")
        
        const playButtonImg=document.createElement('img')
        playButton.appendChild(playButtonImg)
        playButtonImg.src="img/play-button.svg"
        // console.log(video_popular)
      } else {
        const img_popular = document.createElement("img");
        img_popular.src = popularGifts[i].photo;
        img_popular.classList.add("popular-image");
        popular_image.appendChild(img_popular);
      }
    }
    videoList();

    const textList = document.createElement("div");
    popular_items.appendChild(textList);

    const headingList = document.createElement("a");
    textList.appendChild(headingList);
    headingList.innerText = popularGifts[i].name;

    const ratingStar = document.createElement("img");
    textList.appendChild(ratingStar);
    ratingStar.src = popularGifts[i].rating;


    for (let j=0;j<popularGifts[i].starcount-1;j++){
      if(popularGifts[i].starcount===5){

        const ratingStar = document.createElement("img");
        textList.appendChild(ratingStar);
        ratingStar.src = popularGifts[i].rating;
      } }
      if(popularGifts[i].starcount===4){
          for (let j=0;j<popularGifts[i].starcount-1;j++){
  
           const ratingStar = document.createElement("img");
          textList.appendChild(ratingStar);
          ratingStar.src = popularGifts[i].rating ;
         
        }
        const ratingStarHalf = document.createElement("img");
        textList.appendChild(ratingStarHalf);
        ratingStarHalf.src = halfStar ; 
       }
        const ratingNum=document.createElement("span")
        textList.appendChild(ratingNum)
        ratingNum.innerText=popularGifts[i].reviews;

        const pricesAll=document.createElement("p")
        textList.appendChild(pricesAll)

        const priceAfter=document.createElement("b")
        pricesAll.appendChild(priceAfter)
        priceAfter.innerHTML="₹"+ " "+Math.ceil (`${popularGifts[i].price} ${(popularGifts[i].actualprice*popularGifts[i].discount/100)}`)
       
         const breakLine=document.createElement("br")
         pricesAll.appendChild(breakLine)

        const actualPrice=document.createElement("span")
        pricesAll.appendChild(actualPrice)
        actualPrice.innerHTML= "₹" +" "+ popularGifts[i].actualprice

        const discountPercent=document.createElement("small")
        pricesAll.appendChild(discountPercent)
        discountPercent.innerHTML=" "+"(" +popularGifts[i].discount+"% off"+")"

        const deliveryInfo=document.createElement("div")
        popular_items.appendChild(deliveryInfo)
        deliveryInfo.innerHTML=popularGifts[i].delivery
        deliveryInfo.classList.add('deliveryInfo')
        if(popularGifts[i].delivery===""){
          deliveryInfo.style.display="none"
        }

        const favorites=document.createElement("div")
        popular_image.appendChild(favorites)
        favorites.classList.add("like")
        
        const likeButton=document.createElement('img')
        favorites.appendChild(likeButton)
        likeButton.src="img/whitelike.svg"
        likeButton.addEventListener("click",(e)=>{
          e.target.src="img/redlike.svg"
         })
        likeButton.addEventListener("dblclick",(e)=>{
          e.target.src="img/whitelike.svg"
        })   
  }
}

popularList();


