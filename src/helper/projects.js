// Project images
import imageWeather from '../assets/project_images/umbrella.png';
import imageOdinbook from '../assets/project_images/odinbook.png';
import imageBattleship from '../assets/project_images/battleship.png';
import imageFlyaway from '../assets/project_images/flyaway.png';
import imagePokemon from '../assets/project_images/pokemon.png';

// Thumb images
import thumbFlyaway from '../assets/project_images/flyaway_thumb.png';
import thumbOdinbook from '../assets/project_images/odinbook_thumb.png';
import thumbUmbrella from '../assets/project_images/umbrella_thumb.png';
import thumbBattleship from '../assets/project_images/battleship_thumb.png';
import thumbPokemon from '../assets/project_images/pokemon_thumb.png';

// Tech icons
import iconReact from '../assets/icons/React.svg';
import iconRuby from '../assets/icons/Ruby.svg';
import iconRails from '../assets/icons/Rails.svg';
import iconPostgres from '../assets/icons/PostgresSQL.svg';
import iconWebpack from '../assets/icons/Webpack.svg';
import iconSass from '../assets/icons/Sass.svg';
import iconHtml from '../assets/icons/HTML5.svg';
import iconCss from '../assets/icons/CSS3.svg';
import iconJs from '../assets/icons/JavaScript.svg';
import iconRedux from '../assets/icons/Redux.svg';
import iconMui from '../assets/icons/Mui.svg';


const techStack = {
    React: { icon: iconReact, name: "React" },
    Ruby: { icon: iconRuby, name: "Ruby" },
    Rails: { icon: iconRails, name: "Rails" },
    Postgres: { icon: iconPostgres, name: "Postgres" },
    Webpack: { icon: iconWebpack, name: "Webpack" },
    Sass: { icon: iconSass, name: "SASS" },
    Html: { icon: iconHtml, name: "HTML" },
    Css: { icon: iconCss, name: "CSS" },
    Js: { icon: iconJs, name: "JavaScript" },
    Redux: { icon: iconRedux, name: "Redux" },
    Mui: { icon: iconMui, name: "Material UI" }, 
}


//** Project file containing all the projects and it's details */

const projects = () => {
    return [
        {   id: 1 , name: "Umbrella", short: "Weather Forecasting Tool",
            tech_stack: [techStack.React, techStack.Js, techStack.Html, techStack.Css, techStack.Sass],
            site_link: "https://kcstarless.github.io/weather-app/", 
            github_link: "https://github.com/kcstarless/weather-app",
            image: imageWeather,
            thumb: thumbUmbrella,
            description: "The Weather Umbrella project is a JavaScript app that uses the Visual Crossing API to display real-time weather data. It employs async functions for efficient API calls and processes JSON data to show weather forecasts. The app is built with reusable components for scalability and robustness."
        },

        {
            id: 2, name: "Battleship", short: "Classic Board Game",
            tech_stack: [techStack.Js, techStack.Html, techStack.Css],
            site_link: "https://kcstarless.github.io/battleship/",
            github_link: "https://github.com/kcstarless/battleship",
            image: imageBattleship,
            thumb: thumbBattleship,
            description: "The Battleship project is a JavaScript game that recreates the classic Battleship board game. Players place ships on a grid and take turns firing missiles to sink each other's ships. It features a responsive design, real-time updates, and showcases object-oriented programming, event handling, and DOM manipulation."
        }, 
        
        {
            id: 3, name: "Odinbook", short: "Social Media App",
            tech_stack: [techStack.Ruby, techStack.Rails, techStack.Postgres, techStack.Sass],
            site_link: "https://theodinbook.fly.dev",
            github_link: "https://theodinbook.fly.dev",
            image: imageOdinbook,
            thumb: thumbOdinbook,
            description: "Odinbook is a Ruby on Rails social media app that allows users to view profiles, create posts, and interact through comments, follows, and likes. It uses OmniAuth and Devise for authentication, Active Record for database interactions, and Turbo and Stimulus for dynamic UI updates. Mailer handles notifications, and SASS ensures a modern, responsive design.",
        },

        {
            id: 4, name: "Flyaway", short: "Flight Search Engine",
            tech_stack: [techStack.Ruby, techStack.Rails, techStack.React, techStack.Postgres, techStack.Sass, techStack.Js, techStack.Css, techStack.Html, techStack.Mui],
            site_link: "https://flyaway-rails-react.fly.dev/",
            github_link: "https://github.com/kcstarless/theodinbook",
            image: imageFlyaway,
            thumb: thumbFlyaway,
            description: "Inspired by Skyscanner and Google flight search, Flyaway is a flight search engine that allows users to search for flights based on their departure and destination cities. The app uses the Amadeus API to fetch flight data and displays the results in a user-friendly format. Users can filter flights by price, airline, and departure time, and view detailed information about each flight. Flyaway is built on Ruby on Rails API as backend and React frontend."
        }, 

        {
            id: 5, name: "Pokemon", short: "Memory Game",
            tech_stack: [techStack.React, techStack.Js, techStack.Html, techStack.Css, techStack.Redux, techStack.Mui],
            site_link: "https://pokemon-theta-eosin.vercel.app/",
            github_link: "https://github.com/kcstarless/pokemon",
            image: imagePokemon,
            thumb: thumbPokemon,
            description: "React based browser game. The game tests players memory by randomly shuffling Pokemon card and asking them to click on each one only once. The game keeps track of the player's current and best score. The project demonstrates the use of React components, state management, event handling and CSS to create an interactive and engaging user experience."
        },
    ]
}

export default projects;