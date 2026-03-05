const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
];

export default function getPosts() {
  return posts;
}

export function getPostsLength() {
  return posts.length;
}
