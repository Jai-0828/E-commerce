
import smartwatch from "../assets/image5.jpg";
import sneakers from "../assets/image6.jpg";
import headphones from "../assets/image3.jpg";
import jeans from "../assets/image7.jpg";
import laptop from "../assets/electronics.png";
import lipstick from "../assets/beauty.jpg";
import tv from "../assets/image4.jpg";
import phone from "../assets/image1.jpg";
import pumaShoes from "../assets/image9.jpg";
import sunglasses from "../assets/image10.jpg";
import chair from "../assets/image11.jpg";
import screenProtector from "../assets/image2.jpg";
import fridge from "../assets/image12.jpg";
import vacuum from "../assets/image13.jpg";
import microwave from "../assets/image14.jpg";
import pressureCooker from "../assets/image15.jpg";
import bicycle from "../assets/image16.jpg";
import tennisRacket from "../assets/image17.jpg";
import basketball from "../assets/image18.jpg";
import yogaMat from "../assets/image19.jpg";
import nightCream from "../assets/image20.jpg";
import matteLipstick from "../assets/image21.jpg";
import dayCream from "../assets/image22.jpg";
   import tshirt1 from "../assets/tshirt1.jpg";
   import tshirt2 from "../assets/tshirt2.jpg";
   import tshirt3 from "../assets/tshirt3.jpg";
   import tshirt4 from "../assets/tshirt4.jpg";
   import tshirt5 from "../assets/tshirt5.jpg";
   import tshirt6 from "../assets/tshirt6.jpg";
   import tshirt7 from "../assets/tshirt7.jpg";
   import tshirt8 from "../assets/tshirt8.jpg";

const products = [
  {
    id: "p1",
    title: "Classic Smart Watch",
    category: "Accessories",
    price: 2499,
    oldPrice: 3999,
    rating: 4.6,
    image: smartwatch,
    description:
      "Track heart rate, sleep and workouts with a week-long battery and a display bright enough for daylight use.",
    stock: 18,
  },
  {
    id: "p2",
    title: "Nike Court Vision Sneakers",
    category: "Footwear",
    price: 4295,
    oldPrice: 5995,
    rating: 4.8,
    image: sneakers,
    description:
      "A clean, low-profile leather sneaker built on a cushioned sole for all-day comfort.",
    stock: 24,
  },
  {
    id: "p3",
    title: "Sony Wireless Headphones",
    category: "Electronics",
    price: 5999,
    oldPrice: 8990,
    rating: 4.7,
    image: headphones,
    description:
      "Active noise cancellation with up to 35 hours of playback and fast-pair Bluetooth.",
    stock: 12,
  },
  {
    id: "p4",
    title: "Levi's 502 Taper Jeans",
    category: "Fashion",
    price: 2299,
    oldPrice: 3299,
    rating: 4.4,
    image: jeans,
    description:
      "A tapered fit in soft, lightly-washed denim that works from desk to weekend.",
    stock: 30,
  },
  {
    id: "p5",
    title: "IdeaPad Slim Laptop",
    category: "Electronics",
    price: 42999,
    oldPrice: 54999,
    rating: 4.5,
    image: laptop,
    description:
      "A slim, lightweight laptop with a crisp display and enough power for everyday work and study.",
    stock: 7,
  },
  {
    id: "p6",
    title: "Forest Essentials Lip Color",
    category: "Beauty",
    price: 999,
    oldPrice: 1299,
    rating: 4.3,
    image: lipstick,
    description:
      "A richly pigmented, long-wear lip color made with natural oils and botanical extracts.",
    stock: 40,
  },
  {
    id: "p7",
    title: "Samsung 65\" Smart TV",
    category: "Electronics",
    price: 52990,
    oldPrice: 69990,
    rating: 4.6,
    image: tv,
    description:
      "Crystal-clear 4K display with smart apps built in, no extra streaming box needed.",
    stock: 5,
  },
  {
    id: "p8",
    title: "Galaxy M14 Smartphone",
    category: "Electronics",
    price: 11999,
    oldPrice: 15999,
    rating: 4.2,
    image: phone,
    description:
      "A 5000mAh battery built for all-day use, paired with a reliable Snapdragon processor.",
    stock: 22,
  },
  {
    id: "p9",
    title: "Puma Flyer Running Shoes",
    category: "Footwear",
    price: 2199,
    oldPrice: 3499,
    rating: 4.5,
    image: pumaShoes,
    description:
      "Lightweight mesh upper with responsive cushioning, built for daily runs.",
    stock: 26,
  },
  {
    id: "p10",
    title: "Ray-Ban Aviator Sunglasses",
    category: "Accessories",
    price: 8990,
    oldPrice: 11990,
    rating: 4.7,
    image: sunglasses,
    description:
      "The original aviator silhouette in polished gold-tone metal with UV-protected lenses.",
    stock: 15,
  },
  {
    id: "p11",
    title: "Executive High-Back Chair",
    category: "Home",
    price: 7499,
    oldPrice: 10999,
    rating: 4.4,
    image: chair,
    description:
      "Ergonomic lumbar support and a smooth-rolling base, built for long work-from-home days.",
    stock: 9,
  },
  {
    id: "p12",
    title: "Laptop Screen Protector",
    category: "Electronics",
    price: 499,
    oldPrice: 799,
    rating: 4.1,
    image: screenProtector,
    description:
      "An anti-glare film that guards against scratches without dulling color accuracy.",
    stock: 60,
  },

  // ---- Newly added: Home / Appliances ----
  {
    id: "p13",
    title: "LG Convertible Smart Inverter Refrigerator",
    category: "Home",
    price: 28990,
    oldPrice: 34990,
    rating: 4.6,
    image: fridge,
    description:
      "Convertible cooling modes and a smart inverter compressor that adapts to your usage, backed by a trusted brand.",
    stock: 6,
  },
  {
    id: "p14",
    title: "Dyson V11 Cordless Vacuum",
    category: "Home",
    price: 34900,
    oldPrice: 42900,
    rating: 4.8,
    image: vacuum,
    description:
      "Powerful cordless suction with a detachable wand, built for quick clean-ups across every floor type.",
    stock: 8,
  },
  {
    id: "p15",
    title: "Panasonic 27L Microwave Oven",
    category: "Home",
    price: 10990,
    oldPrice: 13990,
    rating: 4.5,
    image: microwave,
    description:
      "85 auto-cook menus, adjustable power levels, and auto reheat/defrost for effortless everyday cooking.",
    stock: 14,
  },
  {
    id: "p16",
    title: "Prestige Svachh Pressure Cooker",
    category: "Home",
    price: 2199,
    oldPrice: 2799,
    rating: 4.4,
    image: pressureCooker,
    description:
      "A deep-lid design that keeps the gasket spillage-free, with a durable hard-anodized body.",
    stock: 20,
  },

  // ---- Newly added: Sports & Fitness ----
  {
    id: "p17",
    title: "Hybrid Road Bicycle",
    category: "Sports",
    price: 12999,
    oldPrice: 16999,
    rating: 4.3,
    image: bicycle,
    description:
      "A lightweight aluminum frame with dual disc brakes, built for both city commutes and longer rides.",
    stock: 5,
  },
  {
    id: "p18",
    title: "Wilson Junior Tennis Racket",
    category: "Sports",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,
    image: tennisRacket,
    description:
      "A lightweight frame sized for young players, with a comfortable grip for building good form early.",
    stock: 25,
  },
  {
    id: "p19",
    title: "Spalding Rebound Basketball",
    category: "Sports",
    price: 1299,
    oldPrice: 1699,
    rating: 4.6,
    image: basketball,
    description:
      "A composite leather basketball with a durable grip, built for both indoor and outdoor courts.",
    stock: 35,
  },
  {
    id: "p20",
    title: "Adidas Training Yoga Mat",
    category: "Sports",
    price: 1999,
    oldPrice: 2499,
    rating: 4.4,
    image: yogaMat,
    description:
      "Extra cushioning and a non-slip surface that holds steady through the most demanding sessions.",
    stock: 30,
  },

  
  {
    id: "p21",
    title: "L'Oréal Paris Revitalift Night Cream",
    category: "Beauty",
    price: 549,
    oldPrice: 749,
    rating: 4.3,
    image: nightCream,
    description:
      "An anti-wrinkle and firming night cream with pro-retinol, formulated to work while you sleep.",
    stock: 45,
  },
  {
    id: "p22",
    title: "Maybelline Super Stay Matte Ink",
    category: "Beauty",
    price: 649,
    oldPrice: 849,
    rating: 4.5,
    image: matteLipstick,
    description:
      "A long-lasting liquid lipstick with a true matte finish that resists fading through the day.",
    stock: 50,
  },
  {
    id: "p23",
    title: "The Body Shop Vitamin E Moisture Day Cream",
    category: "Beauty",
    price: 1795,
    oldPrice: 2095,
    rating: 4.6,
    image: dayCream,
    description:
      "A vegan day cream enriched with hyaluronic acid for lasting hydration, powered by vitamin E.",
    stock: 28,
  },

  {
    id: "p24",
    title: "Classic Cotton Crew Neck T-Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 1099,
    rating: 4.3,
   image: tshirt1,
       description:
      "A soft, breathable cotton tee cut for an easy everyday fit, available in wardrobe-staple colors.",
    stock: 40,
  },
  {
    id: "p25",
    title: "Zip-Up Fleece Hoodie",
    category: "Fashion",
    price: 1899,
    oldPrice: 2499,
    rating: 4.4,
    image: tshirt2,
    description:
      "A warm, brushed-fleece hoodie with a relaxed fit, built for layering through cooler months.",
    stock: 22,
  },
  {
    id: "p26",
    title: "Slim-Fit Denim Jacket",
    category: "Fashion",
    price: 2999,
    oldPrice: 3999,
    rating: 4.5,
    image: tshirt3,
    description:
      "A timeless denim jacket with a slim cut, finished with a lightly distressed wash.",
    stock: 15,
  },
  {
    id: "p27",
    title: "Embroidered Cotton Kurta",
    category: "Fashion",
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
    image: tshirt4,
    description:
      "A breathable cotton kurta with subtle embroidery detail, suited for both festive and everyday wear.",
    stock: 18,
  },
  {
    id: "p28",
    title: "A-Line Floral Summer Dress",
    category: "Fashion",
    price: 2199,
    oldPrice: 2899,
    rating: 4.4,
    image: tshirt5,
    description:
      "A flowy A-line dress in a lightweight floral print, cut for warm-weather comfort.",
    stock: 20,
  },
  {
    id: "p29",
    title: "Formal Slim-Fit Shirt",
    category: "Fashion",
    price: 1699,
    oldPrice: 2199,
    rating: 4.3,
    image: tshirt6,
    description:
      "A crisp, wrinkle-resistant shirt tailored for a slim fit, easy to dress up or down.",
    stock: 26,
  },
  {
    id: "p30",
    title: "Chino Shorts",
    category: "Fashion",
    price: 1199,
    oldPrice: 1599,
    rating: 4.2,
    image: tshirt7,
    description:
      "Lightweight cotton-blend shorts with a tailored finish, built for warm-weather versatility.",
    stock: 32,
  },
  {
    id: "p31",
    title: "Ethnic Printed Palazzo Set",
    category: "Fashion",
    price: 1999,
    oldPrice: 2599,
    rating: 4.5,
    image: tshirt8,
    description:
      "A flowy printed palazzo set with a relaxed fit, comfortable enough for all-day wear.",
    stock: 16,
  },
];

export default products;

export const categories = [
  { title: "Fashion", icon: "👕" },
  { title: "Electronics", icon: "📱" },
  { title: "Footwear", icon: "👟" },
  { title: "Beauty", icon: "💄" },
  { title: "Home", icon: "🏠" },
  { title: "Accessories", icon: "⌚" },
  { title: "Sports", icon: "🏀" },
];