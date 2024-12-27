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


//** Project file containing all the projects and it's details */

const projects = () => {
    return [
        {   id: 1 , name: "Umbrella", short: "Weather Forecasting Tool",
            tech_stack: [iconHtml, iconCss, iconSass, iconJs, iconWebpack], 
            site_link: "https://kcstarless.github.io/weather-app/", 
            github_link: "https://github.com/kcstarless/weather-app",
            image: imageWeather,
            thumb: thumbUmbrella,
            description: "The Weather Umbrella project is a JavaScript-based application that leverages the Visual Crossing API to fetch and display real-time weather data. The project utilizes async functions to handle API calls efficiently and processes the returned JSON data to present weather information. Developed using a bottom-up approach, the project focuses on building small, reusable components that come together to create a robust and scalable weather forecasting tool."
        },

        {
            id: 2, name: "Battleship", short: "Classic Board Game",
            tech_stack: [iconHtml, iconCss, iconSass, iconJs, iconWebpack],
            site_link: "https://kcstarless.github.io/battleship/",
            github_link: "https://github.com/kcstarless/battleship",
            image: imageBattleship,
            thumb: thumbBattleship,
            description: "The Battleship project is a JavaScript-based game that recreates the classic board game Battleship. Players can place their ships on a grid and take turns firing missiles at the opponent's grid to sink their ships. The game features a responsive design, intuitive controls, and a dynamic interface that updates in real-time. The project demonstrates the use of object-oriented programming principles, event handling, and DOM manipulation to create an engaging and interactive gaming experience."
        }, 
        
        {
            id: 3, name: "Odinbook", short: "Social Media App",
            tech_stack: [iconRuby, iconRails, iconPostgres, iconSass, iconJs, iconCss, iconHtml],
            site_link: "https://theodinbook.fly.dev",
            github_link: "https://theodinbook.fly.dev",
            image: imageOdinbook,
            thumb: thumbOdinbook,
            description: "Odinbook is a social media application built with Ruby on Rails, designed to showcase the integration of data and backend technologies. The app enables users to view profiles, create and interact with posts through comments, follows, and likes. Authentication is securely managed using OmniAuth and Devise. Odinbook also leverages Active Record for database interactions, Turbo for efficient page updates, Stimulus for dynamic user interfaces, and Mailer for notifications. The application's overall design is crafted using SASS, ensuring a modern and responsive user experience.",
        },

        {
            id: 4, name: "Pokemon", short: "Memory Game",
            tech_stack: [iconReact, iconSass, iconJs, iconCss, iconHtml],
            site_link: "https://pokemon-theta-eosin.vercel.app/",
            github_link: "https://github.com/kcstarless/pokemon",
            image: imagePokemon,
            thumb: thumbPokemon,
            description: "React based browser game. The game tests players memory by randomly shuffling Pokemon card and asking them to click on each one only once. The game keeps track of the player's current and best score. The project demonstrates the use of React components, state management, event handling and CSS to create an interactive and engaging user experience."
        },
        
        {
            id: 5, name: "Flyaway", short: "Flight Search Engine",
            tech_stack: [iconRuby, iconRails, iconReact, iconPostgres, iconSass, iconJs, iconCss, iconHtml],
            site_link: "https://flyaway-rails-react.fly.dev/",
            github_link: "https://github.com/kcstarless/theodinbook",
            image: imageFlyaway,
            thumb: thumbFlyaway,
            description: "Inspired by Skyscanner and Google flight search, Flyaway is a flight search engine that allows users to search for flights based on their departure and destination cities. The app uses the Amadeus API to fetch flight data and displays the results in a user-friendly format. Users can filter flights by price, airline, and departure time, and view detailed information about each flight. Flyaway is built on Ruby on Rails API as backend and React frontend."
        }, 

    ]
}

export default projects;