
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="gap-3 grid grid-cols-3">
                {
                    blogs?.map(blog=>(
                        <div key={blog?.id} className="border-2 border-red-500 px-2 py-1 ">
                            <h2>{blog?.title}</h2>
                            <h3>{blog?.author}</h3>
                            <p>{blog?.date}</p>
                            <p>{blog?.content}</p>
                            <p>{
                                blog?.tags?.map((tag,index)=><span key={index}>{tag}</span>)
                                }</p>
                                <button className='p-2  rounded-lg active:scale-95 transition-all bg-red-300 text-white'><Link href={`/blogs/${blog.id}`}>Veiw Details</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;

const blogs =[
    {
      "id": 1,
      "title": "Understanding React Hooks",
      "author": "Jane Doe",
      "date": "2024-09-15",
      "content": "React Hooks allow you to use state and other React features without writing a class. This blog explains how to use the most common hooks like useState and useEffect.",
      "tags": ["React", "JavaScript", "Web Development"],
      "url": "https://example.com/react-hooks",
      "imageUrl": "https://example.com/images/react-hooks.jpg"
    },
    {
      "id": 2,
      "title": "A Beginner's Guide to Next.js",
      "author": "John Smith",
      "date": "2024-09-10",
      "content": "Next.js is a powerful framework for building server-side rendered React applications. Learn the basics and why it's becoming so popular.",
      "tags": ["Next.js", "React", "SSR"],
      "url": "https://example.com/nextjs-guide",
      "imageUrl": "https://example.com/images/nextjs-guide.jpg"
    },
    {
      "id": 3,
      "title": "CSS Grid vs Flexbox: When to Use Which",
      "author": "Emily Davis",
      "date": "2024-08-28",
      "content": "CSS Grid and Flexbox are both powerful tools for layout design. This blog breaks down their differences and gives examples of when to use each.",
      "tags": ["CSS", "Web Design", "Frontend"],
      "url": "https://example.com/css-grid-vs-flexbox",
      "imageUrl": "https://example.com/images/css-grid-flexbox.jpg"
    },
    {
      "id": 4,
      "title": "Mastering JavaScript Promises",
      "author": "Michael Brown",
      "date": "2024-08-20",
      "content": "JavaScript promises are essential for handling asynchronous operations. This article covers how to create, chain, and handle promises effectively.",
      "tags": ["JavaScript", "Async", "Programming"],
      "url": "https://example.com/js-promises",
      "imageUrl": "https://example.com/images/js-promises.jpg"
    },
    {
      "id": 5,
      "title": "Best Practices for Node.js API Development",
      "author": "Sophia White",
      "date": "2024-07-30",
      "content": "This blog outlines best practices for building scalable and maintainable APIs with Node.js, covering topics like routing, error handling, and security.",
      "tags": ["Node.js", "API", "Backend"],
      "url": "https://example.com/nodejs-api",
      "imageUrl": "https://example.com/images/nodejs-api.jpg"
    }
  ]
  