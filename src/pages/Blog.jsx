import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const mockData = [
    {
      id: 1,
      title: "Understanding Nigerian Literature",
      excerpt: "Nigerian literature encompasses a vast array of genres and styles, showcasing the rich cultural tapestry of the nation. This blog post delves into the history, significance, and contemporary developments in Nigerian literary arts.",
      link: "/post/1"
    },
    {
      id: 2,
      title: "The Art of Storytelling",
      excerpt: "Storytelling is an age-old tradition in Nigeria, serving as a means of passing down wisdom, history, and culture. This post explores the various forms of storytelling prevalent in Nigerian communities.",
      link: "/post/2"
    },
    {
      id: 3,
      title: "Spotlight on Emerging Authors",
      excerpt: "New voices are emerging in the Nigerian literary scene, bringing fresh perspectives and innovative storytelling. In this post, we highlight some of these talented authors and their works.",
      link: "/post/3"
    }
  ];
  const mockCategories = [
    { id: 1, name: 'Literature', link: '/category/literature' },
    { id: 2, name: 'Culture', link: '/category/culture' },
    { id: 3, name: 'Authors', link: '/category/authors' },
    { id: 4, name: 'Events', link: '/category/events' }
  ];

const Blog = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllPosts, setShowAllPosts] = useState(false); // New state for posts

    const toggleCategories = () => {
      setShowAllCategories((prev) => !prev);
    };
  
    const togglePosts = () => {
      setShowAllPosts((prev) => !prev); // Toggle posts visibility
    };


  return (
    <div className="bg-bg min-h-screen font-mont">
      <h3 className="text-3xl sm:text-4xl pt-5 font-play font-bold text-center text-black">
        BaYBook's Blog
      </h3>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Blog Posts */}
        <div className="lg:w-3/4">
          {mockData.map(post => (
            <article key={post.id} className="bg-white p-6 mb-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">
                {post.excerpt}
              </p>
              <Link to={post.link} className="text-pry hover:underline">Read more...</Link>
            </article>
          ))}
        </div>

        <aside className="lg:w-1/4 lg:ml-6">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 className="font-bold text-lg mb-2">Categories</h3>
            <ul className="space-y-2">
              {mockCategories.slice(0, showAllCategories ? mockCategories.length : 3).map(category => (
                <li key={category.id}>
                  <Link to={category.link} className="text-gray-700 hover:text-pry">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Show More Button */}
            <button 
              onClick={toggleCategories}
              className="text-pry hover:underline mt-2"
            >
              {showAllCategories ? 'Show Less' : 'Show More'}
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h3 className="font-bold text-lg mb-2">Recent Posts</h3>
            <ul className="space-y-2">
              {mockData.slice(0, showAllPosts ? mockData.length : 3).map(post => ( // Adjusted for posts
                <li key={post.id}>
                  <Link to={post.link} className="text-gray-700 hover:text-pry">{post.title}</Link>
                </li>
              ))}
            </ul>
            {/* Show More Button for Recent Posts */}
            <button 
              onClick={togglePosts}
              className="text-pry hover:underline mt-2"
            >
              {showAllPosts ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Blog;
