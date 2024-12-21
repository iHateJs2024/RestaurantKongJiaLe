/// Insert Food Data Here (sections, items)
let foodData = [
  {
    section: {
      id: "SetMenuEksklusif",
      name: "Set Menu Eksklusif", // Name of the section
    },
    items: [ // Array of food items in this section
      {
        id: "M01", // Unique identifier for the food item
        name: "NASI LEMAK", // Food name
        price: 55, // Food price
        takeAwayPackaging: 1,
        desc: "", // Food description (can be added later)
        img: "Food preview images/set menu ekslusif 1st.webp", // Path to food image
      },
      {
        id: "M02",
        name: "PASTA SET",
        price: 68,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/set menu ekslusif 2nd.webp",
      }
    ]
  },
  {
    section: {
      id: "PastaAndMi",
      name: "Pasta & Mi", // Name of the section
    },
    items: [ // Add pasta and noodle items here
      {
        id: "M03",
        name: "TRUFFLE PUDDLE",
        price: 48,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/pasta & mi 1st.webp",
      },
      {
        id: "M04",
        name: "YUZU SEABASS",
        price: 48,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/pasta & mi 2nd.webp",
      }
    ]
  },
  {
    section: {
      id: "PencuciMulut",
      name: "Pencuci Mulut", // Name of the section
    }, 
    items: [ // Add dessert items here
      {
        id: "M05",
        name: "COKLAT GEBU",
        price: 20,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/Pencuci mulut 1st.webp",
      },
      {
        id: "M06",
        name: "KELADI BERKRIM",
        price: 16,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/Pencuci mulut 2nd.webp",
      }
    ]
  },
  {
    section: {
      id: "Minuman",
      name: "Minuman", // Name of the section
    },
    items: [ // Add drinks here
      {
        id: "M07",
        name: "GENMAICHA LATTE",
        price: 16,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/Minuman 1st.webp",
      },
      {
        id: "M08",
        name: "MATCHA LATTE KOTOR",
        price: 16,
        takeAwayPackaging: 1, 
        desc: "",
        img: "Food preview images/Minuman 2nd.webp",
      }
    ]
  }
];