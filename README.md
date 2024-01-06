# Snapgram

Snapgram is a social media platform where users can share photos and connect with others. This project is built using [React](https://reactjs.org/) for the frontend, [React Query](https://react-query.tanstack.com/) for managing server state, and [Appwrite](https://appwrite.io/) as the backend service.

## Table of Contents

- [Features](#features)
- [Installation](#installation)

## Features

- **User Authentication:** Users can sign up, log in, and log out securely.
- **Post Creation and Interaction:** Create, like, save, and delete posts.
- **Profile Management:** View and update user profiles.
- **Infinite Scroll:** Enjoy a seamless browsing experience with infinite scroll.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Fezaan/Snapgram.git
2. Change into the Snapgram directory

   ```bash
   cd Snapgram
3. Install the necessary dependencies

   ```bash
   npm install
4. Run the command

   ```bash
   npm run dev
5. Create a .env.local file in the root folder

   ```bash
   touch .env.local
6. Copy and paste the following code in the .env.local file

   ```bash
   VITE_APPWRITE_PROJECT_ID='6587169b04394856328a'
   VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
   VITE_APPWRITE_STORAGE_ID='658991c96056fd7fb28e'
   VITE_APPWRITE_DATABASE_ID='6589920f521c885b08eb'
   VITE_APPWRITE_SAVES_COLLECTION_ID='658992ab400b85316d51'
   VITE_APPWRITE_USER_COLLECTION_ID='6589929299c8c7e0c625'
   VITE_APPWRITE_POST_COLLECTION_ID='65899258c1a8daf9d177'
   
7. The server will start running at [http://localhost:5173/](http://localhost:5173/)
