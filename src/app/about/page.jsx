import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About ",
  description: "Generated by create next app",
};
// const getTime = async () => {
//   const res = await fetch("http://localhost:3001/time", {
//     next: { revalidate: 5 },
//   });
//   const data = await res.json();
//   return data.currentTime;
// };
const page = async () => {
  // const time = await getTime();

  return (
    <div>
      this is about page
   
      <div className="space-x-6">
        <Link href={"/about/history"}>History</Link>
        <Link href={"/about/mission"}>Mission</Link>
      </div>
      {/* <h2>Time : {time}</h2> */}
    </div>
  );
};

export default page;
