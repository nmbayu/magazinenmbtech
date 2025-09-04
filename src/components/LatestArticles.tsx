import React from 'react';
import { Calendar, User, Eye, Clock } from 'lucide-react';

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Psychology of Color in Modern Branding",
      excerpt: "Understanding how color choices influence consumer behavior and brand perception in today's market.",
      image: "https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Design",
      author: "Emma Johnson",
      date: "Jan 9, 2025",
      views: "2.3k",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Sustainable Living: Small Changes, Big Impact",
      excerpt: "Simple lifestyle adjustments that can significantly reduce your environmental footprint.",
      image: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Lifestyle",
      author: "Michael Green",
      date: "Jan 8, 2025",
      views: "3.8k",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Street Art Revolution: From Vandalism to Gallery",
      excerpt: "How street art has evolved from underground movement to mainstream artistic recognition.",
      image: "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Art",
      author: "Sofia Martinez",
      date: "Jan 7, 2025",
      views: "4.1k",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "The Future of Remote Work Culture",
      excerpt: "Exploring how remote work is reshaping company culture and employee expectations.",
      image: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technology",
      author: "Alex Chen",
      date: "Jan 6, 2025",
      views: "5.2k",
      readTime: "8 min"
    },
    {
      id: 5,
      title: "Culinary Trends: Plant-Based Innovation",
      excerpt: "The rise of plant-based cuisine and its impact on traditional cooking methods.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Food",
      author: "Isabella Rodriguez",
      date: "Jan 5, 2025",
      views: "3.5k",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Digital Minimalism in the Age of Information",
      excerpt: "Strategies for reducing digital clutter and improving focus in our hyperconnected world.",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Lifestyle",
      author: "Ryan Thompson",
      date: "Jan 4, 2025",
      views: "2.9k",
      readTime: "6 min"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Stay updated with our freshest content covering trending topics and emerging insights.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="group inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">
              View All Articles
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200">
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                      {article.category}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {article.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-800 transform hover:scale-105 transition-all duration-300">
            Load More Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;