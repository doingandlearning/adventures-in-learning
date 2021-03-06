# Adventures In Learning
> Tackle your learning experiences like you'd slay a dragon - one adventure at a time!

## Background
As [someone who needs a map to learn](https://www.freecodecamp.org/news/how-to-create-a-map-for-web-development/) and who loves to think of learning as an adventure, I want to be able to track my learning and invite other people on my quests. 

Initially this will be single player mode but it could develop into a platform to create and manage your [knowledge adventure clubs](https://joelhooks.com/knowledge-adventure-club).

This project is created as part of a Learning Club with [egghead](https://egghead.io) around state management. I'm going to be building with Vue and trying to learn and leverage XState.

## What is it?
This will be a front-end exploration of learning maps. Initially, it will be a tool to explore maps created by others. It'll be a way to make connections in your knowledge, gamify your learning and help to identify gaps.

## What does it look like?
This is definitely a BETA. I'm not a gifted designer and initially will push into the logic, state and data-flow. 


## How will you use it?
It is built in Vue 3. To run locally it will be:

```
yarn install
yarn serve
```

I'll share a live demo closer to completion.

## Technologies used
- Vue 3
- XState
- Airtable (maybe?)
- Vue Auth

## Initial Functionality
- Pre-created maps:
  - [x] View and interact with a map of a region (large topic area)
    - [x] This will be a map with "cities/towns" that represent topic areas. 
    - [x] The topic areas should be managed by a data file or API payload (Airtable/Mongo/Firebase or other data)
    - [x] They should be coloured (or otherwise indicate) to show if the user has visited before, cleared or never.
  - [x] Select a town in the region (specific topic)
    - [ ] Clicking a town should show some animation or movement towards that spot
    - [x] A modal (or other) should show info about the topic, features "in the surrounding area" and some things of notice in town
  - [ ] View list of adventures within the town (resources: videos/articles/exercises)
    - [ ] Not to push the metaphor to far this will include resources, exercises, videos, articles and other starting points for learning
  - [ ] Defeat the boss in a town (capstone project)
    - [ ] It will also suggest "challenges" to help solidify understanding

## Future functionality
- Create your own learning maps
- Organise parties to explore a "dungeon"/"town" together

