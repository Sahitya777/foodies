import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            recipe:"Take chicken breast, clean it properly, and then cut into small to medium cubes.Then take a pan, make it heat up, add 3 tbsp of oil(olive oil or refined oil or vegetable oil)."
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            recipe:"Combine diced crustless bread pieces with 2/3 cup water and set aside for 5 minutes then mash together with a fork."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            recipe:"In a large bowl, mix ground beef, onion powder, salt and pepper until just combined. Do not overmix, or your patties will be tough"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            recipe:"1. Wash mutton thoroughly and drain well. Add ginger garlic paste, salt, turmeric, biryani masala, red chili powder and lemon juice"
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            recipe:"To make sushi rice, Japanese white rice is mixed with a special sushi rice vinegar."
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            recipe:"Take chicken breast, clean it properly, and then cut into small to medium cubes.Then take a pan, make it heat up, add 3 tbsp of oil(olive oil or refined oil or vegetable oil)."
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            recipe:"Combine diced crustless bread pieces with 2/3 cup water and set aside for 5 minutes then mash together with a fork."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            recipe:"In a large bowl, mix ground beef, onion powder, salt and pepper until just combined. Do not overmix, or your patties will be tough"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            recipe:"1. Wash mutton thoroughly and drain well. Add ginger garlic paste, salt, turmeric, biryani masala, red chili powder and lemon juice"
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            recipe:"To make sushi rice, Japanese white rice is mixed with a special sushi rice vinegar."
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            recipe:"In a large bowl, mix ground beef, onion powder, salt and pepper until just combined. Do not overmix, or your patties will be tough"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            recipe:"1. Wash mutton thoroughly and drain well. Add ginger garlic paste, salt, turmeric, biryani masala, red chili powder and lemon juice"
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}