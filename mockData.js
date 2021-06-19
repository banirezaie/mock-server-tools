const courses = [
  {
    id: 1,
    title: "IMD class 1 html course",
    slug: "html",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "IMD class 1 css course",
    slug: "css",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "IMD class 1 bootstrap course",
    slug: "bootstrap",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "IMD class 1 vanilla js module 1 course",
    slug: "imd-1-js-1",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "IMD class 1 vanilla js module 2 course",
    slug: "imd-1-js-2",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "IMD class 1 vanilla js module 3 course",
    slug: "imd-1-js-3",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "IMD class 1 Node js course",
    slug: "node-js",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "IMD class 1 express js course",
    slug: "express-js",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "IMD class 1 Mongo DB course",
    slug: "mongo-db",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "IMD class 1 Mongoose course",
    slug: "mongoose",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Buffon" },
  { id: 2, name: "Bartez" },
  { id: 3, name: "David Siman" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
