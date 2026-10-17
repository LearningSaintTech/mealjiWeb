// Data extracted and curated from MealJi_Complete_Menu_English.pdf
// MEAL JI - The Kitchen | Simple Food. Great Mood.

export const mealJiMetadata = {
  brand: "MEAL JI - The Kitchen",
  tagline: "Simple Food. Great Mood.",
  subtitle: "Affordable North Indian homestyle food for offices, teams and everyday meals.",
  kitchenPromiseSummary: "Fresh food, prepared in three daily batches with disciplined hygiene and no previous-day cooked food.",
  edition: "September 2026",
  portionNotice: "All items served in one generous standard portion. No confusing half/full options.",
  pdfPath: "/MealJi_Complete_Menu_English.pdf"
};

export const subscriptionPlans = [
  {
    id: "gharji",
    name: "GharJi",
    tagline: "Everyday Homestyle Meal",
    description: "Light, healthy, non-greasy everyday lunch designed for high office productivity with zero afternoon slump.",
    perMealPrice: 129,
    monthlyPrice: 2499,
    mealsCount: 22,
    badge: "Office Essential",
    badgeColor: "bg-teal-700 text-teal-100",
    accentColor: "#0A252B",
    popular: false,
    items: [
      { text: "1 Dal or regular homestyle gravy from today's menu", highlight: true },
      { text: "1 Dry seasonal fresh vegetable (sabzi)" },
      { text: "Steamed basmati rice (standard portion)" },
      { text: "4 Fresh hot plain chapatis" }
    ],
    features: ["Zero heavy cream or excess oil", "Daily rotating menu", "Food-grade sealed packaging"]
  },
  {
    id: "khaasji",
    name: "KhaasJi",
    tagline: "A Little More Special",
    description: "Our most popular executive thali with premium curry choices, fragrant jeera rice, and refreshing accompaniments.",
    perMealPrice: 179,
    monthlyPrice: 3499,
    mealsCount: 22,
    badge: "Most Popular",
    badgeColor: "bg-[#F15A24] text-white",
    accentColor: "#F15A24",
    popular: true,
    items: [
      { text: "1 Premium veg or non-veg curry (Paneer / Chicken / Mushroom)", highlight: true },
      { text: "Aromatic Jeera rice" },
      { text: "4 Desi Ghee or Butter chapatis" },
      { text: "Chilled spiced raita" },
      { text: "Fresh garden salad & pickle" }
    ],
    features: ["Choice of Veg or Non-Veg daily", "Desi Ghee chapatis", "Complimentary salad & raita"]
  },
  {
    id: "daawatji",
    name: "DaawatJi",
    tagline: "Your Complete Choice Feast",
    description: "The ultimate celebration meal with full variety across 3 curries, biryani or butter rice, and a sweet dessert.",
    perMealPrice: 299,
    monthlyPrice: 5899,
    mealsCount: 22,
    badge: "Grand Feast",
    badgeColor: "bg-amber-600 text-amber-50",
    accentColor: "#D97706",
    popular: false,
    items: [
      { text: "Choose any 3 available curries (Veg, Non-Veg, or a mix)", highlight: true },
      { text: "Choose Butter Rice, Veg Biryani, or Non-Veg Dum Biryani", highlight: true },
      { text: "Fresh Ghee or Butter chapatis" },
      { text: "Raita and fresh salad" },
      { text: "1 Artisanal sweet dessert to end the feast" }
    ],
    features: ["Maximum variety & freedom", "Dum Biryani option included", "Sweet treat in every meal"]
  }
];

export const menuCategories = [
  { id: "all", label: "All Items", icon: "Sparkles" },
  { id: "plans", label: "Meal Plans", icon: "Calendar" },
  { id: "dal-gravy", label: "Dal & Gravies", icon: "Soup" },
  { id: "sabzi", label: "Dry Sabzis", icon: "Leaf" },
  { id: "biryani", label: "Dum Biryanis", icon: "Flame" },
  { id: "non-veg", label: "Homestyle Non-Veg", icon: "Utensils" },
  { id: "breads", label: "Rotis & Parathas", icon: "Wheat" },
  { id: "comfort", label: "Comfort Combos", icon: "Heart" },
  { id: "rice", label: "Rice & Khichdi", icon: "Bowl" }
];

export const menuItems = [
  // --- Dal, Kadhi & Homestyle Gravy ---
  {
    id: "dal-arhar-tadka",
    name: "Arhar Dal Tadka",
    category: "dal-gravy",
    type: "veg",
    price: 110,
    tags: ["Signature", "Desi Ghee"],
    portion: "Standard 300ml Portion",
    description: "Golden split pigeon peas tempered with cumin, charred garlic, ginger, and desi ghee tadka."
  },
  {
    id: "dal-punjabi-kadhi",
    name: "Punjabi Kadhi Pakoda",
    category: "dal-gravy",
    type: "veg",
    price: 120,
    tags: ["Chef Special", "Tangy"],
    portion: "Standard Portion",
    description: "Slow-simmered spiced buttermilk & besan kadhi with soft, melt-in-the-mouth onion pakodas."
  },
  {
    id: "dal-rajma-masala",
    name: "Rajma Masala",
    category: "dal-gravy",
    type: "veg",
    price: 120,
    tags: ["North Indian Favorite"],
    portion: "Standard Portion",
    description: "Authentic Jammu-style red kidney beans cooked tender in rich caramelized onion-tomato gravy."
  },
  {
    id: "dal-palak-corn",
    name: "Palak Corn Curry",
    category: "dal-gravy",
    type: "veg",
    price: 150,
    tags: ["Healthy Greens"],
    portion: "Standard Portion",
    description: "Velvety farm spinach purée tossed with sweet corn kernels and subtle warming spices."
  },
  {
    id: "dal-matar-mushroom",
    name: "Matar Mushroom Curry",
    category: "dal-gravy",
    type: "veg",
    price: 170,
    tags: ["Premium Veg"],
    portion: "Standard Portion",
    description: "Fresh button mushrooms and sweet green peas simmered in a rich tomato-cashew onion gravy."
  },
  {
    id: "dal-lauki-kofta",
    name: "Lauki Kofta Curry",
    category: "dal-gravy",
    type: "veg",
    price: 120,
    tags: ["Homestyle Classic"],
    portion: "Standard Portion",
    description: "Soft spiced bottle-gourd dumplings simmered gently in a fragrant homestyle gravy."
  },
  {
    id: "dal-chana-curry",
    name: "Safed Chana Curry (Chole)",
    category: "dal-gravy",
    type: "veg",
    price: 120,
    tags: ["Protein Rich"],
    portion: "Standard Portion",
    description: "Pindi-style white chickpeas stewed with aromatic tea-decoction spices and roasted cumin."
  },

  // --- Dry & Seasonal Sabzis ---
  {
    id: "sabzi-bhindi-masala",
    name: "Bhindi Masala / Bharwa",
    category: "sabzi",
    type: "veg",
    price: 120,
    tags: ["Crisp & Non-Sticky"],
    portion: "Standard Portion",
    description: "Tender farm okra dry-roasted with onions, tangy amchur, and freshly roasted cumin."
  },
  {
    id: "sabzi-aloo-gobhi",
    name: "Aloo Gobhi Adraki",
    category: "sabzi",
    type: "veg",
    price: 110,
    tags: ["Everyday Classic"],
    portion: "Standard Portion",
    description: "Fresh cauliflower florets and potatoes stir-fried with julienned ginger, green chilies, and fresh coriander."
  },
  {
    id: "sabzi-baingan-bharta",
    name: "Dhungar Baingan Bharta",
    category: "sabzi",
    type: "veg",
    price: 120,
    tags: ["Charcoal Smoked"],
    portion: "Standard Portion",
    description: "Open flame-roasted eggplant mashed and tempered with garlic, juicy tomatoes, and green peas."
  },
  {
    id: "sabzi-besan-gatta",
    name: "Besan Gatta Sabzi",
    category: "sabzi",
    type: "veg",
    price: 120,
    tags: ["Rajasthani Heritage"],
    portion: "Standard Portion",
    description: "Steamed gram flour dumplings simmered in a spiced curd and fenugreek gravy."
  },
  {
    id: "sabzi-mix-veg",
    name: "Homestyle Mix Vegetable",
    category: "sabzi",
    type: "veg",
    price: 120,
    tags: ["Fresh Seasonal"],
    portion: "Standard Portion",
    description: "Medley of seasonal carrots, french beans, green peas, and paneer cubes lightly spiced."
  },
  {
    id: "sabzi-kathal-masala",
    name: "Kathal Masala (Jackfruit)",
    category: "sabzi",
    type: "veg",
    price: 150,
    tags: ["Chef Special", "Meat-like Texture"],
    portion: "Standard Portion",
    description: "Tender raw jackfruit chunks braised in whole spices and caramelized onions."
  },

  // --- Homestyle Non-Veg ---
  {
    id: "nv-chicken-curry",
    name: "Tariwali Homestyle Chicken Curry",
    category: "non-veg",
    type: "non-veg",
    price: 180,
    tags: ["Bestseller", "Sunday Special"],
    portion: "Generous Standard Cut Portions",
    description: "Rustic, light North Indian chicken curry simmered slowly on the bone with whole cardamom and cloves."
  },
  {
    id: "nv-egg-curry",
    name: "Dhaba Style Egg Curry",
    category: "non-veg",
    type: "egg",
    price: 150,
    tags: ["Protein Power"],
    portion: "2 Spiced Eggs + Gravy",
    description: "Golden pan-seared hard-boiled eggs cooked in a thick spiced onion-tomato homestyle gravy."
  },
  {
    id: "nv-chicken-keema-matar",
    name: "Chicken Keema Matar",
    category: "non-veg",
    type: "non-veg",
    price: 180,
    tags: ["Rich & Savory"],
    portion: "Standard Portion",
    description: "Minced chicken cooked slow with sweet green peas, crushed peppercorns, and fresh mint."
  },
  {
    id: "nv-light-chicken-masala",
    name: "Light Office Chicken Masala",
    category: "non-veg",
    type: "non-veg",
    price: 180,
    tags: ["Low Oil", "Light Gravy"],
    portion: "Standard Portion",
    description: "Gentle on the stomach office lunch preparation with light whole spices and no heavy cream."
  },

  // --- Signature Biryanis ---
  {
    id: "biryani-hyd-chicken",
    name: "Hyderabadi Chicken Dum Biryani",
    category: "biryani",
    type: "non-veg",
    price: 120,
    tags: ["Aggressive Launch Price", "Aged Basmati"],
    portion: "Generous Standard Meal Box",
    description: "Slow dum-cooked with saffron-infused long grain basmati, marinated tender chicken, and caramelized birista."
  },
  {
    id: "biryani-lucknowi-chicken",
    name: "Lucknowi Awadhi Chicken Biryani",
    category: "biryani",
    type: "non-veg",
    price: 120,
    tags: ["Royal Aromatics"],
    portion: "Standard Portion",
    description: "Delicate and fragrant Awadhi style biryani flavored with kewra water, rose petals, and tender chicken."
  },
  {
    id: "biryani-kolkata-chicken",
    name: "Kolkata Style Chicken Biryani",
    category: "biryani",
    type: "non-veg",
    price: 120,
    tags: ["With Golden Potato"],
    portion: "Standard Portion",
    description: "Lightly spiced fragrant rice served with tender chicken and that legendary melt-in-mouth spiced potato."
  },
  {
    id: "biryani-paneer-tikka",
    name: "Paneer Tikka Dum Biryani",
    category: "biryani",
    type: "veg",
    price: 120,
    tags: ["Veg Favorite"],
    portion: "Standard Portion",
    description: "Smoky tandoori-spiced paneer cubes layered with aromatic basmati rice, mint, and fried onions."
  },
  {
    id: "biryani-veg-handi",
    name: "Subz Handi Dum Biryani",
    category: "biryani",
    type: "veg",
    price: 100,
    tags: ["Budget Friendly"],
    portion: "Standard Portion",
    description: "Garden fresh carrots, beans, peas, and paneer steamed under sealed dum with whole spices."
  },
  {
    id: "biryani-double-egg",
    name: "Double-Egg Dum Biryani",
    category: "biryani",
    type: "egg",
    price: 120,
    tags: ["High Protein"],
    portion: "2 Spiced Eggs + Dum Rice",
    description: "Fragrant biryani rice layered with masala-roasted boiled eggs and mint coriander leaves."
  },
  {
    id: "biryani-classic-mutton",
    name: "Classic Mutton Dum Biryani",
    category: "biryani",
    type: "non-veg",
    price: 180,
    tags: ["Premium Cuts", "Real Meat Weight"],
    portion: "Standard Portion (₹180 quality protected)",
    description: "Succulent cuts of fresh tender goat meat slow-cooked in dum seal to preserve pure rich juices."
  },
  {
    id: "biryani-coastal-prawn",
    name: "Coastal Prawn / Fish Biryani",
    category: "biryani",
    type: "non-veg",
    price: 180,
    tags: ["Seafood Special"],
    portion: "Standard Portion",
    description: "Fresh coastal prawns / fish pieces infused with curry leaves, cracked pepper, and basmati rice."
  },

  // --- Indian Breads & Parathas ---
  {
    id: "bread-plain-chapati",
    name: "100% Whole Wheat Chapati",
    category: "breads",
    type: "veg",
    price: 10,
    tags: ["Fresh Puffed"],
    portion: "Per Piece",
    description: "Freshly made on tawa, soft whole wheat phulka with zero maida."
  },
  {
    id: "bread-ghee-chapati",
    name: "Desi Ghee Chapati",
    category: "breads",
    type: "veg",
    price: 15,
    tags: ["Pure Ghee"],
    portion: "Per Piece",
    description: "Soft whole wheat phulka generously brushed with fragrant pure desi ghee."
  },
  {
    id: "bread-missi-roti",
    name: "Missi Roti with Ajwain",
    category: "breads",
    type: "veg",
    price: 25,
    tags: ["Besan & Wheat Blend"],
    portion: "Per Piece",
    description: "Nutritious spiced gram-flour flatbread with crushed coriander seeds, ajwain, and kasuri methi."
  },
  {
    id: "bread-aloo-paratha",
    name: "Stuffed Aloo Paratha",
    category: "breads",
    type: "veg",
    price: 60,
    tags: ["Tawa Toasted"],
    portion: "Per Serving",
    description: "Golden griddled paratha generously stuffed with spiced potato mash, coriander, and green chilies."
  },
  {
    id: "bread-paneer-paratha",
    name: "Rich Paneer Paratha",
    category: "breads",
    type: "veg",
    price: 80,
    tags: ["Fresh Grated Paneer"],
    portion: "Per Serving",
    description: "Stuffed to the edges with freshly grated malai paneer, crushed cumin, and herbs."
  },
  {
    id: "bread-sattu-paratha",
    name: "Bihari Sattu Paratha",
    category: "breads",
    type: "veg",
    price: 70,
    tags: ["High Fiber"],
    portion: "Per Serving",
    description: "Traditional roasted Bengal gram filling spiced with mustard oil, kalonji, and mango pickle zest."
  },

  // --- Rice & Khichdi ---
  {
    id: "rice-steamed",
    name: "Steamed Long-Grain Basmati Rice",
    category: "rice",
    type: "veg",
    price: 50,
    tags: ["Fluffy & Light"],
    portion: "Standard Portion",
    description: "Gently steamed aged fragrant basmati rice grains, perfectly separated."
  },
  {
    id: "rice-jeera",
    name: "Desi Ghee Jeera Rice",
    category: "rice",
    type: "veg",
    price: 70,
    tags: ["Aromatic"],
    portion: "Standard Portion",
    description: "Basmati rice tempered in pure desi ghee with roasted cumin seeds and fresh coriander."
  },
  {
    id: "rice-khichdi-moong",
    name: "Homestyle Moong Dal Khichdi",
    category: "rice",
    type: "veg",
    price: 90,
    tags: ["Ultimate Comfort"],
    portion: "Standard Portion",
    description: "Light, soothing blend of yellow moong dal and rice simmered with mild turmeric and cumin."
  },
  {
    id: "rice-butter-rice",
    name: "Rich Butter Rice",
    category: "rice",
    type: "veg",
    price: 80,
    tags: ["Silky Smooth"],
    portion: "Standard Portion",
    description: "Warm fragrant basmati rice tossed gently in premium salted butter and crackled bay leaf."
  },

  // --- Occasional Comfort Meals ---
  {
    id: "comfort-rajma-chawal",
    name: "Rajma Chawal Comfort Combo",
    category: "comfort",
    type: "veg",
    price: 120,
    tags: ["All-Time Favorite"],
    portion: "Steamed Rice + Spiced Rajma + Salad",
    description: "The quintessential North Indian hug: steaming hot basmati rice with homestyle rajma and pickled onions."
  },
  {
    id: "comfort-kadhi-chawal",
    name: "Kadhi Chawal with Pakoda",
    category: "comfort",
    type: "veg",
    price: 110,
    tags: ["Childhood Nostalgia"],
    portion: "Steamed Rice + Kadhi Pakoda",
    description: "Sour-and-spiced kadhi with crisp pakodas poured over fluffy steamed rice."
  },
  {
    id: "comfort-chole-chawal",
    name: "Amritsari Chole Chawal",
    category: "comfort",
    type: "veg",
    price: 120,
    tags: ["Punjabi Spices"],
    portion: "Steamed Rice + Rich Chole",
    description: "Dark, spiced chickpeas loaded with ginger juliennes served over hot steamed rice."
  },
  {
    id: "comfort-dal-chawal-aloo-fry",
    name: "Dal Chawal with Aloo Fry Combo",
    category: "comfort",
    type: "veg",
    price: 130,
    tags: ["Pure Homestyle Joy"],
    portion: "Arhar Dal + Rice + Crispy Aloo Fry",
    description: "Yellow tadka dal, fluffy rice, accompanied by crispy spiced pan-fried potatoes."
  },
  {
    id: "comfort-khichdi-thali",
    name: "Comfort Khichdi Mahathali",
    category: "comfort",
    type: "veg",
    price: 130,
    tags: ["Complete Healing Meal"],
    portion: "Khichdi + Fresh Dahi + Papad + Pickle",
    description: "Warm ghee-topped khichdi served with chilled curd, roasted papad, and spicy mango pickle."
  },
  {
    id: "comfort-dal-baati",
    name: "Dal Baati Churma",
    category: "comfort",
    type: "veg",
    price: 150,
    tags: ["Royal Rajasthani"],
    portion: "2 Baatis + Panchmel Dal + Sweet Churma",
    description: "Authentic golden baked whole wheat dumplings dipped in desi ghee, panchmel dal, and jaggery churma."
  },
  {
    id: "comfort-chole-puri-halwa",
    name: "Chole Puri with Suji Halwa",
    category: "comfort",
    type: "veg",
    price: 140,
    tags: ["Festive Combo"],
    portion: "4 Fluffy Puris + Chole + Halwa",
    description: "Piping hot fried puris paired with spicy chickpea curry and sweet cardamom suji halwa."
  }
];

export const kitchenPromises = [
  {
    title: "3 Fresh Batches Daily",
    subtitle: "Breakfast, Lunch & Dinner",
    description: "Food is cooked fresh three times every day in dedicated time windows. Food is never mass-stored or kept sitting on warmers.",
    icon: "Clock",
    accent: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Zero Day-Old Food",
    subtitle: "Absolute Kitchen Rule",
    description: "Previous-day cooked food is strictly NEVER mixed into a fresh batch or re-served. Whatever remains is discarded safely.",
    icon: "ShieldCheck",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "100% Filtered RO Water",
    subtitle: "Cooking & Ingredient Wash",
    description: "Only certified filtered water is used for boiling dals, preparing gravies, washing raw vegetables, and cooking grains.",
    icon: "Droplets",
    accent: "text-sky-500",
    bg: "bg-sky-500/10"
  },
  {
    title: "Strict Segregated Prep",
    subtitle: "Veg & Non-Veg Boundaries",
    description: "Separate knives, cutting boards, pans, and storage units are maintained to guarantee 100% pure vegetarian integrity.",
    icon: "Utensils",
    accent: "text-emerald-600",
    bg: "bg-emerald-600/10"
  },
  {
    title: "Safe Food-Grade Packaging",
    subtitle: "Spill-Proof & Heat Retaining",
    description: "Every single order is packaged in clean, food-grade, hot-retaining sealed containers with tamper-evident seals.",
    icon: "Sparkles",
    accent: "text-[#F15A24]",
    bg: "bg-[#F15A24]/10"
  },
  {
    title: "Disciplined Staff Hygiene",
    subtitle: "Sanitized After Every Service",
    description: "Cooks wear hair-covers, clean uniforms, and gloves. Worktops, utensils, and equipment are thoroughly sanitized after every service.",
    icon: "ChefHat",
    accent: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

export const orderingNotes = [
  {
    title: "Standard Portion Policy",
    content: "All curry, sabzi, rice, biryani, and comfort meal prices are for one standard portion. There are no misleading half/full options — you get a filling, wholesome meal."
  },
  {
    title: "Introductory Launch Pricing",
    content: "Prices shown are recommended introductory rates for offices and teams (September 2026). Special customized corporate team billing available."
  },
  {
    title: "Daily Seasonal Freshness",
    content: "Our daily vegetable selection changes based on the morning market supply to guarantee true freshness and seasonal nutrition."
  },
  {
    title: "Real Meat Integrity",
    content: "Mutton and seafood biryanis are priced at ₹180 to protect genuine protein portion weight and premium food quality."
  }
];
