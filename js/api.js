fetch("https://api.sampleapis.com/recipes/recipes")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const recipeList = document.getElementById("recipe-list");

        let recipeCount = 0;
        data.forEach(function (recipe) {
            if (recipeCount < 5 && recipe.description && recipe.mainIngredient && recipe.photoUrl) {
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("recipe");

                const recipeTitle = document.createElement("h2");
                recipeTitle.textContent = "Title: " + recipe.title;
                recipeDiv.appendChild(recipeTitle);

                const recipeImage = document.createElement("img");
                recipeImage.src = recipe.photoUrl;
                recipeImage.alt = recipe.title;
                recipeImage.style.width = "200px";
                recipeImage.style.height = "200px";
                recipeImage.style.borderRadius = "50px";
                recipeDiv.appendChild(recipeImage);

                const recipeDescription = document.createElement("p");
                recipeDescription.textContent = "Description: " + recipe.description;
                recipeDiv.appendChild(recipeDescription);

                const recipeMainIngredient = document.createElement("p");
                recipeMainIngredient.textContent = "Main Ingredients: " + recipe.mainIngredient;
                recipeDiv.appendChild(recipeMainIngredient);

                const recipeIngredients = document.createElement("p");
                recipeIngredients.textContent = "Ingredients: " + recipe.ingredients;
                recipeDiv.appendChild(recipeIngredients);

                const recipeCourse = document.createElement("p");
                recipeCourse.textContent = "Course: " + recipe.course;
                recipeDiv.appendChild(recipeCourse);

                recipeList.appendChild(recipeDiv);
                recipeCount++;
            }
        });
    })
    .catch(function (error) {
        console.error("Error fetching object:", error);
    });