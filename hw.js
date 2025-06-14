const db = require("mongoose");

db.connect(
  "mongodb+srv://assafaz09:passforsv@cluster0.abyvdvl.mongodb.net/recipe"
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const RecipeSchema = new db.Schema({
  name: String,
  calories: Number,
  ingredients: [String],
  coockingTime: Number,
  instructions: String,
  imageUrl: String,
  isVegan: Boolean,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rating: Number,
});

const Recipe = db.model("Recipe", RecipeSchema);
const recipe = new Recipe({
  name: "Vegan Pasta",
  calories: 400,
  ingredients: ["Pasta", "Tomato Sauce", "Garlic", "Olive Oil"],
  coockingTime: 30,
  instructions: "Boil pasta, prepare sauce, mix together.",
  imageUrl: "https://example.com/vegan-pasta.jpg",
  isVegan: true,
  category: "Main Course",
  createdAt: new Date("01-01-2011"),
  rating: 4.5,
});
recipe
  .save()
  .then(() => {
    console.log("Recipe saved successfully");
  })
  .catch((err) => {
    console.error("Error saving recipe:", err);
  });

const recipe2 = new Recipe({
  name: "tometo Salad",
  calories: 200,
  ingredients: ["Tomatoes", "Cucumber", "Onion", "Olive Oil"],
  coockingTime: 15,
  instructions: "Chop ingredients, mix together, drizzle with olive oil.",
  imageUrl: "https://example.com/tomato-salad.jpg",
  isVegan: true,
  category: "Salad",
  createdAt: new Date("01-02-2012"),
});
recipe2
  .save()
  .then(() => {
    console.log("Recipe2 saved successfully");
  })
  .catch((err) => {
    console.error("Error saving recipe2:", err);
  });

const recipe3 = new Recipe({
  name: "Chicken Curry",
  calories: 600,
  ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onion"],
  coockingTime: 45,
  instructions: "Cook chicken, add spices, simmer with coconut milk.",
  imageUrl: "https://example.com/chicken-curry.jpg",
  isVegan: false,
  category: "Main Course",
  createdAt: new Date("01-03-2013"),
  rating: 8.0,
});
recipe3
  .save()
  .then(() => {
    console.log("Recipe3 saved successfully");
  })
  .catch((err) => {
    console.error("Error saving recipe3:", err);
  });
