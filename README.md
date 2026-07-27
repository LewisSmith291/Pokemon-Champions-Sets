# Champion Sets

![Static Badge](https://img.shields.io/badge/HTML-white?logo=html5&color=%2318191b)
![Static Badge](https://img.shields.io/badge/CSS-white?logo=css&color=%2318191b)
![Static Badge](https://img.shields.io/badge/TypeScript-white?logo=typescript&logoColor=white&color=%233178c6)
![Static Badge](https://img.shields.io/badge/React-blue?logo=react&color=%2323272f) 
![Static Badge](https://img.shields.io/badge/Node.js-white?logo=node.js&color=%230d121c) 
![Static Badge](https://img.shields.io/badge/PostgreSQL-white?logo=postgresql&logoColor=%23699eca&color=%23212121)
![Static Badge](https://img.shields.io/badge/Render-white?logo=render&color=%23141414) 
![Static Badge](https://img.shields.io/badge/TailwindCSS-white?logo=tailwindcss&logoColor=blue&color=%23030712)
![Static Badge](https://img.shields.io/badge/Netlify-white?logo=netlify&color=%2312181f)
![Static Badge](https://img.shields.io/badge/Neon-white?logo=neon&color=%23262626)
![Static Badge](https://img.shields.io/badge/drizzle-white?logo=drizzle&color=%23111111)
![Static Badge](https://img.shields.io/badge/BetterAuth-white?logo=betterauth&color=black)

This WebApp serves as a companion for the newly released and popular game Pokemon Champions.

It is currently a work in progress, and will be edited for a while before it is officially released. In the meantime the development process will be documented here.

While playing the popular new Pokemon Champions game, I noticed that there was no website used to share pokemon/team builds with others, just non-specific statistical websites showing what is commonly used, which lacked detail. I decided to make what I was looking for myself.

A pokemon 'set' is information about how a pokemon is trained which dictates how it performs when being used to play against other players. 

The website is still in production, but will eventually have the features of:
- set creation
- set browsing/discovery
- pokemon stat calculator (can be used during set creation to optimise stat spreads for specific scenarios)
- user profile
- upvoting sets
- tagging sets so search filters can be applied

This is my most ambitious project as it is very much one fueld by passion and a genuine curiosity for how well this product can perform in terms of active monthly users.

It uses api calls to fetch data about pokemon (sprite, name, forms, etc.) using the [PokeApi](https://pokeapi.co/) RESTful Pokemon APi, and will use the [Smogon Damage Calculator](https://github.com/smogon/damage-calc) API for assistance in optimising pokemon stats.

It also leverages BetterAuth for handling of signing in/out/up and sessions.
