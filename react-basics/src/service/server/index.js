import { v4 as uuidv4 } from "uuid";
const posts = [
  {
    id: uuidv4(),
    title: "My first post title",
  },
];
export default {
  getPost: async function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  addPost: async function (data) {
    return new Promise((resolve) => {
      posts.push(data);
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  },
};
