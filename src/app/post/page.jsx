import Link from "next/link";
import React from "react";

const getPost = async () => {
  const res = await fetch(`${process.env.API_POST}/posts`);
  const data = await res.json();
  return data;
};
const page = async () => {
  const postData = await getPost();
  console.log(postData);
  return (
    <div className="min-h-screen">
      <h6>Allpost</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {postData?.slice(0, 20)?.map((post, index) => (
          <div key={index} className="border-2 border-red-500 rounded-2xl p-2">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className="border-2 border-black rounded-2xl mt-2 px-3 py-2 active:scale-95">
              {" "}
              <Link href={`/post/${post?.id}`}>Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
