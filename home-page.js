document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const uploadImageButton = document.getElementById('uploadImageButton');

    searchButton.addEventListener('click', () => {
        const ingredientInput = document.getElementById('ingredientInput').value.toLowerCase();
        if (ingredientInput) {
            const keywords = ingredientInput.split(/[\s,]+/); // Split input by spaces or commas
            const recipes = [
                { name: 'Butter Chicken', page: 'butter-chicken.html', ingredients: ['500g basmati rice', '1 kg chicken', '2 large onions', '3 tomatoes', '2 green chilies', '1 tbsp ginger-garlic paste', '2 tsp ground cumin', '2 tsp ground coriander', '1 tsp turmeric', '1 tsp chili powder', '2 tbsp oil', 'Salt to taste', 'Fresh cilantro for garnish'], requirements: ['large pot', 'skillet', 'spatula', 'knife', 'cutting board'] },
                { name: 'Margherita Pizza', page: 'margherita-pizza.html', ingredients: ['pizza', 'cheese'], requirements: ['oven', 'pizza stone', 'rolling pin'] },
                { name: 'Cheeseburger', page: 'cheeseburger.html', ingredients: ['burger', 'cheese'], requirements: ['grill', 'spatula', 'knife', 'cutting board'] },
                { name: 'Kung Pao Chicken', page: 'kung-pao-chicken.html', ingredients: ['chicken', 'kung pao'], requirements: ['wok', 'spatula', 'knife', 'cutting board'] },
                { name: 'Paneer Tikka', page: 'paneer-tikka.html', ingredients: ['paneer', 'tikka'], requirements: ['grill', 'skewers', 'knife', 'cutting board'] },
                { name: 'Lasagna', page: 'lasagna.html', ingredients: ['lasagna', 'cheese'], requirements: ['oven', 'baking dish', 'knife', 'cutting board'] },
                { name: 'BBQ Ribs', page: 'bbq-ribs.html', ingredients: ['ribs', 'bbq'], requirements: ['grill', 'tongs', 'knife', 'cutting board'] },
                { name: 'Sweet and Sour Pork', page: 'sweet-and-sour-pork.html', ingredients: ['pork', 'sweet and sour'], requirements: ['wok', 'spatula', 'knife', 'cutting board'] },
                { name: 'Chole Bhature', page: 'chole-bhature.html', ingredients: ['chole', 'bhature'], requirements: ['large pot', 'skillet', 'spatula', 'knife', 'cutting board'] },
                { name: 'Spaghetti Carbonara', page: 'spaghetti-carbonara.html', ingredients: ['spaghetti', 'carbonara'], requirements: ['large pot', 'skillet', 'spatula', 'knife', 'cutting board'] },
                { name: 'Apple Pie', page: 'apple-pie.html', ingredients: ['apple', 'pie'], requirements: ['oven', 'pie dish', 'rolling pin'] },
                { name: 'Spring Rolls', page: 'spring-rolls.html', ingredients: ['spring rolls'], requirements: ['wok', 'spatula', 'knife', 'cutting board'] }
            ];

            const matchedRecipes = recipes.filter(recipe => 
                keywords.some(keyword => 
                    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(keyword)) || 
                    recipe.requirements.some(requirement => requirement.toLowerCase().includes(keyword))
                )
            );

            if (matchedRecipes.length > 0) {
                const matchedPages = matchedRecipes.map(recipe => recipe.page);
                const uniquePages = [...new Set(matchedPages)];
                if (uniquePages.length === 1) {
                    window.location.href = uniquePages[0];
                } else {
                    // Display a list of matched recipes if there are multiple pages
                    const resultSection = document.createElement('section');
                    resultSection.className = 'search-results';
                    resultSection.innerHTML = '<h2>Search Results</h2>';
                    matchedRecipes.forEach(recipe => {
                        const recipeLink = document.createElement('a');
                        recipeLink.href = recipe.page;
                        recipeLink.textContent = recipe.name;
                        resultSection.appendChild(recipeLink);
                        resultSection.appendChild(document.createElement('br'));
                    });
                    const mainElement = document.querySelector('main');
                    const existingResults = document.querySelector('.search-results');
                    if (existingResults) {
                        mainElement.removeChild(existingResults);
                    }
                    mainElement.appendChild(resultSection);
                }
            } else {
                alert('No recipes found with the given ingredient.');
            }
        } else {
            alert('Please enter an ingredient.');
        }
    });

    uploadImageButton.addEventListener('click', () => {
        alert('Upload image functionality is not implemented yet.');
        // Implement image upload functionality here
    });
});
