# YelpSquad

# About
<h5>YelpSquad is a yelp clone where users can review various fictional and non-fictional squads, groups, team, and etc. </h5>
<li>Just watched your favorites sports team choke a lead? Give them a low star rating and leave a review telling them how bad they are.</li>
<li>Maybe you just the movie "Coach Carter" and felt moved by the characters determination. Give them a 5 star rating and a review detailing why they are deserving</li>

## Technologies Used

<h5 align= "left" dir="auto">
<img src="https://user-images.githubusercontent.com/92604480/165961417-c06bb493-af3d-48e7-99eb-27be08e2b2e1.png" alt="react" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165955681-9792572f-c7bd-4ffb-a97a-56e278c46c90.png" alt="redux" width="30"/>
  <img src="https://user-images.githubusercontent.com/92604480/165955147-b155e83b-ee1c-4f8b-94c1-f7472a6c09b0.png" alt="git" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165955457-aeff7618-df2f-4003-991d-d53259df541a.png" alt="heroku" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165967312-f7b9d82b-535a-492a-a427-f87c8d5084aa.png" alt="postgres" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165962733-070a5108-5795-46dc-ad96-75614ea38ed7.png" alt="express" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165956086-498f1bc1-b0f3-43dc-8139-735c8c3a1c0d.png" alt="sequelize" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165955865-464b018f-0663-44eb-8ef5-43f61a1b1ce1.png" alt="nodejs" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165958091-6c9c8f94-f21f-4b77-95e2-bcf2d805ee98.png" alt="JS" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165958488-88707ac6-d80f-47a4-97f7-29725f6b12ab.png" alt="HTML" width="30"/>
<img src="https://user-images.githubusercontent.com/92604480/165958448-6a0d3542-cf5f-44d6-b9c8-def152ae3f6c.png" alt="CSS" width="30"/>
</h5>

# Getting Started

1. Clone this repository

- git clone https://github.com/Shin-Jae/yelp-squad.git

2. Install dependicies in your frontend and backend

- npm install

3. Now you can create a user using psql with the information from the .env file

- psql -c "CREATE USER sayLess_app PASSWORD '<password>' CREATEDB"

4. Create a database and now you can migrate and seed data
  
- npx dotenv sequelize db:create

- npx dotenv sequelize db:migrate

- npx dotenv sequelize db:seed:all

5. In the frontend and backend directories, you can now start the servers with:

- npm start
  
8. Sign up or login as Demo user
  
# Features
  
- View all Squads

<img width="728" height="399" alt="Screen Shot 2022-08-03 at 6 14 34 PM" src="https://user-images.githubusercontent.com/95829246/182725317-93428555-6068-4217-b519-20e183821a11.png">

- Fill out your Squad information and post your Squad

<img width="769" alt="Screen Shot 2022-08-03 at 6 53 37 PM" src="https://user-images.githubusercontent.com/95829246/182726308-f82668a6-4f67-4cdd-8a78-e88959af3d88.png">

- Can view a specific squad as well as edit and delete squads that you've posted

<img width="1040" height="500" alt="Screen Shot 2022-08-03 at 6 48 06 PM" src="https://user-images.githubusercontent.com/95829246/182725793-e5ac1f40-8dfd-4e67-ae19-a3893cefe70c.png">

- Can read all reviews and ratings for a squad

<img width="1058"  alt="Screen Shot 2022-08-03 at 6 50 08 PM" src="https://user-images.githubusercontent.com/95829246/182725825-833d4658-3fde-47ab-a5e5-b3e5688df004.png">

- Assign a star rating and a review for a squad as well as edit and delete reviews you've posted

<img width="648" alt="Screen Shot 2022-08-03 at 6 48 20 PM" src="https://user-images.githubusercontent.com/95829246/182725753-13b5105a-7899-4506-9730-482a7a1b38cb.png">
