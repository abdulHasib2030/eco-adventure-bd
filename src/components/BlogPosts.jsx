import React from "react";

const posts = [
  {
    id: 1,
    title: "Journeys Are Best Measured In New Friends",
    date: "February 1, 2018",
    views: 3,
    image: "https://via.placeholder.com/400", // Replace with actual image URL
  },
  {
    id: 2,
    title: "A Lot Of Traveling Turns You Into A Storyteller",
    date: "February 2, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    title: "Travel Makes One Modest And Opened To Ideas",
    date: "February 3, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 4,
    title: "Discover New Oceans By Losing Sight Of The Shore",
    date: "February 4, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 5,
    title: "Don't Be Disappointed By The Things You Didn't Do",
    date: "February 7, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 6,
    title: "Think Of How Things Should Be And Act Upon",
    date: "February 5, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 7,
    title: "Live Now As If You'd Drop Dead In Ten Seconds",
    date: "February 8, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 8,
    title: "Begin The Real Voyage Of Discovery Right Now",
    date: "February 6, 2018",
    views: 3,
    image: "https://via.placeholder.com/400",
  },
];

const BlogPosts = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Blog Posts</h2>
        <p className="text-center text-gray-600 mb-8">
          One inspiring story is worth traveling. Discover more about local food,
          tradition, and history. Read the stories that make you want to travel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <div className="text-gray-500 text-sm flex justify-between items-center">
                  <span>{post.date}</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
