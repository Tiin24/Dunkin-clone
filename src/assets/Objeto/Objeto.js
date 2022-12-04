const data = [
  {
    id: "1",
    name: "Bavarian Kreme",
    description: "Donut azucarada rellena de Bavarian Kreme ®. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/bavarian-kreme-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "2",
    name: "Boston Kreme",
    description:
      "Donut rellena de Bavarian Kreme® con cobertura de chocolate. Vegana 🌱",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Boston-Kreme.jpg",
    categoria: "Donuts",
  },
  {
    id: "3",
    name: "Boston Manjar",
    description: "Donut rellena de manjar con cobertura de chocolate.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Boston-Manjar-Dunkin-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "4",
    name: "Cake de Chocolate Glaseado",
    description: "Donut cake de chocolate glaseada.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Cake-Doble-Chocolate-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "5",
    name: "Chocolate Arcoiris",
    description:
      "Donut con cobertura de chocolate y topping de arcoíris. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Chocolate-Arcoiris-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "6",
    name: "Chocolate Frosted",
    description: "Con cobertura de chocolate. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Chocolate-Frosted-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "7",
    name: "Chocolate Marmolado",
    description:
      "Donut con cobertura de chocolate y diseño de vainilla. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/chocolate-marmolado-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "8",
    name: "Chocolate Kreme",
    description: "Donut azucarada rellena y decorada con chocolate kreme. 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/11/Chocolate-creme-Dunki-Chile-2.jpeg",
    categoria: "Donuts",
  },
  {
    id: "9",
    name: "Doble Boston Manjar",
    description:
      "Donut con doble relleno de manjar y cobertura de chocolate, decorado con cintas de chocolate.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/doble-boston-manjar-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "10",
    name: "Doble Frutilla",
    description:
      "Donut rellena con mermelada de frutilla, con cobertura de frutilla y diseño de flor con vainilla. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/doble-frutilla-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "11",
    name: "Frutilla Arcoiris",
    description:
      "Donut con cobertura de frutilla y topping de arcoíris. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Frutilla-Arcoiris-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "12",
    name: "Frambuesa Azucarada",
    description:
      "Donut azucarada rellena con mermelada de frambuesa. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Frambuesa-Azucarada-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "13",
    name: "Glaseada",
    description: "Donut glaseada. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Glaseada-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "14",
    name: "Frutilla Azucarada",
    description: "Donut azucarada rellena con mermelada de frutilla. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/Frutilla-azucarada-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "15",
    name: "Manzana Canela",
    description:
      "Donut rellena de manzana y canela, azucarada con azúcar canela. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Manzana-Canela-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "16",
    name: "Jelly de Frambuesa",
    description: "Donut azucarada rellena de jelly de frambuesa. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Jelly-de-Frambuesa-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "17",
    name: "Rollo de Canela",
    description: "Rollo de canela glaseado. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/rollo-canela-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "18",
    name: "Pie de Limón",
    description:
      "Donut rellena de crema de limón, con cobertura de vainilla y coco tostado. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/pie-de-limon-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "19",
    name: "Suspiro Limeño",
    description: "Donut rellena de manjar, azucarada con azúcar canela.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/08/suspiro-limeño-dunkin-chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "20",
    name: "Smile de Manjar",
    description:
      "Donut rellena de manjar, con cobertura de maple y sonrisa de chocolate.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Smile-de-Manjar-Dunki-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "21",
    name: "Vainilla Arcoiris",
    description:
      "Donut con cobertura de vainilla y topping de arcoíris. Vegana 🌱",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Vainilla-Arcoiris-Dunkin-Chile.jpg",
    categoria: "Donuts",
  },
  {
    id: "22",
    name: "Filtrado",
    description: "Café filtrado, granos de tostado oscuro, sabor intenso.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Filtrado.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "23",
    name: "Americano",
    description: "Café espresso y agua caliente.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Americano-dunki-chile.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "24",
    name: "Expreso",
    description: "Extracto de café fuerte e intenso.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Expresso.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "25",
    name: "Cappuccino",
    description:
      "1/3 Café espresso, 1/3 leche vaporizada y 1/3 espuma de leche.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Cappuccino.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "26",
    name: "Latte",
    description:
      "1/3 café espresso y 2/3 leche vaporizada, terminación de espuma de leche.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Latte.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "27",
    name: "Dunkalatte",
    description:
      "Nuestro Latte tradicional con una fina capa de espuma de leche, marmolado de saborizante y espolvoreado de azúcar/canela o cacao.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Dunkalatte.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "28",
    name: "Dunkaccino",
    description:
      "Nuestro Cappuccino tradicional con 1/3 de espuma de leche, marmolado de saborizante y espolvoreado de azúcar/canela o cacao.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Dunkalatte.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "29",
    name: "Macchiato",
    description:
      "Café espresso con carga extra, leche vaporizada y espuma de leche.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Macchiato-dunki-chile.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "30",
    name: "Hot Chocolate",
    description: "Chocolate caliente tradicional o blanco",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/HotChocolate.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "31",
    name: "Iced Coffee",
    description:
      "Bebida fría de café de grano tostado oscuro 100% arábico y Certificación Rainforest, de sabor tostado y robusto, es opcional adición de leche y sabor.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/11/IcedCoffee-dunkin-chile-2.jpeg",
    categoria: "Bebidas calientes",
  },
  {
    id: "32",
    name: "Te Cahi",
    description: "Blanco o negro.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Te-Chai-dunki-chile.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "33",
    name: "Te",
    description: "Blanco o negro.",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/Te-dunki-chile.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "34",
    name: "Matcha Latte",
    description: "Concentrado de Matcha con leche y espuma de leche",
    image: "https://dunkin.cl/wp-content/uploads/2022/04/HotChocolate.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "35",
    name: "Te Latte",
    description: "Infusión de Té (negro o verde) con leche.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Te-Latte-dunki-chile.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "36",
    name: "Box JOE",
    description: "Chocolate Caliente o Café Filtrado de 1.5 lt",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Box-JOE-dunki-chile.jpg",
    categoria: "Bebidas calientes",
  },
  {
    id: "37",
    name: "Iced Coffee",
    description:
      "Bebida fría de café de grano tostado oscuro 100% arábico y Certificación Rainforest, de sabor tostado y robusto, es opcional adición de leche y sabor.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/11/IcedCoffee-dunkin-chile-2.jpeg",
    categoria: "Bebidas frias",
  },
  {
    id: "38",
    name: "Iced Latte",
    description: "Café espresso y leche fría , servido sobre hielo.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Iced-Latte-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "39",
    name: "Iced Macchiatto",
    description: "Café espresso y leche fría , servido sobre hielo.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Iced-Macchiatto-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "40",
    name: "Iced Dunkalatte",
    description:
      "Nuestro signature ice latte con sabores dunkin’ (caramel, mocha y otros estacionales).",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Iced-Dunkalatte-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "41",
    name: "Frozen Dunkalatte",
    description:
      "Nuestro Frozen Latte tradicional, granizado con sabores Dunkin’(Caramel, Mocha y otros estacionales).",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Frozen-Dunkalatte-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "42",
    name: "Frozen Latte",
    description: "Nuestro Latte tradicional, hielo granizado y leche fría.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Frozen-Latte-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "43",
    name: "Iced Tea",
    description: "Té infusionado en frío, servido sobre hielo.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Iced-Tea-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "44",
    name: "Cold Brew",
    description:
      "Café Dark Roast filtrado en frío por 15 horas, sabor dulce e intenso, servido sobre hielo.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Coldbrew-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "45",
    name: "Iced Chai Latte",
    description:
      "Infusión fría de té Chai con leche, elaborada con distintos tipos de tés y especias.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Iced-Chai-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "46",
    name: "Refreshers",
    description:
      "Refrescante bebida fría en base a Té verde y frutas, con vitamina B+.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Refreshers-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "47",
    name: "Smothie",
    description: "Granizado elaborado con yogurt light y sabor a elección.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Smothie-Dunkin-Chile.jpg",
    categoria: "Bebidas frias",
  },
  {
    id: "48",
    name: "Coolata ®",
    description: "Granizado con sabores a elección.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/07/Coolata-Dunkin-Chile.png",
    categoria: "Bebidas frias",
  },
  {
    id: "49",
    name: "Iced Matcha Latte",
    description: "Concentrado de Matcha con leche, servido sobre hielo.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/07/Iced-Matcha-Dunkin-Chile.jpeg",
    categoria: "Bebidas frias",
  },
  {
    id: "50",
    name: "Frozen Matcha Latte",
    description: "Concentrado de Matcha, hielo granizado y leche fría.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/07/frozen-Matcha-Dunkin-Chile.jpeg",
    categoria: "Bebidas frias",
  },
  {
    id: "51",
    name: "Frozen Matcha Latte",
    description: "Concentrado de Matcha, hielo granizado y leche fría.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/07/Irish-creme-macchiato-Dunkin-Chile.jpeg",
    categoria: "Bebidas frias",
  },
  {
    id: "52",
    name: "Hot Jamón Queso, Pavo o Queso, o Vegetariano",
    description: "Palta, mix de hojas verde, tomate y queso.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Hot-Jamon-Queso-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "53",
    name: "Ensalada",
    description:
      "Pastrami, pavo o vegetariana con palta, tomate, mix de hojas verdes y mix de semillas.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/07/Ensalada-Dunkin-Chile.png",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "54",
    name: "Hot Pastrami",
    description: "Queso, mostaza y pepinillo.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Hot-Pastrami-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "55",
    name: "Hot Napolitano",
    description: "Jamón, queso, tomate y aceituna.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Hot-Napolitano-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "56",
    name: "Pavo",
    description: "Palta, mix de hojas verdes y tomate.",
    image: "https://dunkin.cl/wp-content/uploads/2022/07/Wrap-Dunkin-Chile.png",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "57",
    name: "Pastrami",
    description: "Palta, mix de hojas verdes y tomate.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Pastrami-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "58",
    name: "Pan con Palta",
    description: "Tostada de pan de masa madre con palta hass.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Pancon-Palta-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "59",
    name: "Donwich",
    description: "Jamón y queso derretido en donut glaseada caliente",
    image: "https://dunkin.cl/wp-content/uploads/2022/07/Donwich-Dunkin.png",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "60",
    name: "Mini Bagels",
    description: "Rellenos de queso crema, servidos calientes.",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Mini-Bagels-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "61",
    name: "Munchkins",
    description: "",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Munchkins-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
  {
    id: "62",
    name: "Muffin",
    description: "",
    image:
      "https://dunkin.cl/wp-content/uploads/2022/04/Muffin-Dunkin-Chile.jpg",
    categoria: "Sandwiches, Wraps & Ensaladas",
  },
];

export default data;
