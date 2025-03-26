import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_Rituals_M_27-02-2023-06-25?$WT_Blogs_Tiles_D%26M$",
      title: "Five Unique Wedding Rituals in India.",
      date: "02 Mar 2025",
    },
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_Flower_M_06-03-2023-11-44?$WT_Blogs_Tiles_D%26M$",
      title: "The Expression of Connection: Flowers in Indian Wedding",
      date: "16 Jan 2025",
    },
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_KurtaColors_D_06-03-2023-11-44?$WT_Blogs_Tiles_D%26M$",
      title: "How to Choose the Right Colours When Buying a Kurta Pajama",
      date: "02 Dec 2024",
    },
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_Trendy_Modern_D?$WT_Blogs_Tiles_D%26M$",
      title: "2024 Trendy & Modern Ethnic Outfit Ideas for Men",
      date: "13 Aug 2024",
    },
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_RakhiMen_D_06-03-2023-07-22?$WT_Blogs_Tiles_D%26M$",
      title: "Raksha Bandhan Outfit Ideas for Men",
      date: "03 Aug 2024",
    },
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_IndependenceDay_D?$WT_Blogs_Tiles_D%26M$",
      title: "Traditional Outfits For Men To Look Stylish This Independence Day",
      date: "03 Aug 2024",
    },
    {
      img: "https://manyavar.scene7.com/is/image/manyavar/Blog_Tiles_10outfits_D_06-03-2023-07-22?$WT_Blogs_Tiles_D%26M$",
      title: "10 Traditional Outfit Ideas to Dress for Ganesh Chaturthi 2024",
      date: "03 Aug 2024",
    },
  ];

  return (
    <section className="bg-[#FFFBF2] py-18 px-5 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="mb-10">
          <img
            src="https://manyavar.scene7.com/is/image/manyavar/Blog_Hero_Ritual_D%20jpg_13-03-2023-05-59?$WT_Blogs_Banner_D$"
            alt="Blog Hero"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          STORIES BY YUVRAJ VAAR VADHU
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-700 font-semibold mb-2">{post.title}</p>
                <h2 className="text-gray-500 text-sm">{post.date}</h2>
              </div>
            </div>
          )).slice(0, 4)}
        </div>

        <div className="grid grid-cols-4 gap-6 mt-10 ">
          {blogPosts.map((post, index) => (
            <div
              key={index + 4}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-700 font-semibold mb-2">{post.title}</p>
                <h2 className="text-gray-500 text-sm">{post.date}</h2>
              </div>
            </div>
          )).slice(4, 7)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
