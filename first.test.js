const axios = require("axios").default;

test("Get all posts [/posts] and verify number", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const responseBody = response.data;
  expect(responseBody).toHaveLength(100);
});

test("GET single post [/posts/1] and verify content", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty("id", 1);
  expect(typeof response.data.title).toBe("string");
});

test("GET user by ID [/users/1] and verify username", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty("username");
  expect(typeof response.data.username).toBe("string");
});

test("POST create new post [/posts] and verify response", async () => {
  const newPost = {
    title: "Test Post",
    body: "This is a test post body.",
    userId: 1,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(newPost);
  expect(response.data).toHaveProperty("id");
});

test("POST create new comment [/comments] and verify response", async () => {
  const newComment = {
    name: "Test Comment",
    email: "test@example.com",
    body: "This is a test comment.",
    postId: 1,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    newComment
  );
  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(newComment);
  expect(response.data).toHaveProperty("id");
});
