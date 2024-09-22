import React from "react";

export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();
  console.log(postData, "empty");
  return {
    title: ` ${postData.title}`,
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};
const page = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const {title,body,userId} = await res.json();

  return <div>
    <h1>userId:{userId}</h1>
    <h2>title: {title}</h2>
    <p>description: {body}</p>
  </div>
};

export default page;
