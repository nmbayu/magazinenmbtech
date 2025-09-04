import React from 'react';
import { Calendar, User, Eye, ArrowRight } from 'lucide-react';

const FeaturedSection = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Minimalist Architecture: Less is More",
      excerpt: "How modern architects are embracing simplicity to create stunning spaces that speak volumes through their restraint.",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Architecture",
      author: "David Park",
      date: "Jan 12, 2025",
      views: "4.2k",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Renaissance of Analog Photography",
      excerpt: "Young photographers are returning to film, seeking authenticity in an increasingly digital world.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Photography",
      author: "Lisa Wang",
      date: "Jan 11, 2025",
      views: "3.7k",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Culinary Innovation Meets Tradition",
      excerpt: "How modern chefs are reimagining classic dishes while honoring their cultural heritage and stories.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Food",
      author: "Chef Antonio",
      date: "Jan 10, 2025",
      views: "5.1k",
      readTime: "7 min read"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 transform hover:scale-110 transition-transform duration-300">
            <ArrowRight className="text-white transform -rotate-45" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dive deep into our carefully curated selection of thought-provoking articles that challenge perspectives and inspire creativity.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <article
              key={article.id}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'h-80 lg:h-96' : 'h-64'
                }`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
                      {article.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <h3 className={`font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-300 ${
                    index === 0 ? 'text-2xl lg:text-3xl leading-tight' : 'text-xl leading-tight'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className={`text-slate-600 mb-6 leading-relaxed ${
                    index === 0 ? 'text-lg' : 'text-base'
                  }`}>
                    {article.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={14} />
                      <span>{article.views} views</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6">
                    <div className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                      Read More
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;