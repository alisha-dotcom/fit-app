// Food Database
const foodDatabase = [
    { id: 1, name: 'Apple', calories: 52, protein: 0.3, carbs: 14, fats: 0.2, sugar: 10, fiber: 2.4, vitamins: 15, unit: '100g' },
    { id: 2, name: 'Banana', calories: 89, protein: 1.1, carbs: 23, fats: 0.3, sugar: 12, fiber: 2.6, vitamins: 20, unit: '100g' },
    { id: 3, name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fats: 3.6, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 4, name: 'Salmon', calories: 208, protein: 20, carbs: 0, fats: 13, sugar: 0, fiber: 0, vitamins: 30, unit: '100g' },
    { id: 5, name: 'Brown Rice', calories: 111, protein: 2.6, carbs: 23, fats: 0.9, sugar: 0.4, fiber: 1.8, vitamins: 5, unit: '100g' },
    { id: 6, name: 'Broccoli', calories: 34, protein: 2.8, carbs: 7, fats: 0.4, sugar: 1.7, fiber: 2.6, vitamins: 45, unit: '100g' },
    { id: 7, name: 'Egg', calories: 155, protein: 13, carbs: 1.1, fats: 11, sugar: 1.1, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 8, name: 'Almonds', calories: 579, protein: 21, carbs: 22, fats: 50, sugar: 4.4, fiber: 12.5, vitamins: 25, unit: '100g' },
    { id: 9, name: 'Oatmeal', calories: 68, protein: 2.4, carbs: 12, fats: 1.4, sugar: 0.5, fiber: 1.7, vitamins: 10, unit: '100g' },
    { id: 10, name: 'Greek Yogurt', calories: 59, protein: 10, carbs: 3.6, fats: 0.4, sugar: 3.2, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 11, name: 'Avocado', calories: 160, protein: 2, carbs: 9, fats: 15, sugar: 0.7, fiber: 7, vitamins: 25, unit: '100g' },
    { id: 12, name: 'Sweet Potato', calories: 86, protein: 1.6, carbs: 20, fats: 0.1, sugar: 4.2, fiber: 3, vitamins: 50, unit: '100g' },
    { id: 13, name: 'Spinach', calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, sugar: 0.4, fiber: 2.2, vitamins: 60, unit: '100g' },
    { id: 14, name: 'Quinoa', calories: 120, protein: 4.4, carbs: 21, fats: 1.9, sugar: 0, fiber: 2.8, vitamins: 10, unit: '100g' },
    { id: 15, name: 'Peanut Butter', calories: 588, protein: 25, carbs: 20, fats: 50, sugar: 9, fiber: 6, vitamins: 15, unit: '100g' },
    { id: 16, name: 'Milk (Whole)', calories: 61, protein: 3.2, carbs: 4.8, fats: 3.3, sugar: 5, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 17, name: 'Pasta (Cooked)', calories: 131, protein: 5, carbs: 25, fats: 1.1, sugar: 0.6, fiber: 1.2, vitamins: 2, unit: '100g' },
    { id: 18, name: 'Beef Steak', calories: 271, protein: 25, carbs: 0, fats: 19, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 19, name: 'Blueberries', calories: 57, protein: 0.7, carbs: 14, fats: 0.3, sugar: 10, fiber: 2.4, vitamins: 25, unit: '100g' },
    { id: 20, name: 'Olive Oil', calories: 884, protein: 0, carbs: 0, fats: 100, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 21, name: 'Lentils (Cooked)', calories: 116, protein: 9, carbs: 20, fats: 0.4, sugar: 1.8, fiber: 7.9, vitamins: 10, unit: '100g' },
    { id: 22, name: 'Whey Protein Powder', calories: 390, protein: 75, carbs: 8, fats: 6, sugar: 4, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 23, name: 'Tofu (Firm)', calories: 83, protein: 10, carbs: 2, fats: 5, sugar: 0.5, fiber: 1, vitamins: 15, unit: '100g' },
    { id: 24, name: 'Turkey Breast', calories: 135, protein: 30, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 25, name: 'Cottage Cheese', calories: 98, protein: 11, carbs: 3.4, fats: 4.3, sugar: 2.7, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 26, name: 'Chickpeas (Canned)', calories: 164, protein: 8.9, carbs: 27, fats: 2.6, sugar: 4.8, fiber: 7.6, vitamins: 15, unit: '100g' },
    { id: 27, name: 'Hummus', calories: 166, protein: 8, carbs: 14, fats: 10, sugar: 0.3, fiber: 6, vitamins: 10, unit: '100g' },
    { id: 28, name: 'Whole Wheat Bread', calories: 247, protein: 13, carbs: 41, fats: 3.4, sugar: 6, fiber: 7, vitamins: 20, unit: '100g' },
    { id: 29, name: 'Almond Milk (Unsweetened)', calories: 15, protein: 0.6, carbs: 0.3, fats: 1.2, sugar: 0, fiber: 0.3, vitamins: 25, unit: '100g' },
    { id: 30, name: 'Mixed Nuts', calories: 607, protein: 20, carbs: 21, fats: 54, sugar: 4, fiber: 7, vitamins: 15, unit: '100g' },
    { id: 31, name: 'Tuna (Canned in Water)', calories: 116, protein: 26, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 32, name: 'Protein Bar', calories: 380, protein: 30, carbs: 40, fats: 12, sugar: 5, fiber: 10, vitamins: 30, unit: '100g' },
    { id: 33, name: 'Chia Seeds', calories: 486, protein: 17, carbs: 42, fats: 31, sugar: 0.8, fiber: 34, vitamins: 20, unit: '100g' },
    { id: 34, name: 'Kale', calories: 49, protein: 4.3, carbs: 9, fats: 0.9, sugar: 2.3, fiber: 3.6, vitamins: 300, unit: '100g' },
    { id: 35, name: 'Strawberries', calories: 32, protein: 0.7, carbs: 7.7, fats: 0.3, sugar: 4.9, fiber: 2, vitamins: 60, unit: '100g' },
    { id: 36, name: 'Cashews', calories: 553, protein: 18, carbs: 30, fats: 44, sugar: 6, fiber: 3.3, vitamins: 10, unit: '100g' },
    { id: 37, name: 'Beef Jerky', calories: 410, protein: 33, carbs: 11, fats: 25, sugar: 9, fiber: 1.8, vitamins: 5, unit: '100g' },
    { id: 38, name: 'Asparagus', calories: 20, protein: 2.2, carbs: 3.9, fats: 0.1, sugar: 1.9, fiber: 2.1, vitamins: 20, unit: '100g' },
    { id: 39, name: 'Walnuts', calories: 654, protein: 15, carbs: 14, fats: 65, sugar: 2.6, fiber: 6.7, vitamins: 15, unit: '100g' },
    { id: 40, name: 'Greek Salad', calories: 120, protein: 4, carbs: 6, fats: 9, sugar: 3, fiber: 2, vitamins: 25, unit: '100g' },
    { id: 41, name: 'Shrimp (Cooked)', calories: 99, protein: 24, carbs: 0.2, fats: 0.3, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 42, name: 'Cod Fish', calories: 82, protein: 18, carbs: 0, fats: 0.7, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 43, name: 'Ground Beef (90% Lean)', calories: 176, protein: 20, carbs: 0, fats: 10, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 44, name: 'Lamb Chop', calories: 294, protein: 25, carbs: 0, fats: 21, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 45, name: 'Pork Tenderloin', calories: 143, protein: 26, carbs: 0, fats: 3.5, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 46, name: 'Cauliflower', calories: 25, protein: 1.9, carbs: 5, fats: 0.3, sugar: 1.9, fiber: 2, vitamins: 80, unit: '100g' },
    { id: 47, name: 'Zucchini', calories: 17, protein: 1.2, carbs: 3.1, fats: 0.3, sugar: 2.5, fiber: 1, vitamins: 30, unit: '100g' },
    { id: 48, name: 'Mushrooms (White)', calories: 22, protein: 3.1, carbs: 3.3, fats: 0.3, sugar: 2, fiber: 1, vitamins: 15, unit: '100g' },
    { id: 49, name: 'Bell Pepper (Red)', calories: 31, protein: 1, carbs: 6, fats: 0.3, sugar: 4.2, fiber: 2.1, vitamins: 200, unit: '100g' },
    { id: 50, name: 'Cucumber', calories: 15, protein: 0.7, carbs: 3.6, fats: 0.1, sugar: 1.7, fiber: 0.5, vitamins: 10, unit: '100g' },
    { id: 51, name: 'Orange', calories: 47, protein: 0.9, carbs: 12, fats: 0.1, sugar: 9, fiber: 2.4, vitamins: 90, unit: '100g' },
    { id: 52, name: 'Mango', calories: 60, protein: 0.8, carbs: 15, fats: 0.4, sugar: 14, fiber: 1.6, vitamins: 60, unit: '100g' },
    { id: 53, name: 'Grapes', calories: 69, protein: 0.7, carbs: 18, fats: 0.2, sugar: 16, fiber: 0.9, vitamins: 10, unit: '100g' },
    { id: 54, name: 'Watermelon', calories: 30, protein: 0.6, carbs: 7.6, fats: 0.2, sugar: 6, fiber: 0.4, vitamins: 15, unit: '100g' },
    { id: 55, name: 'Kiwi', calories: 61, protein: 1.1, carbs: 15, fats: 0.5, sugar: 9, fiber: 3, vitamins: 150, unit: '100g' },
    { id: 56, name: 'Soy Milk (Unsweetened)', calories: 33, protein: 2.8, carbs: 1.8, fats: 1.6, sugar: 0.4, fiber: 0.5, vitamins: 20, unit: '100g' },
    { id: 57, name: 'Cheddar Cheese', calories: 403, protein: 25, carbs: 1.3, fats: 33, sugar: 0.5, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 58, name: 'Parmesan Cheese', calories: 431, protein: 38, carbs: 4.1, fats: 29, sugar: 0.8, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 59, name: 'Feta Cheese', calories: 264, protein: 14, carbs: 4.1, fats: 21, sugar: 4.1, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 60, name: 'Popcorn (Air-Popped)', calories: 387, protein: 13, carbs: 78, fats: 5, sugar: 0.9, fiber: 15, vitamins: 5, unit: '100g' },
    { id: 61, name: 'Dark Chocolate (70%)', calories: 598, protein: 8, carbs: 46, fats: 43, sugar: 24, fiber: 11, vitamins: 10, unit: '100g' },
    { id: 62, name: 'Pistachios', calories: 562, protein: 20, carbs: 28, fats: 45, sugar: 7.7, fiber: 10, vitamins: 20, unit: '100g' },
    { id: 63, name: 'Sunflower Seeds', calories: 584, protein: 21, carbs: 20, fats: 51, sugar: 2.6, fiber: 8.6, vitamins: 30, unit: '100g' },
    { id: 64, name: 'Bagel (Plain)', calories: 250, protein: 10, carbs: 49, fats: 1.5, sugar: 6, fiber: 2.3, vitamins: 5, unit: '100g' },
    { id: 65, name: 'Couscous (Cooked)', calories: 112, protein: 3.8, carbs: 23, fats: 0.2, sugar: 0.1, fiber: 1.4, vitamins: 2, unit: '100g' },
    { id: 66, name: 'Tortilla (Corn)', calories: 218, protein: 6, carbs: 45, fats: 2.8, sugar: 0.9, fiber: 6, vitamins: 5, unit: '100g' },
    { id: 67, name: 'Rice Cakes', calories: 387, protein: 8, carbs: 82, fats: 2.8, sugar: 0.8, fiber: 4, vitamins: 2, unit: '100g' },
    { id: 68, name: 'Black Beans (Cooked)', calories: 132, protein: 8.9, carbs: 24, fats: 0.5, sugar: 0.3, fiber: 8.7, vitamins: 10, unit: '100g' },
    { id: 69, name: 'Green Beans', calories: 31, protein: 1.8, carbs: 7, fats: 0.2, sugar: 3.3, fiber: 2.7, vitamins: 25, unit: '100g' },
    { id: 70, name: 'Honey', calories: 304, protein: 0.3, carbs: 82, fats: 0, sugar: 82, fiber: 0, vitamins: 2, unit: '100g' },
    // SEAFOOD EXPANSION
    { id: 71, name: 'Lobster (Tail)', calories: 98, protein: 20, carbs: 0, fats: 0.6, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 72, name: 'Crab (King)', calories: 97, protein: 19, carbs: 0, fats: 1.5, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 73, name: 'Scallops', calories: 111, protein: 21, carbs: 5, fats: 0.8, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 74, name: 'Mussels (Steamed)', calories: 172, protein: 24, carbs: 7, fats: 4.5, sugar: 0, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 75, name: 'Clams', calories: 148, protein: 26, carbs: 5, fats: 2, sugar: 0, fiber: 0, vitamins: 18, unit: '100g' },
    { id: 76, name: 'Oysters (Raw)', calories: 68, protein: 7, carbs: 4, fats: 2.5, sugar: 0, fiber: 0, vitamins: 30, unit: '100g' },
    { id: 77, name: 'Squid (Calamari)', calories: 92, protein: 16, carbs: 3, fats: 1.4, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 78, name: 'Octopus', calories: 164, protein: 30, carbs: 4, fats: 2, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 79, name: 'Seaweed (Nori)', calories: 35, protein: 6, carbs: 5, fats: 0.3, sugar: 0, fiber: 0.5, vitamins: 50, unit: '100g' },
    { id: 80, name: 'Tuna (Bluefin)', calories: 144, protein: 23, carbs: 0, fats: 4.9, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 81, name: 'Salmon (Atlantic)', calories: 208, protein: 20, carbs: 0, fats: 13, sugar: 0, fiber: 0, vitamins: 25, unit: '100g' },
    { id: 82, name: 'Trout (Rainbow)', calories: 141, protein: 20, carbs: 0, fats: 6.2, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 83, name: 'Mackerel', calories: 205, protein: 19, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 84, name: 'Sardines (Oil Canned)', calories: 208, protein: 25, carbs: 0, fats: 11, sugar: 0, fiber: 0, vitamins: 40, unit: '100g' },
    { id: 85, name: 'Anchovies', calories: 131, protein: 20, carbs: 0, fats: 4.8, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 86, name: 'Sea Bass', calories: 124, protein: 24, carbs: 0, fats: 2.3, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 87, name: 'Red Snapper', calories: 128, protein: 26, carbs: 0, fats: 1.7, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 88, name: 'Halibut', calories: 111, protein: 23, carbs: 0, fats: 1.6, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 89, name: 'Tilapia', calories: 128, protein: 26, carbs: 0, fats: 2.7, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 90, name: 'Swordfish', calories: 172, protein: 24, carbs: 0, fats: 8, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 91, name: 'Eel (Unagi)', calories: 236, protein: 18, carbs: 0, fats: 18, sugar: 0, fiber: 0, vitamins: 50, unit: '100g' },
    { id: 92, name: 'Catfish', calories: 105, protein: 18, carbs: 0, fats: 2.9, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 93, name: 'Caviar (Sturgeon)', calories: 264, protein: 25, carbs: 4, fats: 18, sugar: 0, fiber: 0, vitamins: 100, unit: '100g' },
    { id: 94, name: 'Crawfish', calories: 77, protein: 16, carbs: 0, fats: 0.9, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 95, name: 'Mahi Mahi', calories: 109, protein: 24, carbs: 0, fats: 0.9, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 96, name: 'Monkfish', calories: 76, protein: 14, carbs: 0, fats: 1.5, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 97, name: 'Pollock', calories: 92, protein: 19, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 98, name: 'Haddock', calories: 87, protein: 19, carbs: 0, fats: 0.7, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 99, name: 'Turbot', calories: 95, protein: 16, carbs: 0, fats: 3, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 100, name: 'Grouper', calories: 118, protein: 25, carbs: 0, fats: 1.3, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 101, name: 'Arctic Char', calories: 154, protein: 20, carbs: 0, fats: 8, sugar: 0, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 102, name: 'Bluefish', calories: 159, protein: 25, carbs: 0, fats: 5, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 103, name: 'Barramundi', calories: 110, protein: 23, carbs: 0, fats: 2, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 104, name: 'Sea Urchin (Uni)', calories: 120, protein: 13, carbs: 5, fats: 5, sugar: 0, fiber: 0, vitamins: 30, unit: '100g' },
    { id: 105, name: 'Skate Wing', calories: 93, protein: 21, carbs: 0, fats: 0.7, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 106, name: 'Sole', calories: 91, protein: 19, carbs: 0, fats: 1.2, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 107, name: 'Tilefish', calories: 96, protein: 19, carbs: 0, fats: 1.8, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 108, name: 'Wahoo (Ono)', calories: 110, protein: 23, carbs: 0, fats: 1.5, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 109, name: 'Whiting', calories: 90, protein: 18, carbs: 0, fats: 1.3, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 110, name: 'Perch', calories: 91, protein: 19, carbs: 0, fats: 0.8, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    // GENERAL EXPANSION - VEGETABLES
    { id: 111, name: 'Artichoke (Boiled)', calories: 53, protein: 3.3, carbs: 12, fats: 0.2, sugar: 1, fiber: 8.6, vitamins: 20, unit: '100g' },
    { id: 112, name: 'Arugula', calories: 25, protein: 2.6, carbs: 3.7, fats: 0.7, sugar: 2.1, fiber: 1.6, vitamins: 40, unit: '100g' },
    { id: 113, name: 'Bamboo Shoots', calories: 27, protein: 2.6, carbs: 5, fats: 0.3, sugar: 3, fiber: 2.2, vitamins: 5, unit: '100g' },
    { id: 114, name: 'Bok Choy', calories: 13, protein: 1.5, carbs: 2.2, fats: 0.2, sugar: 1.2, fiber: 1, vitamins: 45, unit: '100g' },
    { id: 115, name: 'Brussels Sprouts', calories: 43, protein: 3.4, carbs: 9, fats: 0.3, sugar: 2.2, fiber: 3.8, vitamins: 85, unit: '100g' },
    { id: 116, name: 'Butternut Squash', calories: 45, protein: 1, carbs: 12, fats: 0.1, sugar: 2.2, fiber: 2, vitamins: 120, unit: '100g' },
    { id: 117, name: 'Collard Greens', calories: 32, protein: 3, carbs: 5.4, fats: 0.6, sugar: 0.5, fiber: 4, vitamins: 150, unit: '100g' },
    { id: 118, name: 'Daikon Radish', calories: 18, protein: 0.6, carbs: 4.1, fats: 0.1, sugar: 2.5, fiber: 1.6, vitamins: 25, unit: '100g' },
    { id: 119, name: 'Edamame (Shelled)', calories: 122, protein: 11, carbs: 10, fats: 5, sugar: 2.2, fiber: 5.2, vitamins: 15, unit: '100g' },
    { id: 120, name: 'Eggplant', calories: 25, protein: 1, carbs: 6, fats: 0.2, sugar: 3.5, fiber: 3, vitamins: 5, unit: '100g' },
    { id: 121, name: 'Fennel', calories: 31, protein: 1.2, carbs: 7, fats: 0.2, sugar: 3.9, fiber: 3.1, vitamins: 20, unit: '100g' },
    { id: 122, name: 'Garlic', calories: 149, protein: 6.4, carbs: 33, fats: 0.5, sugar: 1, fiber: 2.1, vitamins: 30, unit: '100g' },
    { id: 123, name: 'Ginger', calories: 80, protein: 1.8, carbs: 18, fats: 0.8, sugar: 1.7, fiber: 2, vitamins: 5, unit: '100g' },
    { id: 124, name: 'Jicama', calories: 38, protein: 0.7, carbs: 9, fats: 0.1, sugar: 1.8, fiber: 4.9, vitamins: 30, unit: '100g' },
    { id: 125, name: 'Leeks', calories: 61, protein: 1.5, carbs: 14, fats: 0.3, sugar: 3.9, fiber: 1.8, vitamins: 25, unit: '100g' },
    { id: 126, name: 'Okra', calories: 33, protein: 1.9, carbs: 7, fats: 0.2, sugar: 1.2, fiber: 3.2, vitamins: 40, unit: '100g' },
    { id: 127, name: 'Parsnips', calories: 75, protein: 1.2, carbs: 18, fats: 0.3, sugar: 4.8, fiber: 4.9, vitamins: 20, unit: '100g' },
    { id: 128, name: 'Radicchio', calories: 23, protein: 1.4, carbs: 4.5, fats: 0.3, sugar: 0.6, fiber: 0.9, vitamins: 10, unit: '100g' },
    { id: 129, name: 'Shallots', calories: 72, protein: 2.5, carbs: 17, fats: 0.1, sugar: 7.9, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 130, name: 'Turnips', calories: 28, protein: 0.9, carbs: 6, fats: 0.1, sugar: 3.8, fiber: 1.8, vitamins: 30, unit: '100g' },
    // GENERAL EXPANSION - FRUITS
    { id: 131, name: 'Acai Berry', calories: 70, protein: 2, carbs: 4, fats: 5, sugar: 0, fiber: 2, vitamins: 15, unit: '100g' },
    { id: 132, name: 'Apricots', calories: 48, protein: 1.4, carbs: 11, fats: 0.4, sugar: 9, fiber: 2, vitamins: 40, unit: '100g' },
    { id: 133, name: 'Blackberries', calories: 43, protein: 1.4, carbs: 10, fats: 0.5, sugar: 4.9, fiber: 5.3, vitamins: 35, unit: '100g' },
    { id: 134, name: 'Cantaloupe', calories: 34, protein: 0.8, carbs: 8, fats: 0.2, sugar: 8, fiber: 0.9, vitamins: 80, unit: '100g' },
    { id: 135, name: 'Cherries (Sweet)', calories: 63, protein: 1.1, carbs: 16, fats: 0.2, sugar: 13, fiber: 2.1, vitamins: 15, unit: '100g' },
    { id: 136, name: 'Coconut (Meat)', calories: 354, protein: 3.3, carbs: 15, fats: 33, sugar: 6, fiber: 9, vitamins: 5, unit: '100g' },
    { id: 137, name: 'Dates (Medjool)', calories: 277, protein: 1.8, carbs: 75, fats: 0.2, sugar: 66, fiber: 6.7, vitamins: 5, unit: '100g' },
    { id: 138, name: 'Figs (Fresh)', calories: 74, protein: 0.8, carbs: 19, fats: 0.3, sugar: 16, fiber: 2.9, vitamins: 5, unit: '100g' },
    { id: 139, name: 'Guava', calories: 68, protein: 2.6, carbs: 14, fats: 1, sugar: 9, fiber: 5.4, vitamins: 380, unit: '100g' },
    { id: 140, name: 'Lychee', calories: 66, protein: 0.8, carbs: 17, fats: 0.4, sugar: 15, fiber: 1.3, vitamins: 120, unit: '100g' },
    { id: 141, name: 'Papaya', calories: 43, protein: 0.5, carbs: 11, fats: 0.3, sugar: 8, fiber: 1.7, vitamins: 100, unit: '100g' },
    { id: 142, name: 'Passion Fruit', calories: 97, protein: 2.2, carbs: 23, fats: 0.7, sugar: 11, fiber: 10, vitamins: 50, unit: '100g' },
    { id: 143, name: 'Persimmon', calories: 70, protein: 0.6, carbs: 19, fats: 0.2, sugar: 13, fiber: 3.6, vitamins: 15, unit: '100g' },
    { id: 144, name: 'Pomegranate', calories: 83, protein: 1.7, carbs: 19, fats: 1.2, sugar: 14, fiber: 4, vitamins: 15, unit: '100g' },
    { id: 145, name: 'Raspberries', calories: 52, protein: 1.2, carbs: 12, fats: 0.7, sugar: 4.4, fiber: 6.5, vitamins: 45, unit: '100g' },
    { id: 146, name: 'Star Fruit', calories: 31, protein: 1, carbs: 6.7, fats: 0.3, sugar: 4, fiber: 2.8, vitamins: 60, unit: '100g' },
    // GRAINS & LEGUMES
    { id: 147, name: 'Barley (Pearled)', calories: 352, protein: 10, carbs: 77, fats: 1.2, sugar: 0.8, fiber: 15.6, vitamins: 5, unit: '100g' },
    { id: 148, name: 'Buckwheat', calories: 343, protein: 13, carbs: 71, fats: 3.4, sugar: 0, fiber: 10, vitamins: 10, unit: '100g' },
    { id: 149, name: 'Bulgur (Cooked)', calories: 83, protein: 3, carbs: 18.6, fats: 0.2, sugar: 0.1, fiber: 4.5, vitamins: 5, unit: '100g' },
    { id: 150, name: 'Millet (Cooked)', calories: 119, protein: 3.5, carbs: 23, fats: 1, sugar: 0.1, fiber: 1.3, vitamins: 5, unit: '100g' },
    { id: 151, name: 'Wild Rice (Cooked)', calories: 101, protein: 4, carbs: 21, fats: 0.3, sugar: 0.7, fiber: 1.8, vitamins: 5, unit: '100g' },
    { id: 152, name: 'Edamame (In Pod)', calories: 110, protein: 10, carbs: 9, fats: 5, sugar: 2, fiber: 5, vitamins: 15, unit: '100g' },
    { id: 153, name: 'Kidney Beans (Cooked)', calories: 127, protein: 8.7, carbs: 22.8, fats: 0.5, sugar: 0.3, fiber: 6.4, vitamins: 10, unit: '100g' },
    { id: 154, name: 'Lima Beans (Cooked)', calories: 115, protein: 7.8, carbs: 21, fats: 0.4, sugar: 1.5, fiber: 7, vitamins: 10, unit: '100g' },
    { id: 155, name: 'Navy Beans (Cooked)', calories: 139, protein: 8, carbs: 26, fats: 0.6, sugar: 0.4, fiber: 10, vitamins: 10, unit: '100g' },
    { id: 156, name: 'Split Peas (Cooked)', calories: 118, protein: 8.3, carbs: 21, fats: 0.4, sugar: 0.8, fiber: 8.3, vitamins: 5, unit: '100g' },
    // MEAT EXPANSION
    { id: 157, name: 'Beef Ribeye Steak', calories: 291, protein: 24, carbs: 0, fats: 22, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 158, name: 'Beef Sirloin Steak', calories: 244, protein: 27, carbs: 0, fats: 15, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 159, name: 'Beef Brisket', calories: 277, protein: 23, carbs: 0, fats: 20, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 160, name: 'Beef Chuck Roast', calories: 251, protein: 25, carbs: 0, fats: 17, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 161, name: 'Beef Flank Steak', calories: 192, protein: 28, carbs: 0, fats: 8, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 162, name: 'Beef Round Steak', calories: 182, protein: 28, carbs: 0, fats: 7, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 163, name: 'Beef Liver', calories: 175, protein: 27, carbs: 5, fats: 5, sugar: 0, fiber: 0, vitamins: 100, unit: '100g' },
    { id: 164, name: 'Beef Heart', calories: 112, protein: 17, carbs: 0, fats: 4, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 165, name: 'Beef Tongue', calories: 224, protein: 15, carbs: 0, fats: 16, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 166, name: 'Pork Chop', calories: 242, protein: 27, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 167, name: 'Pork Belly', calories: 518, protein: 9, carbs: 0, fats: 53, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 168, name: 'Pork Shoulder', calories: 245, protein: 25, carbs: 0, fats: 16, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 169, name: 'Ham (Roasted)', calories: 163, protein: 21, carbs: 1, fats: 8, sugar: 1, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 170, name: 'Bacon (Cooked)', calories: 541, protein: 37, carbs: 1.4, fats: 42, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 171, name: 'Pork Sausage', calories: 339, protein: 14, carbs: 2, fats: 30, sugar: 0.5, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 172, name: 'Chicken Thigh (Skinless)', calories: 209, protein: 26, carbs: 0, fats: 11, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 173, name: 'Chicken Wing (Cooked)', calories: 203, protein: 30, carbs: 0, fats: 8, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 174, name: 'Chicken Drumstick', calories: 172, protein: 28, carbs: 0, fats: 6, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 175, name: 'Duck Breast (Skinless)', calories: 140, protein: 28, carbs: 0, fats: 2, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 176, name: 'Goose (Roasted)', calories: 305, protein: 25, carbs: 0, fats: 22, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 177, name: 'Quail (Cooked)', calories: 227, protein: 25, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 178, name: 'Pheasant', calories: 239, protein: 27, carbs: 0, fats: 13, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 179, name: 'Venison (Deer)', calories: 158, protein: 30, carbs: 0, fats: 3, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 180, name: 'Bison (Buffalo)', calories: 143, protein: 28, carbs: 0, fats: 2.4, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 181, name: 'Rabbit (Stewed)', calories: 173, protein: 33, carbs: 0, fats: 3.5, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 182, name: 'Wild Boar', calories: 160, protein: 28, carbs: 0, fats: 4.4, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 183, name: 'Kangaroo Steak', calories: 98, protein: 22, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 184, name: 'Salami', calories: 336, protein: 22, carbs: 1, fats: 26, sugar: 0.5, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 185, name: 'Pepperoni', calories: 494, protein: 23, carbs: 0, fats: 44, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 186, name: 'Prosciutto', calories: 232, protein: 25, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 187, name: 'Mortadella', calories: 311, protein: 13, carbs: 1, fats: 28, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 188, name: 'Hot Dog (Beef)', calories: 290, protein: 11, carbs: 2, fats: 26, sugar: 1, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 189, name: 'Corned Beef', calories: 251, protein: 18, carbs: 0.5, fats: 19, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 190, name: 'Pastrami', calories: 147, protein: 22, carbs: 0, fats: 6, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    // RAW VS COOKED EXPANSION - MEATS
    { id: 191, name: 'Chicken Breast (Raw)', calories: 110, protein: 23, carbs: 0, fats: 1.2, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 192, name: 'Chicken Breast (Grilled)', calories: 165, protein: 31, carbs: 0, fats: 3.6, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 193, name: 'Chicken Thigh (Raw)', calories: 120, protein: 17, carbs: 0, fats: 5.7, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 194, name: 'Chicken Thigh (Roasted)', calories: 209, protein: 26, carbs: 0, fats: 11, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 195, name: 'Ground Beef (Raw, 80/20)', calories: 254, protein: 17, carbs: 0, fats: 20, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 196, name: 'Ground Beef (Cooked, 80/20)', calories: 272, protein: 25, carbs: 0, fats: 18, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 197, name: 'Beef Steak (Raw)', calories: 210, protein: 20, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 198, name: 'Beef Steak (Grilled)', calories: 271, protein: 25, carbs: 0, fats: 19, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 199, name: 'Pork Chop (Raw)', calories: 155, protein: 21, carbs: 0, fats: 8, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 200, name: 'Pork Chop (Grilled)', calories: 242, protein: 27, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 201, name: 'Lamb Chop (Raw)', calories: 202, protein: 18, carbs: 0, fats: 14, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 202, name: 'Lamb Chop (Grilled)', calories: 294, protein: 25, carbs: 0, fats: 21, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 203, name: 'Salmon (Raw)', calories: 146, protein: 20, carbs: 0, fats: 6, sugar: 0, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 204, name: 'Salmon (Cooked)', calories: 208, protein: 20, carbs: 0, fats: 13, sugar: 0, fiber: 0, vitamins: 30, unit: '100g' },
    { id: 205, name: 'Cod (Raw)', calories: 69, protein: 15, carbs: 0, fats: 0.6, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    { id: 206, name: 'Cod (Baked)', calories: 82, protein: 18, carbs: 0, fats: 0.7, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 207, name: 'Shrimp (Raw)', calories: 71, protein: 14, carbs: 0.9, fats: 1, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 208, name: 'Shrimp (Cooked)', calories: 99, protein: 24, carbs: 0.2, fats: 0.3, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 209, name: 'Turkey Breast (Raw)', calories: 104, protein: 24, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 210, name: 'Turkey Breast (Roasted)', calories: 135, protein: 30, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 8, unit: '100g' },
    // RAW VS COOKED EXPANSION - VEGETABLES
    { id: 211, name: 'Broccoli (Raw)', calories: 34, protein: 2.8, carbs: 7, fats: 0.4, sugar: 1.7, fiber: 2.6, vitamins: 45, unit: '100g' },
    { id: 212, name: 'Broccoli (Steamed)', calories: 35, protein: 2.4, carbs: 7.2, fats: 0.4, sugar: 1.4, fiber: 3.3, vitamins: 40, unit: '100g' },
    { id: 213, name: 'Carrots (Raw)', calories: 41, protein: 0.9, carbs: 9.6, fats: 0.2, sugar: 4.7, fiber: 2.8, vitamins: 110, unit: '100g' },
    { id: 214, name: 'Carrots (Boiled)', calories: 35, protein: 0.8, carbs: 8.2, fats: 0.2, sugar: 3.5, fiber: 3, vitamins: 100, unit: '100g' },
    { id: 215, name: 'Spinach (Raw)', calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, sugar: 0.4, fiber: 2.2, vitamins: 60, unit: '100g' },
    { id: 216, name: 'Spinach (Boiled)', calories: 23, protein: 3, carbs: 3.8, fats: 0.5, sugar: 0.4, fiber: 2.4, vitamins: 50, unit: '100g' },
    { id: 217, name: 'Potatoes (Raw)', calories: 77, protein: 2, carbs: 17, fats: 0.1, sugar: 0.8, fiber: 2.2, vitamins: 15, unit: '100g' },
    { id: 218, name: 'Potatoes (Baked)', calories: 93, protein: 2.5, carbs: 21, fats: 0.1, sugar: 1.2, fiber: 2.5, vitamins: 20, unit: '100g' },
    { id: 219, name: 'Sweet Potato (Raw)', calories: 86, protein: 1.6, carbs: 20, fats: 0.1, sugar: 4.2, fiber: 3, vitamins: 50, unit: '100g' },
    { id: 220, name: 'Sweet Potato (Baked)', calories: 90, protein: 2, carbs: 21, fats: 0.2, sugar: 6, fiber: 3.3, vitamins: 60, unit: '100g' },
    { id: 221, name: 'Onions (Raw)', calories: 40, protein: 1.1, carbs: 9.3, fats: 0.1, sugar: 4.2, fiber: 1.7, vitamins: 10, unit: '100g' },
    { id: 222, name: 'Onions (Sautéed)', calories: 92, protein: 1.4, carbs: 10, fats: 6, sugar: 5, fiber: 2, vitamins: 8, unit: '100g' },
    { id: 223, name: 'Green Peas (Raw)', calories: 81, protein: 5.4, carbs: 14, fats: 0.4, sugar: 5.7, fiber: 5.1, vitamins: 25, unit: '100g' },
    { id: 224, name: 'Green Peas (Boiled)', calories: 84, protein: 5.4, carbs: 15.6, fats: 0.2, sugar: 5.9, fiber: 5.5, vitamins: 20, unit: '100g' },
    { id: 225, name: 'Cabbage (Raw)', calories: 25, protein: 1.3, carbs: 5.8, fats: 0.1, sugar: 3.2, fiber: 2.5, vitamins: 40, unit: '100g' },
    { id: 226, name: 'Cabbage (Boiled)', calories: 23, protein: 1.3, carbs: 5.5, fats: 0.1, sugar: 3, fiber: 2.8, vitamins: 35, unit: '100g' },
    { id: 227, name: 'Asparagus (Raw)', calories: 20, protein: 2.2, carbs: 3.9, fats: 0.1, sugar: 1.9, fiber: 2.1, vitamins: 20, unit: '100g' },
    { id: 228, name: 'Asparagus (Boiled)', calories: 22, protein: 2.4, carbs: 4.1, fats: 0.2, sugar: 1.3, fiber: 2.4, vitamins: 18, unit: '100g' },
    { id: 229, name: 'Zucchini (Raw)', calories: 17, protein: 1.2, carbs: 3.1, fats: 0.3, sugar: 2.5, fiber: 1, vitamins: 30, unit: '100g' },
    { id: 230, name: 'Zucchini (Boiled)', calories: 15, protein: 1.1, carbs: 2.7, fats: 0.4, sugar: 2.2, fiber: 1.2, vitamins: 25, unit: '100g' },
    // FRUIT VARIATIONS
    { id: 231, name: 'Apple (with Skin)', calories: 52, protein: 0.3, carbs: 14, fats: 0.2, sugar: 10, fiber: 2.4, vitamins: 15, unit: '100g' },
    { id: 232, name: 'Apple (Peeled)', calories: 48, protein: 0.1, carbs: 13, fats: 0.1, sugar: 10, fiber: 1.3, vitamins: 10, unit: '100g' },
    { id: 233, name: 'Pear (Fresh)', calories: 57, protein: 0.4, carbs: 15, fats: 0.1, sugar: 10, fiber: 3.1, vitamins: 10, unit: '100g' },
    { id: 234, name: 'Pear (Dried)', calories: 262, protein: 1.9, carbs: 70, fats: 0.6, sugar: 62, fiber: 7.5, vitamins: 5, unit: '100g' },
    { id: 235, name: 'Apricots (Fresh)', calories: 48, protein: 1.4, carbs: 11, fats: 0.4, sugar: 9, fiber: 2, vitamins: 40, unit: '100g' },
    { id: 236, name: 'Apricots (Dried)', calories: 241, protein: 3.4, carbs: 63, fats: 0.5, sugar: 53, fiber: 7.3, vitamins: 20, unit: '100g' },
    { id: 237, name: 'Plums (Fresh)', calories: 46, protein: 0.7, carbs: 11, fats: 0.3, sugar: 10, fiber: 1.4, vitamins: 15, unit: '100g' },
    { id: 238, name: 'Prunes (Dried Plums)', calories: 240, protein: 2.2, carbs: 64, fats: 0.4, sugar: 38, fiber: 7.1, vitamins: 10, unit: '100g' },
    { id: 239, name: 'Grapes (Fresh)', calories: 69, protein: 0.7, carbs: 18, fats: 0.2, sugar: 16, fiber: 0.9, vitamins: 10, unit: '100g' },
    { id: 240, name: 'Raisins (Dried Grapes)', calories: 299, protein: 3.1, carbs: 79, fats: 0.5, sugar: 59, fiber: 3.7, vitamins: 5, unit: '100g' },
    { id: 241, name: 'Banana (Yellow)', calories: 89, protein: 1.1, carbs: 23, fats: 0.3, sugar: 12, fiber: 2.6, vitamins: 20, unit: '100g' },
    { id: 242, name: 'Banana (Dehydrated)', calories: 346, protein: 3.9, carbs: 88, fats: 1.8, sugar: 47, fiber: 9.9, vitamins: 10, unit: '100g' },
    { id: 243, name: 'Cranberries (Fresh)', calories: 46, protein: 0.4, carbs: 12, fats: 0.1, sugar: 4, fiber: 4.6, vitamins: 25, unit: '100g' },
    { id: 244, name: 'Cranberries (Dried)', calories: 308, protein: 0.1, carbs: 83, fats: 1.4, sugar: 65, fiber: 5.7, vitamins: 5, unit: '100g' },
    { id: 245, name: 'Blueberries (Fresh)', calories: 57, protein: 0.7, carbs: 14, fats: 0.3, sugar: 10, fiber: 2.4, vitamins: 25, unit: '100g' },
    { id: 246, name: 'Blueberries (Frozen)', calories: 51, protein: 0.4, carbs: 12, fats: 0.6, sugar: 10, fiber: 2.1, vitamins: 20, unit: '100g' },
    // SPECIALTY MEATS
    { id: 247, name: 'Camel Meat (Raw)', calories: 115, protein: 21, carbs: 0, fats: 3, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 248, name: 'Camel Meat (Grilled)', calories: 160, protein: 28, carbs: 0, fats: 4.5, sugar: 0, fiber: 0, vitamins: 12, unit: '100g' },
    { id: 249, name: 'Donkey Meat (Raw)', calories: 110, protein: 22, carbs: 0, fats: 2.5, sugar: 0, fiber: 0, vitamins: 18, unit: '100g' },
    { id: 250, name: 'Donkey Meat (Grilled)', calories: 155, protein: 30, carbs: 0, fats: 3.8, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    // SALAD VARIETIES
    { id: 251, name: 'Caesar Salad (No Dressing)', calories: 44, protein: 2.1, carbs: 3.2, fats: 2.1, sugar: 1.1, fiber: 1.6, vitamins: 25, unit: '100g' },
    { id: 252, name: 'Greek Salad', calories: 120, protein: 4, carbs: 6, fats: 9, sugar: 3, fiber: 2, vitamins: 25, unit: '100g' },
    { id: 253, name: 'Garden Salad', calories: 20, protein: 1.2, carbs: 3.5, fats: 0.2, sugar: 2, fiber: 1.5, vitamins: 30, unit: '100g' },
    { id: 254, name: 'Caprese Salad', calories: 180, protein: 10, carbs: 3, fats: 15, sugar: 2, fiber: 0.5, vitamins: 15, unit: '100g' },
    { id: 255, name: 'Waldorf Salad', calories: 150, protein: 2, carbs: 12, fats: 11, sugar: 9, fiber: 2.5, vitamins: 10, unit: '100g' },
    { id: 256, name: 'Coleslaw (Classic)', calories: 152, protein: 1, carbs: 14, fats: 10, sugar: 11, fiber: 2, vitamins: 20, unit: '100g' },
    { id: 257, name: 'Potato Salad', calories: 143, protein: 2, carbs: 15, fats: 8, sugar: 2, fiber: 1.5, vitamins: 15, unit: '100g' },
    { id: 258, name: 'Macaroni Salad', calories: 202, protein: 3.5, carbs: 22, fats: 11, sugar: 4, fiber: 1, vitamins: 5, unit: '100g' },
    { id: 259, name: 'Tuna Salad (with Mayo)', calories: 187, protein: 14, carbs: 2, fats: 14, sugar: 1, fiber: 0.5, vitamins: 5, unit: '100g' },
    { id: 260, name: 'Chicken Salad (with Mayo)', calories: 230, protein: 16, carbs: 3, fats: 17, sugar: 1.5, fiber: 0.5, vitamins: 5, unit: '100g' },
    { id: 261, name: 'Egg Salad (with Mayo)', calories: 196, protein: 10, carbs: 1.5, fats: 16, sugar: 0.8, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 262, name: 'Fruit Salad (Mixed)', calories: 50, protein: 0.5, carbs: 13, fats: 0.3, sugar: 10, fiber: 2, vitamins: 40, unit: '100g' },
    { id: 263, name: 'Quinoa Salad (Mediterranean)', calories: 140, protein: 4.5, carbs: 18, fats: 6, sugar: 1.5, fiber: 3, vitamins: 20, unit: '100g' },
    { id: 264, name: 'Pasta Salad (Italian)', calories: 160, protein: 4, carbs: 20, fats: 7, sugar: 2, fiber: 1.5, vitamins: 10, unit: '100g' },
    { id: 265, name: 'Cobb Salad (No Dressing)', calories: 130, protein: 11, carbs: 3, fats: 8, sugar: 1.5, fiber: 1.5, vitamins: 20, unit: '100g' },
    { id: 266, name: 'Niçoise Salad', calories: 125, protein: 8, carbs: 7, fats: 7, sugar: 1.5, fiber: 2, vitamins: 25, unit: '100g' },
    { id: 267, name: 'Tabbouleh', calories: 110, protein: 2.5, carbs: 14, fats: 5, sugar: 1.5, fiber: 3.5, vitamins: 45, unit: '100g' },
    { id: 268, name: 'Fattoush', calories: 85, protein: 2, carbs: 11, fats: 4, sugar: 2.5, fiber: 2.5, vitamins: 30, unit: '100g' },
    { id: 269, name: 'Panzanella', calories: 145, protein: 3.5, carbs: 18, fats: 7, sugar: 3, fiber: 2, vitamins: 20, unit: '100g' },
    { id: 270, name: 'Seaweed Salad (Wakame)', calories: 45, protein: 1, carbs: 9, fats: 1, sugar: 4, fiber: 1, vitamins: 20, unit: '100g' },
    { id: 271, name: 'Som Tum (Papaya Salad)', calories: 60, protein: 2, carbs: 12, fats: 0.5, sugar: 8, fiber: 2.5, vitamins: 35, unit: '100g' },
    { id: 272, name: 'Larub (Meat Salad)', calories: 165, protein: 18, carbs: 4, fats: 9, sugar: 1.5, fiber: 0.5, vitamins: 10, unit: '100g' },
    { id: 273, name: 'Spinach & Strawberry Salad', calories: 95, protein: 2, carbs: 8, fats: 6, sugar: 5, fiber: 2, vitamins: 50, unit: '100g' },
    { id: 274, name: 'Cucumber Salad (Vinegar)', calories: 25, protein: 0.6, carbs: 4, fats: 0.1, sugar: 2.5, fiber: 0.5, vitamins: 10, unit: '100g' },
    { id: 275, name: 'Three Bean Salad', calories: 95, protein: 4, carbs: 15, fats: 2.5, sugar: 4, fiber: 5, vitamins: 15, unit: '100g' },
    { id: 276, name: 'Broccoli Salad', calories: 170, protein: 4, carbs: 10, fats: 13, sugar: 5, fiber: 2.5, vitamins: 45, unit: '100g' },
    { id: 277, name: 'Chickpea Salad', calories: 160, protein: 7, carbs: 20, fats: 6, sugar: 3, fiber: 6, vitamins: 15, unit: '100g' },
    // SALAD DRESSINGS
    { id: 278, name: 'Ranch Dressing', calories: 435, protein: 1.2, carbs: 6.5, fats: 45, sugar: 3.5, fiber: 0, vitamins: 2, unit: '100g' },
    { id: 279, name: 'Blue Cheese Dressing', calories: 440, protein: 2.5, carbs: 4.5, fats: 46, sugar: 3, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 280, name: 'Italian Dressing', calories: 235, protein: 0.5, carbs: 8, fats: 23, sugar: 6, fiber: 0, vitamins: 2, unit: '100g' },
    { id: 281, name: 'Balsamic Vinaigrette', calories: 350, protein: 0.3, carbs: 12, fats: 34, sugar: 10, fiber: 0, vitamins: 2, unit: '100g' },
    { id: 282, name: 'Caesar Dressing', calories: 480, protein: 2, carbs: 3, fats: 52, sugar: 1.5, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 283, name: 'Honey Mustard Dressing', calories: 410, protein: 1, carbs: 22, fats: 36, sugar: 19, fiber: 0, vitamins: 2, unit: '100g' },
    { id: 284, name: 'Thousand Island Dressing', calories: 370, protein: 1.2, carbs: 15, fats: 34, sugar: 12, fiber: 0.5, vitamins: 5, unit: '100g' },
    { id: 285, name: 'French Dressing', calories: 415, protein: 0.5, carbs: 20, fats: 37, sugar: 18, fiber: 0, vitamins: 2, unit: '100g' },
    { id: 286, name: 'Sesame Ginger Dressing', calories: 390, protein: 2, carbs: 24, fats: 32, sugar: 18, fiber: 0.5, vitamins: 5, unit: '100g' },
    { id: 287, name: 'Greek Vinaigrette', calories: 320, protein: 0.5, carbs: 5, fats: 33, sugar: 3, fiber: 0, vitamins: 5, unit: '100g' },
    // PROTEIN POWDERS EXPANSION
    // Whey Protein
    { id: 288, name: 'Whey Protein Isolate (Chocolate)', calories: 370, protein: 85, carbs: 3, fats: 1, sugar: 1, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 289, name: 'Whey Protein Isolate (Vanilla)', calories: 370, protein: 85, carbs: 3, fats: 1, sugar: 1, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 290, name: 'Whey Protein Isolate (Unflavored)', calories: 380, protein: 90, carbs: 0, fats: 0.5, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 291, name: 'Whey Protein Concentrate (Chocolate)', calories: 390, protein: 75, carbs: 8, fats: 6, sugar: 4, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 292, name: 'Whey Protein Concentrate (Vanilla)', calories: 390, protein: 75, carbs: 8, fats: 6, sugar: 4, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 293, name: 'Whey Protein Concentrate (Strawberry)', calories: 395, protein: 74, carbs: 9, fats: 6, sugar: 5, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 294, name: 'Hydrolyzed Whey Protein (Chocolate)', calories: 360, protein: 80, carbs: 2, fats: 1, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 295, name: 'Hydrolyzed Whey Protein (Vanilla)', calories: 360, protein: 80, carbs: 2, fats: 1, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    // Casein Protein
    { id: 296, name: 'Casein Protein (Chocolate)', calories: 360, protein: 75, carbs: 6, fats: 1.5, sugar: 2, fiber: 0.5, vitamins: 10, unit: '100g' },
    { id: 297, name: 'Casein Protein (Vanilla)', calories: 360, protein: 75, carbs: 6, fats: 1.5, sugar: 2, fiber: 0.5, vitamins: 10, unit: '100g' },
    { id: 298, name: 'Casein Protein (Strawberry)', calories: 365, protein: 74, carbs: 7, fats: 1.5, sugar: 3, fiber: 0.5, vitamins: 10, unit: '100g' },
    // Plant-Based Protein
    { id: 299, name: 'Pea Protein Isolate (Unflavored)', calories: 380, protein: 80, carbs: 2, fats: 7, sugar: 0, fiber: 3, vitamins: 15, unit: '100g' },
    { id: 300, name: 'Pea Protein (Chocolate)', calories: 370, protein: 70, carbs: 10, fats: 6, sugar: 2, fiber: 4, vitamins: 12, unit: '100g' },
    { id: 301, name: 'Pea Protein (Vanilla)', calories: 370, protein: 70, carbs: 10, fats: 6, sugar: 2, fiber: 4, vitamins: 12, unit: '100g' },
    { id: 302, name: 'Soy Protein Isolate (Unflavored)', calories: 375, protein: 90, carbs: 0, fats: 1, sugar: 0, fiber: 1, vitamins: 20, unit: '100g' },
    { id: 303, name: 'Soy Protein (Chocolate)', calories: 385, protein: 75, carbs: 8, fats: 3, sugar: 4, fiber: 2, vitamins: 15, unit: '100g' },
    { id: 304, name: 'Soy Protein (Vanilla)', calories: 385, protein: 75, carbs: 8, fats: 3, sugar: 4, fiber: 2, vitamins: 15, unit: '100g' },
    { id: 305, name: 'Brown Rice Protein (Unflavored)', calories: 370, protein: 80, carbs: 5, fats: 3, sugar: 0, fiber: 4, vitamins: 10, unit: '100g' },
    { id: 306, name: 'Hemp Protein (Unflavored)', calories: 400, protein: 50, carbs: 20, fats: 11, sugar: 2, fiber: 18, vitamins: 25, unit: '100g' },
    { id: 307, name: 'Mixed Plant Protein (Chocolate)', calories: 380, protein: 70, carbs: 12, fats: 5, sugar: 3, fiber: 5, vitamins: 20, unit: '100g' },
    { id: 308, name: 'Mixed Plant Protein (Vanilla)', calories: 380, protein: 70, carbs: 12, fats: 5, sugar: 3, fiber: 5, vitamins: 20, unit: '100g' },
    { id: 309, name: 'Pumpkin Seed Protein', calories: 400, protein: 60, carbs: 10, fats: 12, sugar: 1, fiber: 8, vitamins: 30, unit: '100g' },
    // Other Animal Protein
    { id: 310, name: 'Egg White Protein (Unflavored)', calories: 350, protein: 80, carbs: 5, fats: 0, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 311, name: 'Egg White Protein (Chocolate)', calories: 360, protein: 75, carbs: 8, fats: 0.5, sugar: 3, fiber: 0.5, vitamins: 12, unit: '100g' },
    { id: 312, name: 'Beef Protein Isolate (Chocolate)', calories: 370, protein: 90, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 313, name: 'Beef Protein Isolate (Vanilla)', calories: 370, protein: 90, carbs: 0, fats: 1, sugar: 0, fiber: 0, vitamins: 20, unit: '100g' },
    { id: 314, name: 'Collagen Peptides (Unflavored)', calories: 360, protein: 90, carbs: 0, fats: 0, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    // Specialty / Clear Proteins
    { id: 315, name: 'Clear Whey Isolate (Pineapple)', calories: 330, protein: 80, carbs: 1, fats: 0, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 316, name: 'Clear Whey Isolate (Mango)', calories: 330, protein: 80, carbs: 1, fats: 0, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 317, name: 'Clear Whey Isolate (Raspberry)', calories: 330, protein: 80, carbs: 1, fats: 0, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    { id: 318, name: 'Clear Whey Isolate (Grape)', calories: 330, protein: 80, carbs: 1, fats: 0, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    // Mass Gainers
    { id: 319, name: 'Mass Gainer (Chocolate)', calories: 380, protein: 20, carbs: 70, fats: 2, sugar: 15, fiber: 3, vitamins: 25, unit: '100g' },
    { id: 320, name: 'Mass Gainer (Vanilla)', calories: 380, protein: 20, carbs: 70, fats: 2, sugar: 15, fiber: 3, vitamins: 25, unit: '100g' },
    { id: 321, name: 'Mass Gainer (Cookies & Cream)', calories: 385, protein: 19, carbs: 72, fats: 3, sugar: 18, fiber: 2, vitamins: 20, unit: '100g' },
    // Meal Replacements / Hybrid
    { id: 322, name: 'Diet Protein Blend (Chocolate)', calories: 350, protein: 65, carbs: 10, fats: 4, sugar: 3, fiber: 5, vitamins: 40, unit: '100g' },
    { id: 323, name: 'Diet Protein Blend (Vanilla)', calories: 350, protein: 65, carbs: 10, fats: 4, sugar: 3, fiber: 5, vitamins: 40, unit: '100g' },
    { id: 324, name: 'Keto Protein (Chocolate)', calories: 450, protein: 40, carbs: 5, fats: 30, sugar: 1, fiber: 3, vitamins: 20, unit: '100g' },
    { id: 325, name: 'Keto Protein (Vanilla)', calories: 450, protein: 40, carbs: 5, fats: 30, sugar: 1, fiber: 3, vitamins: 20, unit: '100g' },
    // Post-Workout / Recovery
    { id: 326, name: 'Post-Workout Recovery (Fruit Punch)', calories: 340, protein: 40, carbs: 45, fats: 0, sugar: 20, fiber: 0, vitamins: 50, unit: '100g' },
    { id: 327, name: 'Post-Workout Recovery (Chocolate)', calories: 360, protein: 35, carbs: 50, fats: 2, sugar: 25, fiber: 1, vitamins: 50, unit: '100g' },
    // Specialized Amino Blends (High Protein Density)
    { id: 328, name: 'EAA Powder (Fruit)', calories: 40, protein: 10, carbs: 0, fats: 0, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    { id: 329, name: 'BCAA Powder (Lemonade)', calories: 20, protein: 5, carbs: 0, fats: 0, sugar: 0, fiber: 0, vitamins: 5, unit: '100g' },
    // FRUITS & VEGETABLES MEGA EXPANSION
    // Leafy Greens
    { id: 330, name: 'Watercress (Raw)', calories: 11, protein: 2.3, carbs: 1.3, fats: 0.1, sugar: 0.2, fiber: 0.5, vitamins: 60, unit: '100g' },
    { id: 331, name: 'Swiss Chard (Raw)', calories: 19, protein: 1.8, carbs: 3.7, fats: 0.2, sugar: 1.1, fiber: 1.6, vitamins: 45, unit: '100g' },
    { id: 332, name: 'Swiss Chard (Boiled)', calories: 20, protein: 1.9, carbs: 4.1, fats: 0.1, sugar: 1, fiber: 2.1, vitamins: 40, unit: '100g' },
    { id: 333, name: 'Endive (Raw)', calories: 17, protein: 1.3, carbs: 3.4, fats: 0.2, sugar: 0.3, fiber: 3.1, vitamins: 15, unit: '100g' },
    { id: 334, name: 'Escarole (Raw)', calories: 17, protein: 1.3, carbs: 3.4, fats: 0.2, sugar: 0.3, fiber: 3.1, vitamins: 15, unit: '100g' },
    { id: 335, name: 'Mustard Greens (Raw)', calories: 27, protein: 2.9, carbs: 4.7, fats: 0.4, sugar: 1.3, fiber: 3.2, vitamins: 50, unit: '100g' },
    { id: 336, name: 'Beet Greens (Raw)', calories: 22, protein: 2.2, carbs: 4.3, fats: 0.1, sugar: 0.5, fiber: 3.7, vitamins: 40, unit: '100g' },
    // Root & Tuber Vegetables
    { id: 337, name: 'Kohlrabi (Raw)', calories: 27, protein: 1.7, carbs: 6.2, fats: 0.1, sugar: 2.6, fiber: 3.6, vitamins: 40, unit: '100g' },
    { id: 338, name: 'Celeriac (Celery Root)', calories: 42, protein: 1.5, carbs: 9.2, fats: 0.3, sugar: 1.6, fiber: 1.8, vitamins: 15, unit: '100g' },
    { id: 339, name: 'Rutabaga (Raw)', calories: 37, protein: 1.1, carbs: 8.6, fats: 0.2, sugar: 4.5, fiber: 2.3, vitamins: 25, unit: '100g' },
    { id: 340, name: 'Jerusalem Artichoke (Sunchoke)', calories: 73, protein: 2, carbs: 17.4, fats: 0, sugar: 9.6, fiber: 1.6, vitamins: 10, unit: '100g' },
    { id: 341, name: 'Lotus Root (Raw)', calories: 74, protein: 2.6, carbs: 17.2, fats: 0.1, sugar: 0.5, fiber: 4.9, vitamins: 20, unit: '100g' },
    { id: 342, name: 'Taro Root (Raw)', calories: 112, protein: 1.5, carbs: 26.5, fats: 0.2, sugar: 0.4, fiber: 4.1, vitamins: 10, unit: '100g' },
    { id: 343, name: 'Cassava (Yuca) (Raw)', calories: 160, protein: 1.4, carbs: 38, fats: 0.3, sugar: 1.7, fiber: 1.8, vitamins: 20, unit: '100g' },
    // Exotic Vegetables
    { id: 344, name: 'Chayote (Raw)', calories: 19, protein: 0.8, carbs: 4.5, fats: 0.1, sugar: 1.7, fiber: 1.7, vitamins: 15, unit: '100g' },
    { id: 345, name: 'Bitter Melon (Raw)', calories: 17, protein: 1, carbs: 3.7, fats: 0.2, sugar: 1, fiber: 2.8, vitamins: 40, unit: '100g' },
    { id: 346, name: 'Tomatillo (Raw)', calories: 32, protein: 1, carbs: 5.8, fats: 1, sugar: 3.9, fiber: 1.9, vitamins: 15, unit: '100g' },
    { id: 347, name: 'Jalapeño Pepper (Raw)', calories: 29, protein: 0.9, carbs: 6.5, fats: 0.4, sugar: 4.1, fiber: 2.8, vitamins: 40, unit: '100g' },
    { id: 348, name: 'Habanero Pepper (Raw)', calories: 40, protein: 2, carbs: 9, fats: 0.4, sugar: 4, fiber: 1.5, vitamins: 80, unit: '100g' },
    { id: 349, name: 'Poblano Pepper (Raw)', calories: 20, protein: 0.9, carbs: 4.7, fats: 0.2, sugar: 2.3, fiber: 1.4, vitamins: 30, unit: '100g' },
    // Exotic Fruits
    { id: 350, name: 'Dragon Fruit (Pitaya)', calories: 60, protein: 1.2, carbs: 13, fats: 0.4, sugar: 8, fiber: 3, vitamins: 10, unit: '100g' },
    { id: 351, name: 'Durian', calories: 147, protein: 1.5, carbs: 27, fats: 5.3, sugar: 12, fiber: 3.8, vitamins: 25, unit: '100g' },
    { id: 352, name: 'Jackfruit (Raw)', calories: 95, protein: 1.7, carbs: 23, fats: 0.6, sugar: 19, fiber: 1.5, vitamins: 15, unit: '100g' },
    { id: 353, name: 'Rambutan', calories: 82, protein: 0.7, carbs: 21, fats: 0.2, sugar: 18, fiber: 0.9, vitamins: 15, unit: '100g' },
    { id: 354, name: 'Mangosteen', calories: 73, protein: 0.4, carbs: 18, fats: 0.6, sugar: 15, fiber: 1.8, vitamins: 5, unit: '100g' },
    { id: 355, name: 'Longan', calories: 60, protein: 1.3, carbs: 15, fats: 0.1, sugar: 13, fiber: 1.1, vitamins: 80, unit: '100g' },
    { id: 356, name: 'Sapodilla', calories: 83, protein: 0.4, carbs: 20, fats: 1.1, sugar: 15, fiber: 5.3, vitamins: 15, unit: '100g' },
    { id: 357, name: 'Cherimoya', calories: 75, protein: 1.6, carbs: 18, fats: 0.7, sugar: 13, fiber: 3, vitamins: 20, unit: '100g' },
    { id: 358, name: 'Soursop (Guanabana)', calories: 66, protein: 1, carbs: 16.8, fats: 0.3, sugar: 13.5, fiber: 3.3, vitamins: 35, unit: '100g' },
    { id: 359, name: 'Feijoa', calories: 61, protein: 1, carbs: 15, fats: 0.6, sugar: 8, fiber: 6.4, vitamins: 35, unit: '100g' },
    { id: 360, name: 'Loquat', calories: 47, protein: 0.4, carbs: 12, fats: 0.2, sugar: 10, fiber: 1.7, vitamins: 10, unit: '100g' },
    { id: 361, name: 'Kumquat', calories: 71, protein: 1.9, carbs: 16, fats: 0.9, sugar: 9, fiber: 6.5, vitamins: 70, unit: '100g' },
    { id: 362, name: 'Plantain (Raw)', calories: 122, protein: 1.3, carbs: 32, fats: 0.4, sugar: 15, fiber: 2.3, vitamins: 30, unit: '100g' },
    { id: 363, name: 'Plantain (Fried)', calories: 252, protein: 1.2, carbs: 32, fats: 14, sugar: 14, fiber: 2.1, vitamins: 25, unit: '100g' },
    // More Melons & Berries
    { id: 364, name: 'Honeydew Melon', calories: 36, protein: 0.5, carbs: 9, fats: 0.1, sugar: 8, fiber: 0.8, vitamins: 30, unit: '100g' },
    { id: 365, name: 'Elderberries (Raw)', calories: 73, protein: 0.7, carbs: 18, fats: 0.5, sugar: 10, fiber: 7, vitamins: 60, unit: '100g' },
    { id: 366, name: 'Gooseberries (Raw)', calories: 44, protein: 0.9, carbs: 10, fats: 0.6, sugar: 5, fiber: 4.3, vitamins: 45, unit: '100g' },
    { id: 367, name: 'Mulberries (Raw)', calories: 43, protein: 1.4, carbs: 10, fats: 0.4, sugar: 8, fiber: 1.7, vitamins: 60, unit: '100g' },
    { id: 368, name: 'Boysenberries (Frozen)', calories: 50, protein: 1.1, carbs: 12, fats: 0.3, sugar: 7, fiber: 5.3, vitamins: 35, unit: '100g' },
    { id: 369, name: 'Currants (Red or White)', calories: 56, protein: 1.4, carbs: 14, fats: 0.2, sugar: 7, fiber: 4.3, vitamins: 70, unit: '100g' },
    { id: 370, name: 'Currants (Black)', calories: 63, protein: 1.4, carbs: 15, fats: 0.4, sugar: 7, fiber: 4.5, vitamins: 300, unit: '100g' },
    // More Common Vegetables
    { id: 371, name: 'Alfalfa Sprouts', calories: 23, protein: 4, carbs: 2, fats: 0.7, sugar: 0.2, fiber: 1.9, vitamins: 15, unit: '100g' },
    { id: 372, name: 'Mung Bean Sprouts', calories: 30, protein: 3, carbs: 6, fats: 0.2, sugar: 4, fiber: 1.8, vitamins: 20, unit: '100g' },
    { id: 373, name: 'Snow Peas (Raw)', calories: 42, protein: 2.8, carbs: 7.5, fats: 0.2, sugar: 4, fiber: 2.6, vitamins: 100, unit: '100g' },
    { id: 374, name: 'Sugar Snap Peas (Raw)', calories: 42, protein: 2.8, carbs: 7.5, fats: 0.2, sugar: 4, fiber: 2.6, vitamins: 100, unit: '100g' },
    { id: 375, name: 'Rhubarb (Raw)', calories: 21, protein: 0.9, carbs: 4.5, fats: 0.2, sugar: 1.1, fiber: 1.8, vitamins: 15, unit: '100g' },
    { id: 376, name: 'Radish (Red)', calories: 16, protein: 0.7, carbs: 3.4, fats: 0.1, sugar: 1.9, fiber: 1.6, vitamins: 25, unit: '100g' },
    { id: 377, name: 'Water Chestnuts (Canned)', calories: 50, protein: 0.6, carbs: 13, fats: 0.1, sugar: 2, fiber: 2.3, vitamins: 5, unit: '100g' },
    { id: 378, name: 'Bamboo Shoots (Canned)', calories: 19, protein: 1.7, carbs: 3.2, fats: 0.4, sugar: 1.5, fiber: 1.5, vitamins: 5, unit: '100g' },
    { id: 379, name: 'Hearts of Palm (Canned)', calories: 28, protein: 2.5, carbs: 4.6, fats: 0.6, sugar: 0, fiber: 2.4, vitamins: 15, unit: '100g' },
    { id: 380, name: 'Scallions (Green Onions)', calories: 32, protein: 1.8, carbs: 7.3, fats: 0.2, sugar: 2.3, fiber: 2.6, vitamins: 30, unit: '100g' },
    { id: 381, name: 'Chives (Raw)', calories: 30, protein: 3.3, carbs: 4.4, fats: 0.7, sugar: 1.9, fiber: 2.5, vitamins: 100, unit: '100g' },
    { id: 382, name: 'Parsley (Fresh)', calories: 36, protein: 3, carbs: 6.3, fats: 0.8, sugar: 0.8, fiber: 3.3, vitamins: 250, unit: '100g' },
    { id: 383, name: 'Cilantro (Fresh)', calories: 23, protein: 2.1, carbs: 3.7, fats: 0.5, sugar: 0.9, fiber: 2.8, vitamins: 45, unit: '100g' },
    { id: 384, name: 'Basil (Fresh)', calories: 23, protein: 3.2, carbs: 2.7, fats: 0.6, sugar: 0.3, fiber: 1.6, vitamins: 30, unit: '100g' },
    { id: 385, name: 'Dill (Fresh)', calories: 43, protein: 3.5, carbs: 7, fats: 1.1, sugar: 0, fiber: 2.1, vitamins: 150, unit: '100g' },
    // More Berries
    { id: 386, name: 'Cranberries (Frozen)', calories: 46, protein: 0.4, carbs: 12, fats: 0.1, sugar: 4, fiber: 4.6, vitamins: 25, unit: '100g' },
    { id: 387, name: 'Cloudberries (Raw)', calories: 51, protein: 2.4, carbs: 9, fats: 0.8, sugar: 6, fiber: 5.3, vitamins: 100, unit: '100g' },
    { id: 388, name: 'Huckleberries (Raw)', calories: 37, protein: 0.4, carbs: 9, fats: 0.1, sugar: 5, fiber: 2.8, vitamins: 15, unit: '100g' },
    { id: 389, name: 'Juniper Berries (Dried)', calories: 333, protein: 20, carbs: 40, fats: 15, sugar: 5, fiber: 10, vitamins: 5, unit: '100g' },
    // FINAL PRODUCE EXPANSION
    // More Squash & Gourd
    { id: 390, name: 'Kabocha Squash (Raw)', calories: 30, protein: 1, carbs: 7, fats: 0.1, sugar: 2, fiber: 1.5, vitamins: 80, unit: '100g' },
    { id: 391, name: 'Spaghetti Squash (Raw)', calories: 31, protein: 0.6, carbs: 7, fats: 0.6, sugar: 2.8, fiber: 1.5, vitamins: 15, unit: '100g' },
    { id: 392, name: 'Acorn Squash (Raw)', calories: 40, protein: 0.8, carbs: 10, fats: 0.1, sugar: 0, fiber: 1.5, vitamins: 25, unit: '100g' },
    { id: 393, name: 'Delicata Squash (Raw)', calories: 34, protein: 1, carbs: 8.5, fats: 0.1, sugar: 2.2, fiber: 1.2, vitamins: 40, unit: '100g' },
    { id: 394, name: 'Bottle Gourd (Lauki) (Raw)', calories: 14, protein: 0.6, carbs: 3.4, fats: 0, sugar: 2, fiber: 0.5, vitamins: 10, unit: '100g' },
    { id: 395, name: 'Ridge Gourd (Turiya) (Raw)', calories: 15, protein: 1.2, carbs: 3, fats: 0.1, sugar: 2, fiber: 1, vitamins: 15, unit: '100g' },
    // More Mushrooms
    { id: 396, name: 'Mushrooms (Shiitake) (Raw)', calories: 34, protein: 2.2, carbs: 6.8, fats: 0.5, sugar: 2.4, fiber: 2.5, vitamins: 20, unit: '100g' },
    { id: 397, name: 'Mushrooms (Oyster) (Raw)', calories: 33, protein: 3.3, carbs: 6, fats: 0.4, sugar: 1.1, fiber: 2.3, vitamins: 25, unit: '100g' },
    { id: 398, name: 'Mushrooms (Portobello) (Raw)', calories: 22, protein: 2.1, carbs: 3.9, fats: 0.4, sugar: 2.5, fiber: 1.3, vitamins: 15, unit: '100g' },
    { id: 399, name: 'Mushrooms (Porcini) (Dried)', calories: 280, protein: 30, carbs: 25, fats: 3, sugar: 5, fiber: 10, vitamins: 40, unit: '100g' },
    { id: 400, name: 'Mushrooms (Chanterelle) (Raw)', calories: 32, protein: 1.5, carbs: 6.9, fats: 0.5, sugar: 1.2, fiber: 3.8, vitamins: 30, unit: '100g' },
    { id: 401, name: 'Mushrooms (Enoki) (Raw)', calories: 37, protein: 2.7, carbs: 7.8, fats: 0.3, sugar: 0.2, fiber: 2.7, vitamins: 15, unit: '100g' },
    { id: 402, name: 'Mushrooms (King Oyster) (Raw)', calories: 35, protein: 3.3, carbs: 6.6, fats: 0.3, sugar: 1, fiber: 2.3, vitamins: 20, unit: '100g' },
    { id: 403, name: 'Mushrooms (Cremini) (Raw)', calories: 22, protein: 2.5, carbs: 3.3, fats: 0.1, sugar: 1.2, fiber: 0.6, vitamins: 15, unit: '100g' },
    // More Common Produce & Prep
    { id: 404, name: 'Corn (Sweet, Raw)', calories: 86, protein: 3.3, carbs: 19, fats: 1.4, sugar: 6.3, fiber: 2, vitamins: 10, unit: '100g' },
    { id: 405, name: 'Corn (Boiled)', calories: 96, protein: 3.4, carbs: 21, fats: 1.5, sugar: 4.5, fiber: 2.4, vitamins: 12, unit: '100g' },
    { id: 406, name: 'Corn (Grilled)', calories: 106, protein: 3.5, carbs: 22, fats: 2.5, sugar: 4.5, fiber: 2.6, vitamins: 12, unit: '100g' },
    { id: 407, name: 'Pumpkin (Raw)', calories: 26, protein: 1, carbs: 6.5, fats: 0.1, sugar: 2.8, fiber: 0.5, vitamins: 150, unit: '100g' },
    { id: 408, name: 'Pumpkin (Boiled)', calories: 20, protein: 0.7, carbs: 4.9, fats: 0.1, sugar: 2.1, fiber: 1.1, vitamins: 130, unit: '100g' },
    { id: 409, name: 'Okra (Raw)', calories: 33, protein: 1.9, carbs: 7, fats: 0.2, sugar: 1.2, fiber: 3.2, vitamins: 40, unit: '100g' },
    { id: 410, name: 'Okra (Fried)', calories: 155, protein: 2.5, carbs: 14, fats: 10, sugar: 1.5, fiber: 3.1, vitamins: 30, unit: '100g' },
    { id: 411, name: 'Radicchio (Raw)', calories: 23, protein: 1.4, carbs: 4.5, fats: 0.3, sugar: 0.6, fiber: 0.9, vitamins: 10, unit: '100g' },
    // More Fruits
    { id: 412, name: 'Star Apple (Caimito)', calories: 67, protein: 1, carbs: 15, fats: 0.5, sugar: 11, fiber: 2, vitamins: 15, unit: '100g' },
    { id: 413, name: 'Prickly Pear (Cactus Fruit)', calories: 41, protein: 0.7, carbs: 9.6, fats: 0.5, sugar: 0, fiber: 3.6, vitamins: 25, unit: '100g' },
    { id: 414, name: 'Tamarillo (Tree Tomato)', calories: 31, protein: 2, carbs: 3.8, fats: 0.4, sugar: 3.8, fiber: 3.3, vitamins: 40, unit: '100g' },
    { id: 415, name: 'Physalis (Cape Gooseberry)', calories: 53, protein: 1.9, carbs: 11.2, fats: 0.7, sugar: 0, fiber: 0, vitamins: 15, unit: '100g' },
    { id: 416, name: 'Quince (Raw)', calories: 57, protein: 0.4, carbs: 15.3, fats: 0.1, sugar: 0, fiber: 1.9, vitamins: 25, unit: '100g' },
    { id: 417, name: 'Medlar (Raw)', calories: 43, protein: 0.5, carbs: 10.6, fats: 0.2, sugar: 0, fiber: 0, vitamins: 10, unit: '100g' },
    // More Herbs
    { id: 418, name: 'Oregano (Fresh)', calories: 265, protein: 9, carbs: 69, fats: 4.3, sugar: 4, fiber: 42, vitamins: 15, unit: '100g' },
    { id: 419, name: 'Thyme (Fresh)', calories: 101, protein: 5.6, carbs: 24.5, fats: 1.7, sugar: 0, fiber: 14, vitamins: 200, unit: '100g' },
    { id: 420, name: 'Rosemary (Fresh)', calories: 131, protein: 3.3, carbs: 20.7, fats: 5.9, sugar: 0, fiber: 14.1, vitamins: 40, unit: '100g' },
    { id: 421, name: 'Sage (Fresh)', calories: 315, protein: 10.6, carbs: 60.7, fats: 12.7, sugar: 1.7, fiber: 40.3, vitamins: 50, unit: '100g' },
    { id: 422, name: 'Tarragon (Fresh)', calories: 295, protein: 22.8, carbs: 50.2, fats: 7.2, sugar: 0, fiber: 7.4, vitamins: 70, unit: '100g' },
    { id: 423, name: 'Mint (Fresh)', calories: 70, protein: 3.8, carbs: 14.9, fats: 0.9, sugar: 0, fiber: 8, vitamins: 45, unit: '100g' },
    { id: 424, name: 'Marjoram (Fresh)', calories: 271, protein: 12.7, carbs: 60.6, fats: 7, sugar: 4.1, fiber: 40.3, vitamins: 80, unit: '100g' }
];

// App State
const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snack 1', 'Snack 2'];
let dailyLog = [];
let adminProgram = [];
let publishedProgram = [];
let currentRole = 'trainer';
let currentAdminMeal = 'Breakfast';
let currentTrainerMeal = 'Breakfast';
const ADMIN_PASSWORD = '123'; // Default admin password
let dailyLimits = {
    calories: 2500,
    protein: 150,
    carbs: 300,
    fats: 80,
    satFat: 20,
    unsatFat: 50,
    transFat: 2,
    sugar: 50,
    fiber: 30,
    vitamins: 100,
    weight: 70,
    height: 170,
    gender: 'male',
    activity: 120,
    trainDays: 3,
    trainDifficulty: 5,
    monthlySteps: 150000,
    dailyActiveLevel: 5,
    age: 25,
    bmr: 1600,
    weeklyGoal: 0.75
};

let trainers = [{ 
    id: Date.now(), 
    name: 'Default Trainer', 
    dailyLog: [],
    dailyLimits: { ...dailyLimits },
    lastAdoptedTimestamp: 0
}];
let activeTrainerId = trainers[0].id;

// Global Functions
function toggleModal(modal, show) {
    if (!modal) return;
    if (show) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            const div = modal.querySelector('div');
            if (div) div.classList.remove('scale-95');
        }, 10);
    } else {
        modal.classList.add('opacity-0');
        const div = modal.querySelector('div');
        if (div) div.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            const form = modal.querySelector('form');
            if (form) form.reset();
        }, 300);
    }
}

function updateTotals() {
    const totalCaloriesDisplay = document.getElementById('total-calories');
    if (!totalCaloriesDisplay) return;

    const totals = dailyLog.reduce((acc, item) => {
        if (!item.checked) return acc;
        const factor = item.amount / 100;
        return {
            calories: acc.calories + (item.food.calories * factor),
            protein: acc.protein + (item.food.protein * factor),
            carbs: acc.carbs + (item.food.carbs * factor),
            fats: acc.fats + (item.food.fats * factor),
            satFat: acc.satFat + ((item.food.satFat || 0) * factor),
            unsatFat: acc.unsatFat + ((item.food.unsatFat || 0) * factor),
            transFat: acc.transFat + ((item.food.transFat || 0) * factor),
            sugar: acc.sugar + ((item.food.sugar || 0) * factor),
            fiber: acc.fiber + ((item.food.fiber || 0) * factor),
            vitamins: acc.vitamins + ((item.food.vitamins || 0) * factor)
        };
    }, { calories: 0, protein: 0, carbs: 0, fats: 0, satFat: 0, unsatFat: 0, transFat: 0, sugar: 0, fiber: 0, vitamins: 0 });

    totalCaloriesDisplay.textContent = Math.round(totals.calories).toLocaleString();
    
    const elements = {
        'total-protein': totals.protein,
        'total-carbs': totals.carbs,
        'total-fats': totals.fats,
        'total-satFat': totals.satFat,
        'total-unsatFat': totals.unsatFat,
        'total-transFat': totals.transFat,
        'total-sugar': totals.sugar,
        'total-fiber': totals.fiber,
        'total-vitamins': totals.vitamins
    };

    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = Math.round(value) + (id === 'total-vitamins' ? '%' : 'g');
    }

    checkLimit(totals.calories, dailyLimits.calories, 'total-calories', 'calorie-warning', 'calories-card');
    checkLimit(totals.protein, dailyLimits.protein, 'total-protein', 'protein-warning');
    checkLimit(totals.carbs, dailyLimits.carbs, 'total-carbs', 'carbs-warning');
    checkLimit(totals.fats, dailyLimits.fats, 'total-fats', 'fats-warning');
    checkLimit(totals.satFat, dailyLimits.satFat, 'total-satFat', 'satFat-warning');
    checkLimit(totals.unsatFat, dailyLimits.unsatFat, 'total-unsatFat', 'unsatFat-warning');
    checkLimit(totals.transFat, dailyLimits.transFat, 'total-transFat', 'transFat-warning');
    checkLimit(totals.sugar, dailyLimits.sugar, 'total-sugar', 'sugar-warning');
    checkLimit(totals.fiber, dailyLimits.fiber, 'total-fiber', 'fiber-warning');
    checkLimit(totals.vitamins, dailyLimits.vitamins, 'total-vitamins', 'vitamins-warning');

    const totalMacros = totals.protein + totals.carbs + totals.fats;
    if (totalMacros > 0) {
        const pPercent = Math.round((totals.protein / totalMacros) * 100);
        const cPercent = Math.round((totals.carbs / totalMacros) * 100);
        const fPercent = 100 - pPercent - cPercent;
        
        const pEl = document.getElementById('protein-percent');
        const cEl = document.getElementById('carbs-percent');
        const fEl = document.getElementById('fats-percent');
        const pBar = document.getElementById('protein-bar');
        const cBar = document.getElementById('carbs-bar');
        const fBar = document.getElementById('fats-bar');

        if (pEl) pEl.textContent = pPercent + '%';
        if (cEl) cEl.textContent = cPercent + '%';
        if (fEl) fEl.textContent = fPercent + '%';
        if (pBar) pBar.style.width = pPercent + '%';
        if (cBar) cBar.style.width = cPercent + '%';
        if (fBar) fBar.style.width = fPercent + '%';
    }

    updateProgressBar(totals.sugar, dailyLimits.sugar, 'sugar-percent', 'sugar-bar');
    updateProgressBar(totals.fiber, dailyLimits.fiber, 'fiber-percent', 'fiber-bar');
    updateProgressBar(totals.vitamins, dailyLimits.vitamins, 'vitamins-percent', 'vitamins-bar');

    const countEl = document.getElementById('item-count');
    const emptyEl = document.getElementById('empty-state');
    if (countEl) countEl.textContent = `${dailyLog.length} items`;
    if (emptyEl) emptyEl.style.display = dailyLog.length === 0 ? 'flex' : 'none';
}

function updateProgressBar(current, limit, percentId, barId) {
    const percentEl = document.getElementById(percentId);
    const barEl = document.getElementById(barId);
    if (!percentEl || !barEl) return;
    const percentage = Math.min(Math.round((current / limit) * 100), 100);
    percentEl.textContent = percentage + '%';
    barEl.style.width = percentage + '%';
}

function checkLimit(current, limit, displayId, warningId, cardId = null) {
    const displayEl = document.getElementById(displayId);
    const warningEl = document.getElementById(warningId);
    if (!displayEl || !warningEl) return;

    if (current > limit) {
        displayEl.classList.add('text-rose-600');
        displayEl.classList.remove('text-slate-900', 'text-slate-600');
        warningEl.classList.remove('hidden');
        if (cardId) {
            const cardEl = document.getElementById(cardId);
            if (cardEl) {
                cardEl.classList.add('border-rose-200', 'bg-rose-50');
                cardEl.classList.remove('bg-white', 'border-slate-100');
            }
        }
    } else {
        displayEl.classList.remove('text-rose-600');
        displayEl.classList.add(cardId ? 'text-slate-900' : 'text-slate-600');
        warningEl.classList.add('hidden');
        if (cardId) {
            const cardEl = document.getElementById(cardId);
            if (cardEl) {
                cardEl.classList.remove('border-rose-200', 'bg-rose-50');
                cardEl.classList.add('bg-white', 'border-slate-100');
            }
        }
    }
}

function renderFoodList() {
    const foodList = document.getElementById('food-list');
    if (!foodList) return;

    if (dailyLog.length === 0) {
        foodList.innerHTML = `
            <div id="empty-state" class="flex flex-col items-center justify-center h-[400px] text-slate-400 p-8 text-center">
                <div class="p-4 bg-slate-50 rounded-full mb-4"><i data-lucide="plus-circle" class="w-12 h-12 opacity-50"></i></div>
                <h3 class="font-semibold text-slate-600 text-lg">No food added yet</h3>
            </div>`;
        lucide.createIcons();
        updateTotals();
        return;
    }

    // Group items by meal
    const grouped = mealCategories.reduce((acc, meal) => {
        acc[meal] = dailyLog.filter(item => item.meal === meal);
        return acc;
    }, {});

    // Items with no meal (added manually by user)
    const noMeal = dailyLog.filter(item => !item.meal);

    let html = '';

    // Render grouped meals
    mealCategories.forEach(meal => {
        const items = grouped[meal];
        if (items.length > 0) {
            html += `
                <div class="p-4 bg-slate-50/50 border-b border-slate-100">
                    <h4 class="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                        <i data-lucide="clock" class="w-3 h-3"></i> ${meal}
                    </h4>
                </div>
            `;
            items.forEach(entry => {
                html += renderFoodItem(entry, dailyLog.indexOf(entry));
            });
        }
    });

    // Render items with no meal
    if (noMeal.length > 0) {
        if (html !== '') {
            html += `
                <div class="p-4 bg-slate-50/50 border-b border-slate-100">
                    <h4 class="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2">
                        <i data-lucide="plus" class="w-3 h-3"></i> Uncategorized
                    </h4>
                </div>
            `;
        }
        noMeal.forEach(entry => {
            html += renderFoodItem(entry, dailyLog.indexOf(entry));
        });
    }

    foodList.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    updateTotals();
}

function renderFoodItem(entry, index) {
    const factor = entry.amount / 100;
    const isChecked = entry.checked || false;
    return `
        <div class="p-6 flex flex-col md:flex-row md:items-center justify-between group hover:bg-slate-50 transition-colors gap-4 border-b border-slate-50 last:border-none ${!isChecked ? 'opacity-60' : ''}">
            <div class="flex items-center gap-4 flex-1">
                <button onclick="toggleCheck(${index})" class="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 text-transparent hover:border-emerald-300'}">
                    <i data-lucide="check" class="w-4 h-4"></i>
                </button>
                <div class="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                    <i data-lucide="apple" class="w-6 h-6"></i>
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-slate-900">${entry.food.name}</h4>
                    <div class="flex items-center gap-2 mt-1">
                        <input type="number" value="${entry.amount}" 
                            onchange="updateAmount(${index}, this.value)"
                            class="w-20 px-2 py-1 bg-white border border-slate-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                            min="1">
                        <span class="text-sm text-slate-500">g</span>
                        <span class="text-slate-300 mx-1">•</span>
                        <span class="text-sm font-semibold text-emerald-600">${Math.round(entry.food.calories * factor)} kcal</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between md:justify-end gap-6">
                <div class="grid grid-cols-3 md:flex gap-4 text-[10px] md:text-xs font-medium uppercase tracking-wider text-slate-400">
                    <div class="text-center">
                        <span class="block text-slate-600 font-bold">${Math.round(entry.food.protein * factor)}g</span>
                        P
                    </div>
                    <div class="text-center">
                        <span class="block text-slate-600 font-bold">${Math.round(entry.food.carbs * factor)}g</span>
                        C
                    </div>
                    <div class="text-center">
                        <span class="block text-slate-600 font-bold">${Math.round(entry.food.fats * factor)}g</span>
                        F
                    </div>
                    <div class="text-center">
                        <span class="block text-slate-600 font-bold">${Math.round((entry.food.sugar || 0) * factor)}g</span>
                        S
                    </div>
                    <div class="text-center">
                        <span class="block text-slate-600 font-bold">${Math.round((entry.food.fiber || 0) * factor)}g</span>
                        Fi
                    </div>
                    <div class="text-center">
                        <span class="block text-slate-600 font-bold">${Math.round((entry.food.vitamins || 0) * factor)}%</span>
                        V
                    </div>
                </div>
                <button onclick="removeItem(${index})" class="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `;
}

function updateAmount(index, newAmount) {
    const amount = parseFloat(newAmount);
    if (amount > 0) {
        dailyLog[index].amount = amount;
        const currentTrainer = trainers.find(t => t.id === activeTrainerId);
        if (currentTrainer) currentTrainer.dailyLog = [...dailyLog];
        saveTrainers();
        renderFoodList();
    }
}

function addItem(foodId) {
    const food = foodDatabase.find(f => f.id === foodId);
    if (food) {
        dailyLog.push({ food: food, amount: 100, checked: true, meal: currentTrainerMeal });
        const currentTrainer = trainers.find(t => t.id === activeTrainerId);
        if (currentTrainer) currentTrainer.dailyLog = [...dailyLog];
        saveTrainers();
        renderFoodList();
        const searchResults = document.getElementById('search-results');
        const searchInput = document.getElementById('food-search');
        if (searchResults) searchResults.classList.add('hidden');
        if (searchInput) searchInput.value = '';
    }
}

function removeItem(index) {
    dailyLog.splice(index, 1);
    const currentTrainer = trainers.find(t => t.id === activeTrainerId);
    if (currentTrainer) currentTrainer.dailyLog = [...dailyLog];
    saveTrainers();
    renderFoodList();
}

window.toggleCheck = (index) => {
    dailyLog[index].checked = !dailyLog[index].checked;
    const currentTrainer = trainers.find(t => t.id === activeTrainerId);
    if (currentTrainer) currentTrainer.dailyLog = [...dailyLog];
    saveTrainers();
    renderFoodList();
    loadPublishedProgram(); // Check if this specific trainer needs an update notification
};

function setRole(role) {
    console.log('Switching to role:', role);
    currentRole = role;
    
    const elements = {
        overlay: document.getElementById('login-overlay'),
        logout: document.getElementById('logout-btn'),
        switcher: document.getElementById('role-switcher'),
        dashboard: document.getElementById('admin-dashboard'),
        view: document.getElementById('user-view'),
        uBtn: document.getElementById('user-role-btn'), // Trainer btn
        aBtn: document.getElementById('admin-role-btn')
    };

    if (elements.overlay) elements.overlay.classList.add('hidden');
    if (elements.logout) elements.logout.classList.remove('hidden');
    if (elements.switcher) elements.switcher.classList.remove('hidden');

    if (role === 'admin') {
        if (elements.dashboard) elements.dashboard.classList.remove('hidden');
        if (elements.view) elements.view.classList.add('hidden');
        if (elements.uBtn) {
            elements.uBtn.classList.remove('bg-white', 'text-emerald-600', 'shadow-sm');
            elements.uBtn.classList.add('text-slate-500');
        }
        if (elements.aBtn) {
            elements.aBtn.classList.add('bg-white', 'text-emerald-600', 'shadow-sm');
            elements.aBtn.classList.remove('text-slate-500');
        }
    } else {
        if (elements.dashboard) elements.dashboard.classList.add('hidden');
        if (elements.view) elements.view.classList.remove('hidden');
        if (elements.uBtn) {
            elements.uBtn.classList.add('bg-white', 'text-emerald-600', 'shadow-sm');
            elements.uBtn.classList.remove('text-slate-500');
        }
        if (elements.aBtn) {
            elements.aBtn.classList.remove('bg-white', 'text-emerald-600', 'shadow-sm');
            elements.aBtn.classList.add('text-slate-500');
        }
    }
    updateTotals();
}

function loadPublishedProgram() {
    const published = localStorage.getItem('publishedProgram');
    if (published) {
        const data = JSON.parse(published);
        // Handle legacy array format or new object format
        publishedProgram = Array.isArray(data) ? data : (data.items || []);
        const updatedAt = data.updatedAt || 0;
        
        const currentTrainer = trainers.find(t => t.id === activeTrainerId);
        const programNotification = document.getElementById('program-notification');
        
        if (programNotification && publishedProgram.length > 0) {
            const lastAdopted = currentTrainer ? (currentTrainer.lastAdoptedTimestamp || 0) : 0;
            
            if (lastAdopted === 0) {
                // Never adopted
                document.getElementById('program-notif-title').textContent = 'New Daily Program Available!';
                document.getElementById('program-notif-desc').textContent = 'Adopt the plan tailored to your goals.';
                programNotification.classList.remove('hidden');
            } else if (updatedAt > lastAdopted) {
                // Program was edited after adoption
                document.getElementById('program-notif-title').textContent = 'Program Updated by Admin!';
                document.getElementById('program-notif-desc').textContent = 'The master plan has changed. Re-adopt to see updates.';
                programNotification.classList.remove('hidden');
            } else {
                programNotification.classList.add('hidden');
            }
        }
    }
}

function saveDailyLimits() {
    const currentTrainer = trainers.find(t => t.id === activeTrainerId);
    if (currentTrainer) {
        currentTrainer.dailyLimits = { ...dailyLimits };
        saveTrainers();
    }
}

function loadDailyLimits() {
    const currentTrainer = trainers.find(t => t.id === activeTrainerId);
    if (currentTrainer && currentTrainer.dailyLimits) {
        dailyLimits = { ...currentTrainer.dailyLimits };
    } else {
        // Fallback to global if trainer doesn't have specific ones yet
        const saved = localStorage.getItem('dailyLimits');
        if (saved) dailyLimits = JSON.parse(saved);
    }
    
    // Update displays
    for (const [key, value] of Object.entries(dailyLimits)) {
        const display = document.getElementById('limit-display-' + key);
        if (display) {
            if (key === 'vitamins') display.textContent = value + '%';
            else if (key === 'calories' || key === 'bmr') display.textContent = value + ' kcal';
            else display.textContent = value + 'g';
        }
    }
}

function saveTrainers() {
    localStorage.setItem('nutriTrackTrainers', JSON.stringify(trainers));
    localStorage.setItem('nutriTrackActiveTrainerId', activeTrainerId.toString());
}

function loadTrainers() {
    const savedTrainers = localStorage.getItem('nutriTrackTrainers');
    const savedActiveId = localStorage.getItem('nutriTrackActiveTrainerId');
    
    if (savedTrainers) {
        trainers = JSON.parse(savedTrainers);
        if (savedActiveId) {
            activeTrainerId = parseInt(savedActiveId);
        } else {
            activeTrainerId = trainers[0].id;
        }
        
        const activeTrainer = trainers.find(t => t.id === activeTrainerId);
        if (activeTrainer) {
            dailyLog = activeTrainer.dailyLog || [];
        }
    }
    renderTrainerSelect();
    loadPublishedProgram(); // Check for notifications on startup
}

function renderTrainerSelect() {
    const select = document.getElementById('trainer-select');
    if (!select) return;
    
    select.innerHTML = trainers.map(t => `
        <option value="${t.id}" ${t.id === activeTrainerId ? 'selected' : ''}>${t.name}</option>
    `).join('');
}

window.switchTrainer = (id) => {
    const newId = parseInt(id);
    // Save current log and limits to old trainer
    const currentTrainerIndex = trainers.findIndex(t => t.id === activeTrainerId);
    if (currentTrainerIndex !== -1) {
        trainers[currentTrainerIndex].dailyLog = [...dailyLog];
        trainers[currentTrainerIndex].dailyLimits = { ...dailyLimits };
    }
    
    activeTrainerId = newId;
    const nextTrainer = trainers.find(t => t.id === activeTrainerId);
    if (nextTrainer) {
        dailyLog = nextTrainer.dailyLog || [];
        loadDailyLimits(); // Reload UI with this trainer's limits
    }
    
    saveTrainers();
    renderFoodList();
};

window.addNewTrainer = () => {
    toggleModal(document.getElementById('add-trainer-modal'), true);
};

window.adjustLogToGoals = () => {
    if (dailyLog.length === 0) return alert('Add some food to the log first before adjusting portions!');
    
    const targetCalories = dailyLimits.calories;
    const targetProtein = dailyLimits.protein;
    
    // 1. Calculate current totals of all items (regardless of checked state for scaling logic)
    const currentTotals = dailyLog.reduce((acc, item) => {
        const factor = item.amount / 100;
        return {
            calories: acc.calories + (item.food.calories * factor),
            protein: acc.protein + (item.food.protein * factor)
        };
    }, { calories: 0, protein: 0 });

    if (currentTotals.calories === 0) return;

    // 2. Calculate deficit/scaling needs
    const proteinDeficit = Math.max(0, targetProtein - currentTotals.protein);
    
    if (confirm(`Adjust all portions to hit your ${Math.round(targetCalories)} kcal target? High protein items will be prioritized if you have a protein deficit.`)) {
        // 3. Apply scaling
        dailyLog.forEach(item => {
            // Base scaling factor for calories
            let scaleFactor = targetCalories / currentTotals.calories;
            
            // Smart scaling for protein if needed
            if (proteinDeficit > 0 && item.food.protein > 15) {
                // Boost protein-rich items by 20% more than others in the scaling process
                scaleFactor *= 1.2;
            }
            
            item.amount = Math.round(item.amount * scaleFactor);
            // After adjustment, check the item so it counts towards the new goal
            item.checked = true; 
        });

        // 4. Final normalization to ensure we don't overshoot calories due to protein boosting
        const newTotalCals = dailyLog.reduce((acc, item) => acc + (item.food.calories * (item.amount / 100)), 0);
        const finalNormalization = targetCalories / newTotalCals;
        
        dailyLog.forEach(item => {
            item.amount = Math.max(1, Math.round(item.amount * finalNormalization));
        });

        const currentTrainer = trainers.find(t => t.id === activeTrainerId);
        if (currentTrainer) currentTrainer.dailyLog = [...dailyLog];
        
        saveTrainers();
        renderFoodList();
    }
};

window.adoptProgram = () => {
    if (!publishedProgram.length) {
        alert('No program has been published by the admin yet.');
        return;
    }
    
    const targetCalories = dailyLimits.calories;
    const targetProtein = dailyLimits.protein;
    
    // 1. Separate items
    const fixedItems = publishedProgram.filter(f => f.fixedAmount !== null);
    const autoItems = publishedProgram.filter(f => f.fixedAmount === null);
    
    // 2. Calculate current fixed footprint
    let totalFixedCalories = fixedItems.reduce((sum, f) => sum + (f.calories * (f.fixedAmount / 100)), 0);
    let fixedScaleFactor = 1;

    // If fixed items exceed 80% of goal, scale them down to leave room for variety
    if (totalFixedCalories > targetCalories * 0.8 && targetCalories > 0) {
        fixedScaleFactor = (targetCalories * 0.7) / totalFixedCalories;
        totalFixedCalories = targetCalories * 0.7;
    }

    const remainingCalories = Math.max(0, targetCalories - totalFixedCalories);
    
    // 3. Calculate protein from fixed items
    const proteinFromFixed = fixedItems.reduce((sum, f) => sum + (f.protein * (f.fixedAmount * fixedScaleFactor / 100)), 0);
    const proteinDeficit = Math.max(0, targetProtein - proteinFromFixed);

    if (confirm(`Adopt program? Portions will be auto-calculated to hit your ${Math.round(targetCalories)} kcal and ${Math.round(targetProtein)}g protein goals.`)) {
        dailyLog = [];
        
        // 4. Add Fixed Items (possibly scaled)
        fixedItems.forEach(f => {
            dailyLog.push({
                food: f,
                amount: Math.round(f.fixedAmount * fixedScaleFactor),
                meal: f.meal,
                checked: false
            });
        });

        // 5. Smart Scale Auto Items
        if (autoItems.length > 0 && remainingCalories > 0) {
            const autoItemsWithSmartWeights = autoItems.map(f => {
                let smartWeight = f.programWeight || 1;
                if (proteinDeficit > 0 && f.protein > 15) {
                    smartWeight *= 1.5;
                }
                return { ...f, smartWeight };
            });

            const totalSmartWeight = autoItemsWithSmartWeights.reduce((sum, f) => sum + f.smartWeight, 0);

            autoItemsWithSmartWeights.forEach(f => {
                const shareOfCals = (f.smartWeight / totalSmartWeight) * remainingCalories;
                const foodCals = f.calories > 0 ? f.calories : 1; 
                const requiredAmount = Math.round((shareOfCals / foodCals) * 100);
                
                if (requiredAmount > 0) {
                    dailyLog.push({
                        food: f,
                        amount: requiredAmount,
                        meal: f.meal,
                        checked: false
                    });
                }
            });
        }

        renderFoodList();
        const currentTrainer = trainers.find(t => t.id === activeTrainerId);
        if (currentTrainer) {
            currentTrainer.dailyLog = [...dailyLog];
            currentTrainer.lastAdoptedTimestamp = Date.now();
        }
        saveTrainers();
        
        const notification = document.getElementById('program-notification');
        if (notification) notification.classList.add('hidden');
        
        const logContainer = document.getElementById('food-list');
        if (logContainer) logContainer.scrollIntoView({ behavior: 'smooth' });
    }
};

window.openRenameTrainerModal = () => {
    const trainer = trainers.find(t => t.id === activeTrainerId);
    if (trainer) {
        const input = document.getElementById('new-trainer-name');
        if (input) input.value = trainer.name;
        toggleModal(document.getElementById('rename-trainer-modal'), true);
    }
};

function renderAdminProgram() {
    const adminProgramList = document.getElementById('admin-program-list');
    const programCountDisplay = document.getElementById('program-count');
    const totalsContainer = document.getElementById('admin-program-totals');
    
    if (programCountDisplay) programCountDisplay.textContent = `${adminProgram.length} items`;
    
    if (!adminProgramList) return;

    if (adminProgram.length === 0) {
        adminProgramList.innerHTML = `
            <div class="text-slate-500 text-sm text-center py-12">
                <i data-lucide="package-plus" class="w-12 h-12 mx-auto mb-4 opacity-20"></i>
                No foods added to the program yet
            </div>`;
        if (totalsContainer) totalsContainer.classList.add('hidden');
        lucide.createIcons();
        return;
    }

    // Calculate totals for fixed items
    const totals = adminProgram.reduce((acc, item) => {
        if (item.fixedAmount) {
            const factor = item.fixedAmount / 100;
            return {
                calories: acc.calories + (item.calories * factor),
                protein: acc.protein + (item.protein * factor),
                carbs: acc.carbs + (item.carbs * factor),
                fats: acc.fats + (item.fats * factor),
                sugar: acc.sugar + ((item.sugar || 0) * factor),
                fiber: acc.fiber + ((item.fiber || 0) * factor),
                vitamins: acc.vitamins + ((item.vitamins || 0) * factor)
            };
        }
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, fats: 0, sugar: 0, fiber: 0, vitamins: 0 });

    if (totalsContainer) {
        if (totals.calories > 0) {
            totalsContainer.classList.remove('hidden');
            document.getElementById('admin-total-calories').textContent = Math.round(totals.calories);
            document.getElementById('admin-total-protein').textContent = Math.round(totals.protein);
            document.getElementById('admin-total-carbs').textContent = Math.round(totals.carbs);
            document.getElementById('admin-total-fats').textContent = Math.round(totals.fats);
            document.getElementById('admin-total-sugar').textContent = Math.round(totals.sugar);
            document.getElementById('admin-total-fiber').textContent = Math.round(totals.fiber);
            document.getElementById('admin-total-vitamins').textContent = Math.round(totals.vitamins);
        } else {
            totalsContainer.classList.add('hidden');
        }
    }

    // Group items by meal
    const grouped = mealCategories.reduce((acc, meal) => {
        acc[meal] = adminProgram.filter(item => item.meal === meal);
        return acc;
    }, {});

    adminProgramList.innerHTML = mealCategories.map(meal => {
        const items = grouped[meal];
        if (items.length === 0) return '';
        return `
            <div class="space-y-3 mb-6 last:mb-0">
                <h4 class="text-xs font-black uppercase text-slate-500 tracking-widest flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    ${meal}
                </h4>
                ${items.map(food => `
                    <div class="flex items-center justify-between bg-slate-800/50 p-4 rounded-2xl border border-slate-700 group hover:border-emerald-500/50 transition-all">
                        <div class="flex items-center gap-4">
                            <div class="p-3 bg-slate-700 rounded-xl text-emerald-400">
                                <i data-lucide="utensils" class="w-5 h-5"></i>
                            </div>
                            <div>
                                <span class="text-white font-bold block">${food.name}</span>
                                <span class="text-[10px] text-slate-500">
                                    ${food.fixedAmount 
                                        ? `<span class="text-emerald-400">Total: ${Math.round(food.calories * (food.fixedAmount/100))} kcal | ${Math.round(food.protein * (food.fixedAmount/100))}g Protein</span>` 
                                        : `Base: ${food.calories} kcal/100g`}
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center gap-6">
                            <div class="flex flex-col items-end">
                                <label class="text-[10px] uppercase text-slate-500 font-bold mb-1">Food Weight (g)</label>
                                <div class="flex items-center bg-slate-700 rounded-lg px-2 py-1 border border-slate-600 focus-within:border-emerald-500">
                                    <input type="number" 
                                        value="${food.fixedAmount || ''}" 
                                        onchange="updateProgramAmount(${food.id}, this.value)"
                                        placeholder="Auto"
                                        class="bg-transparent text-white text-xs outline-none w-16 text-right">
                                    <span class="text-slate-500 text-[10px] ml-1">g</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-end ${food.fixedAmount ? 'opacity-30 pointer-events-none' : ''}">
                                <label class="text-[10px] uppercase text-slate-500 font-bold mb-1">Priority</label>
                                <select onchange="updateProgramWeight(${food.id}, this.value)" class="bg-slate-700 text-white text-xs rounded-lg px-2 py-1 outline-none border border-slate-600 focus:border-emerald-500">
                                    <option value="0.5" ${food.programWeight === 0.5 ? 'selected' : ''}>Low</option>
                                    <option value="1" ${food.programWeight === 1 ? 'selected' : ''}>Normal</option>
                                    <option value="2" ${food.programWeight === 2 ? 'selected' : ''}>High</option>
                                </select>
                            </div>
                            <button onclick="removeFromProgram(${food.id})" class="p-2 text-slate-500 hover:text-rose-400 transition-colors">
                                <i data-lucide="trash-2" class="w-5 h-5"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

window.setAdminMeal = (meal) => {
    currentAdminMeal = meal;
    document.querySelectorAll('.meal-btn').forEach(btn => {
        btn.classList.remove('bg-emerald-500', 'text-white');
        btn.classList.add('text-slate-400');
    });
    const activeBtn = document.getElementById(`meal-btn-${meal.replace(' ', '-')}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-400');
        activeBtn.classList.add('bg-emerald-500', 'text-white');
    }
};

window.setTrainerMeal = (meal) => {
    currentTrainerMeal = meal;
    document.querySelectorAll('.trainer-meal-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-emerald-600', 'shadow-sm');
        btn.classList.add('text-slate-500');
    });
    const activeBtn = document.getElementById(`trainer-meal-btn-${meal.replace(' ', '-')}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-500');
        activeBtn.classList.add('bg-white', 'text-emerald-600', 'shadow-sm');
    }
};

window.addToProgram = (foodId) => {
    const food = foodDatabase.find(f => f.id === foodId);
    if (food) {
        // Find existing or add new
        const existing = adminProgram.find(item => item.id === foodId && item.meal === currentAdminMeal);
        if (!existing) {
            adminProgram.push({ 
                ...food, 
                programWeight: 1, 
                fixedAmount: null, 
                meal: currentAdminMeal 
            });
            renderAdminProgram();
            const adminSearchInput = document.getElementById('admin-food-search');
            const adminSearchResults = document.getElementById('admin-search-results');
            if (adminSearchInput) adminSearchInput.value = '';
            if (adminSearchResults) adminSearchResults.classList.add('hidden');
        }
    }
};

window.updateProgramWeight = (foodId, weight) => {
    const item = adminProgram.find(f => f.id === foodId);
    if (item) {
        item.programWeight = parseFloat(weight) || 1;
    }
};

window.updateProgramAmount = (foodId, amount) => {
    const item = adminProgram.find(f => f.id === foodId);
    if (item) {
        const val = parseFloat(amount);
        item.fixedAmount = isNaN(val) || val <= 0 ? null : val;
        renderAdminProgram();
    }
};

window.removeFromProgram = (foodId) => {
    adminProgram = adminProgram.filter(item => item.id !== foodId);
    renderAdminProgram();
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        console.error('Lucide icons failed to load:', e);
    }

    // Set Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.textContent = new Date().toLocaleDateString('en-US', options);

    // Attach Role Listeners
    const roles = {
        'login-user': 'trainer',
        'login-admin': 'admin',
        'user-role-btn': 'trainer',
        'admin-role-btn': 'admin'
    };

    for (const [id, role] of Object.entries(roles)) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (role === 'admin') {
                    toggleModal(document.getElementById('admin-password-modal'), true);
                    const input = document.getElementById('admin-password-input');
                    if (input) {
                        input.value = '';
                        input.focus();
                    }
                    const error = document.getElementById('password-error');
                    if (error) error.classList.add('hidden');
                } else {
                    setRole(role);
                }
            });
        }
    }

    const adminPasswordForm = document.getElementById('admin-password-form');
    if (adminPasswordForm) {
        adminPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('admin-password-input');
            const error = document.getElementById('password-error');
            if (input.value === ADMIN_PASSWORD) {
                toggleModal(document.getElementById('admin-password-modal'), false);
                setRole('admin');
            } else {
                if (error) error.classList.remove('hidden');
                input.value = '';
                input.focus();
            }
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const overlay = document.getElementById('login-overlay');
            const logout = document.getElementById('logout-btn');
            const switcher = document.getElementById('role-switcher');
            const dashboard = document.getElementById('admin-dashboard');
            const userView = document.getElementById('user-view');
            if (overlay) overlay.classList.remove('hidden');
            if (logout) logout.classList.add('hidden');
            if (switcher) switcher.classList.add('hidden');
            if (dashboard) dashboard.classList.add('hidden');
            if (userView) userView.classList.add('hidden');
        });
    }

    // Admin Search
    const adminSearchInput = document.getElementById('admin-food-search');
    if (adminSearchInput) adminSearchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const results = document.getElementById('admin-search-results');
        if (!results) return;
        if (term.length < 1) {
            results.classList.add('hidden');
            return;
        }
        const matches = foodDatabase.filter(f => f.name.toLowerCase().includes(term));
        results.innerHTML = matches.length > 0 ? matches.map(food => `
            <div onclick="addToProgram(${food.id})" class="p-4 hover:bg-slate-700 cursor-pointer flex items-center justify-between transition-colors border-b border-slate-700 last:border-none">
                <span class="text-white text-sm font-medium">${food.name}</span>
                <span class="text-xs text-slate-500">${food.calories} kcal</span>
            </div>
        `).join('') : '<div class="p-4 text-slate-500 text-sm text-center">No food found</div>';
        results.classList.remove('hidden');
    });

    const saveProgramBtn = document.getElementById('save-program');
    if (saveProgramBtn) saveProgramBtn.addEventListener('click', () => {
        if (adminProgram.length === 0) return alert('Add foods first.');
        const publishedData = {
            items: adminProgram,
            updatedAt: Date.now()
        };
        localStorage.setItem('publishedProgram', JSON.stringify(publishedData));
        alert('Program published successfully!');
        loadPublishedProgram();
    });

    const loadPublishedBtn = document.getElementById('load-published');
    if (loadPublishedBtn) loadPublishedBtn.addEventListener('click', () => {
        const published = localStorage.getItem('publishedProgram');
        if (published) {
            const data = JSON.parse(published);
            const items = Array.isArray(data) ? data : (data.items || []);
            if (items.length > 0) {
                if (confirm('Load currently published program into the editor? This will overwrite your current draft.')) {
                    adminProgram = JSON.parse(JSON.stringify(items));
                    renderAdminProgram();
                }
            } else {
                alert('No published program found.');
            }
        } else {
            alert('No published program found.');
        }
    });

    // Custom Food and Limits
    const forms = {
        'custom-food-form': (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const amount = parseFloat(formData.get('custom-amount'));
            const factor = 100 / amount;
            const customFood = {
                id: Date.now(),
                name: formData.get('custom-name'),
                calories: parseFloat(formData.get('custom-calories')) * factor,
                protein: parseFloat(formData.get('custom-protein')) * factor,
                carbs: parseFloat(formData.get('custom-carbs')) * factor,
                fats: parseFloat(formData.get('custom-fats')) * factor,
                satFat: parseFloat(formData.get('custom-satFat')) * factor,
                unsatFat: parseFloat(formData.get('custom-unsatFat')) * factor,
                transFat: parseFloat(formData.get('custom-transFat')) * factor,
                sugar: parseFloat(formData.get('custom-sugar')) * factor,
                fiber: parseFloat(formData.get('custom-fiber')) * factor,
                vitamins: parseFloat(formData.get('custom-vitamins')) * factor,
                unit: '100g'
            };
            if (currentRole === 'admin') {
                adminProgram.push({ ...customFood, programWeight: 1, fixedAmount: null });
                foodDatabase.push(customFood);
                renderAdminProgram();
            } else {
                dailyLog.push({ food: customFood, amount: amount, checked: true });
                const currentTrainer = trainers.find(t => t.id === activeTrainerId);
                if (currentTrainer) currentTrainer.dailyLog = [...dailyLog];
                saveTrainers();
                renderFoodList();
            }
            toggleModal(document.getElementById('custom-food-modal'), false);
        },
        'daily-limits-form': (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            for (const key of Object.keys(dailyLimits)) {
                const val = formData.get('limit-' + key);
                if (key === 'gender') {
                    dailyLimits[key] = val;
                } else {
                    dailyLimits[key] = parseFloat(val) || 0;
                }
                
                const display = document.getElementById('limit-display-' + key);
                if (display) {
                    if (key === 'vitamins') display.textContent = dailyLimits[key] + '%';
                    else if (key === 'calories' || key === 'bmr') display.textContent = dailyLimits[key] + ' kcal';
                    else display.textContent = dailyLimits[key] + 'g';
                }
            }
            saveDailyLimits();
            updateTotals();
            toggleModal(document.getElementById('daily-limits-modal'), false);
        },
        'rename-trainer-form': (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newName = formData.get('new-trainer-name');
            if (newName && newName.trim()) {
                const trainer = trainers.find(t => t.id === activeTrainerId);
                if (trainer) {
                    trainer.name = newName.trim();
                    saveTrainers();
                    renderTrainerSelect();
                    toggleModal(document.getElementById('rename-trainer-modal'), false);
                }
            }
        },
        'add-trainer-form': (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('add-trainer-name');
            if (name && name.trim()) {
                // Save current log to current trainer before switching
                const currentTrainerIndex = trainers.findIndex(t => t.id === activeTrainerId);
                if (currentTrainerIndex !== -1) {
                    trainers[currentTrainerIndex].dailyLog = [...dailyLog];
                }

                const newTrainer = {
                    id: Date.now(),
                    name: name.trim(),
                    dailyLog: [],
                    dailyLimits: { ...dailyLimits }
                };
                trainers.push(newTrainer);
                activeTrainerId = newTrainer.id;
                dailyLog = [];
                saveTrainers();
                loadDailyLimits();
                renderTrainerSelect();
                renderFoodList();
                toggleModal(document.getElementById('add-trainer-modal'), false);
            }
        }
    };

    for (const [id, handler] of Object.entries(forms)) {
        const form = document.getElementById(id);
        if (form) form.addEventListener('submit', handler);
    }

    // Modal Opening
    const modalButtons = {
        'open-custom-modal': 'custom-food-modal',
        'admin-open-custom-modal': 'custom-food-modal',
        'open-limits-modal': 'daily-limits-modal'
    };

    for (const [id, modalId] of Object.entries(modalButtons)) {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => {
            if (modalId === 'custom-food-modal') {
                const title = document.querySelector('#custom-food-modal h2');
                const submit = document.querySelector('#custom-food-modal button[type="submit"]');
                if (title) title.textContent = currentRole === 'admin' ? 'Add Custom to Program' : 'Add Custom to Log';
                if (submit) submit.textContent = currentRole === 'admin' ? 'Add to Program' : 'Add to Log';
            } else if (modalId === 'daily-limits-modal') {
                const trainer = trainers.find(t => t.id === activeTrainerId);
                const trainerSpan = document.getElementById('trainer-goal-name');
                if (trainer && trainerSpan) trainerSpan.textContent = trainer.name;

                for (const key of Object.keys(dailyLimits)) {
                    const input = document.getElementById('limit-' + key);
                    if (input) {
                        if (key === 'gender') {
                            input.value = dailyLimits[key] || 'male';
                        } else {
                            input.value = dailyLimits[key] || 0;
                        }
                    }
                }
            }
            toggleModal(document.getElementById(modalId), true);
        });
    }

    document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', () => {
        toggleModal(document.getElementById('custom-food-modal'), false);
        toggleModal(document.getElementById('daily-limits-modal'), false);
        toggleModal(document.getElementById('rename-trainer-modal'), false);
        toggleModal(document.getElementById('add-trainer-modal'), false);
        toggleModal(document.getElementById('admin-password-modal'), false);
    }));

    // User Search
    const searchInput = document.getElementById('food-search');
    if (searchInput) searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const results = document.getElementById('search-results');
        if (!results) return;
        if (term.length < 1) return results.classList.add('hidden');
        const matches = foodDatabase.filter(f => f.name.toLowerCase().includes(term));
        results.innerHTML = matches.length > 0 ? matches.map(f => `
            <div onclick="addItem(${f.id})" class="p-4 hover:bg-emerald-50 cursor-pointer flex items-center justify-between border-b border-slate-50 last:border-none">
                <span class="font-bold text-slate-900">${f.name}</span>
                <span class="text-xs text-slate-500">${f.calories} kcal</span>
            </div>
        `).join('') : '<div class="p-8 text-center text-slate-400">No food found</div>';
        results.classList.remove('hidden');
    });

    // Formula Listeners for Daily Goals
    const limitCaloriesInput = document.getElementById('limit-calories');
    
    function calculateProfileCalories() {
        const weight = parseFloat(document.getElementById('limit-weight').value) || 0;
        const height = parseFloat(document.getElementById('limit-height').value) || 0;
        const age = parseFloat(document.getElementById('limit-age').value) || 0;
        const gender = document.getElementById('limit-gender').value;
        const weeklyGoal = parseFloat(document.getElementById('limit-weeklyGoal').value) || 0;

        // New Detailed Activity Inputs
        const trainDays = parseFloat(document.getElementById('limit-trainDays').value) || 0;
        const trainDifficulty = parseFloat(document.getElementById('limit-trainDifficulty').value) || 1;
        const monthlySteps = parseFloat(document.getElementById('limit-monthlySteps').value) || 0;
        const dailyActiveLevel = parseFloat(document.getElementById('limit-dailyActiveLevel').value) || 0;

        if (weight > 0 && height > 0 && age > 0) {
            // 1. Calculate BMR (Mifflin-St Jeor)
            const bmrValue = Math.round((10 * weight) + (6.25 * height) - (5 * age) + (gender === 'male' ? 5 : -161));
            
            // 2. Calculate Activity Multiplier based on detailed inputs
            // Base Multiplier: 1.1 (Absolute Minimum)
            // Training Boost: max 0.35 (7 days * 10 diff)
            // Steps Boost: max 0.25 (300k steps/mo)
            // Daily Active Boost: max 0.3 (Level 10)
            const trainBoost = (trainDays * (trainDifficulty / 10)) * 0.05;
            const stepsBoost = (monthlySteps / 30 / 2000) * 0.05; // 10k steps = 0.25 boost
            const dailyBoost = dailyActiveLevel * 0.03;
            
            const totalActivityMultiplier = 1.1 + trainBoost + stepsBoost + dailyBoost;
            const activityPercentage = Math.round(totalActivityMultiplier * 100);

            // 3. Update Activity Input UI
            const activityInput = document.getElementById('limit-activity');
            if (activityInput) activityInput.value = activityPercentage;

            // 4. Calculate TDEE and Target Calories
            const tdee = Math.round(bmrValue * totalActivityMultiplier);
            const deficit = weeklyGoal * 1100;
            const targetCalories = Math.max(1200, tdee - deficit);

            const bmrInput = document.getElementById('limit-bmr');
            if (bmrInput) bmrInput.value = bmrValue;

            // 5. Update Protein (1.9g/kg)
            const proteinGoal = Math.round(weight * 1.9);
            const proteinInput = document.getElementById('limit-protein');
            if (proteinInput) proteinInput.value = proteinGoal;

            if (limitCaloriesInput) {
                limitCaloriesInput.value = targetCalories;
                limitCaloriesInput.dispatchEvent(new Event('input'));
            }
        }
    }

    // Attach listeners to all profile inputs including new detailed activity ones
    const profileInputIds = [
        'limit-weight', 'limit-height', 'limit-age', 'limit-gender', 
        'limit-weeklyGoal', 'limit-trainDays', 'limit-trainDifficulty', 
        'limit-monthlySteps', 'limit-dailyActiveLevel'
    ];
    
    profileInputIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calculateProfileCalories);
    });

    if (limitCaloriesInput) {
        limitCaloriesInput.addEventListener('input', (e) => {
            const calories = parseFloat(e.target.value);
            if (!isNaN(calories)) {
                // Main Macros
                const carbs = Math.round(calories * 0.12);   // 300/2500
                const fats = Math.round(calories * 0.0278); // User requested 2.78%
                
                // Update Macro Fields
                const carbsInput = document.getElementById('limit-carbs');
                const fatsInput = document.getElementById('limit-fats');
                if (carbsInput) carbsInput.value = carbs;
                if (fatsInput) fatsInput.value = fats;

                // Fat Breakdown (Relative to total fats)
                const satFatInput = document.getElementById('limit-satFat');
                const unsatFatInput = document.getElementById('limit-unsatFat');
                const transFatInput = document.getElementById('limit-transFat');
                if (satFatInput) satFatInput.value = Math.round(fats * 0.25); // 20/80
                if (unsatFatInput) unsatFatInput.value = Math.round(fats * 0.625); // 50/80
                if (transFatInput) transFatInput.value = Math.max(1, Math.round(fats * 0.025)); // 2/80

                // Others
                const sugarInput = document.getElementById('limit-sugar');
                const fiberInput = document.getElementById('limit-fiber');
                const vitaminsInput = document.getElementById('limit-vitamins');
                if (sugarInput) sugarInput.value = Math.round(calories * 0.02); // 50/2500
                if (fiberInput) fiberInput.value = Math.round(calories * 0.012); // 30/2500
                if (vitaminsInput) vitaminsInput.value = 100; // Default goal is 100%
            }
        });
    }

    const clearAll = document.getElementById('clear-all');
    if (clearAll) clearAll.addEventListener('click', () => {
        if (confirm('Clear log?')) {
            dailyLog = [];
            const currentTrainer = trainers.find(t => t.id === activeTrainerId);
            if (currentTrainer) currentTrainer.dailyLog = [];
            saveTrainers();
            renderFoodList();
        }
    });

    // Initial State
    loadTrainers();
    loadDailyLimits();
    renderFoodList(); // Ensure log is rendered on startup
    updateTotals();
    loadPublishedProgram();
});
