const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Base URL for the JSONPlaceholder API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// 1. Get a List of Users
app.get('/users',async (req,res)=>{
   try {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response);
    res.json(response.data);

   } catch (error) {
    console.log(error);
    res.status(500).send('error in fetching data')
   }

})

// 2. Get a Single User by ID
app.get('/users/:id',async (req,res)=>{
   try {
    const response = await axios.get(`${BASE_URL}/users/${req.params.id}`)
   res.json(response.data);
    
   } catch (error) {
    console.log(error);
    res.status(500).send('error in getting data')
   }


})

// 3. Get All Posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching posts');
  }
});

// 4. Get a Single Post by ID
app.get('/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching post');
  }
});

// 5. Get Comments for a Specific Post
app.get('/posts/:id/comments', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${req.params.id}/comments`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching comments');
  }
});

// 6. Get Albums for a Specific User
app.get('/users/:id/albums', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${req.params.id}/albums`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching albums');
  }
});

// 7. Get a To-Do List
app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching to-dos');
  }
});

// 8. Search for a User by Name
app.get('/users/search', async (req, res) => {
  const name = req.query.name?.toLowerCase();
  if (!name) {
    return res.status(400).send('Name query parameter is required');
  }
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const filteredUsers = response.data.filter(user =>
      user.name.toLowerCase().includes(name)
    );
    res.json(filteredUsers);
  } catch (error) {
    res.status(500).send('Error searching users');
  }
});

// 9. Get Photos in an Album
app.get('/albums/:id/photos', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/${req.params.id}/photos`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching photos');
  }
});

// 10. Get a User's Posts
app.get('/users/:id/posts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${req.params.id}/posts`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching user posts');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
