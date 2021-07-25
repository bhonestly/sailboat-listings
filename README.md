# Sailboat-Listings App

## Table of Contents

- [Sailboat-Listings App](#sailboat-listings-app)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries and Dependencies](#libraries-and-dependencies)
    - [Client (Front End)](#client-front-end)
      - [Wireframes](#wireframes)
    - [Component Heirarchy](#component-heirarchy)
      - [Component Architecture](#component-architecture)
      - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
  - [Post-MVP](#post-mvp)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

Sailboat Listings - Buy and sell your sailboat
"The happiest two days of boat ownership are the day you buy a boat and the day you sell it."  - Unknown Sailor

<br>

## MVP

Website that allows users to register a profile to create and post their sailboats for sale

<br>

### Goals

- _Create User CRUD with Authentication__
- _Boat CRUD_
- _Boat Detail Page_
- _Boat Posting/Edit Form_
- _Signup/Signin Page_
- _Browse Boats Page_
- Filter by Price and Length

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |  |
|   React Router   |  |
| React SemanticUI |  |
|     Rails      |  |

<br>

### Client (Front End)

<br>

#### Wireframes

[Wireframe Link](https://www.figma.com/file/GToCkNhmICl0DwQar7UJLV/Untitled?node-id=0%3A1)

<br>


### Component Heirarchy 

[Component Tree](https://whimsical.com/UrpSqy2CL8Fb7X5pXV5DEQ@2Ux7TurymMxyV1Zo3ZsD)

<br>

#### Component Architecture 

``` structure

src
|__ screens/
      |__ Homepage.jsx
      |__ BoatDetail.jsx
      |__ Signup/Signin.jsx
      |__ BoatEdit.jsx
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Signup.jsx
      |__ Signin.jsx
      |__ BoatCard.jsx
|__ services/
    |__ apiConfig
    |__ users.js
    |__ boats.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Footer    |    H     |     3 hrs      |     hrs     |    hrs     |
| Header |    H     |     3 hrs      |     hrs     |    hrs     |
| Create backend CRUD |    H     |     3 hrs      |     hrs     |    hrs     |
| Create Frontend CRUD |    H     |     3 hrs      |     hrs     |    hrs     |
| Signup/Signin screen |    H     |     3 hrs      |     hrs     |    hrs     |
| Home Screen |    H     |     3 hrs      |     hrs     |    hrs     |
| Boat Detail screen |    H     |     3 hrs      |     hrs     |    hrs     |
| Boat Edit screen |    H     |     3 hrs      |     hrs     |    hrs     |
| Boat Card |    H     |     3 hrs      |     hrs     |    hrs     |
| TOTAL               |          |     27 hrs      |     hrs     |    hrs     |

<br>

## Server (Back End)
<br>

### ERD Model
<br>

[ERD](https://i.imgur.com/nXrfNvS.png)

<br>

***

## Post-MVP


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.