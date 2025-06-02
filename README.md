# Meme Generator 🖼️🤣

A fun and interactive meme generator built with **React** and **Bootstrap**, allowing users to create, edit, drag, and download custom memes with ease.

## 🚀 Features

- 🎨 Generate memes using a public meme API
- ✏️ Add custom text to meme images
- 🖱️ Drag and position your text freely using `react-draggable`
- 💾 Export your final meme as a JPEG image
- 🌐 Navigate between pages using `react-router-dom`
- ⚛️ Built using functional components and React Hooks

## 🛠️ Tech Stack

- **React**
- **Bootstrap**
- **React Router DOM**
- **React Draggable**
- **React Export to JPEG**
- **JavaScript (ES6+ with Arrow Functions)**
- **API integration (using `fetch` with `async/await`)**

## 📁 Folder Structure
```bash

meme_generator
│
├── api
│   └── memes.jsx
│
├── components
│   ├── Card.jsx
│   └── Text.jsx
│
├── pages
│   ├── Home.jsx
│   └── Edit.jsx
│
├── App.jsx
└── index.js
```




## 🧠 React Concepts Used

- `useNavigate` – for navigation between pages
- `useEffect` – to fetch meme data on component mount
- `useState` – for managing component state
- `useParams` – to retrieve dynamic route parameters
- **Props** – for data passing between components
- **Arrow Functions** – for concise function expressions

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/meme_generator.git
cd meme_generator
```

### 2. Install the Repository 
``` bash
  npm install
``` 

### 3 . Run the app
``` bash 
npm start 
```

###API Used
--------
```bash
- https://api.imgflip.com/get_memes
  Used to fetch a list of meme templates with their image URLs and names.
```


###Example Usage
-------------
```bash
1. Open the app (npm start).
2. On the Home page, choose a meme template from the list.
3. Click on a template to go to the Edit page.
4. Enter your custom top and bottom text.
5. Drag the text to position it anywhere on the image.
6. Click the "Download" button to export the meme as a JPEG.
```


###Learnings
---------
```bash 
- Gained practical experience with React Hooks:
  • useState – for managing local component state
  • useEffect – for fetching meme data on component mount
  • useNavigate – for programmatic page navigation
  • useParams – for retrieving route parameters (e.g. meme ID)

- Understood routing with React Router DOM:
  • Route-based navigation using <Routes> and <Route>
  • Navigating between Home and Edit pages
  • Extracting URL parameters for dynamic rendering

- Learned to integrate third-party libraries:
  • react-draggable – to drag and reposition meme text
  • react-export-to-jpeg – to export created memes

- Improved component-based thinking and props usage
- Practiced API calls using async/await and fetch
- Strengthened knowledge of JSX and arrow functions
```



###Future Improvements
-------------------
```bash
- Add support for uploading custom images.
- Allow users to add more than two text fields.
- Enable text customization (font, size, color, shadow).
- Save memes to local gallery or share directly to social media.
- Add undo/redo functionality while editing.
```
