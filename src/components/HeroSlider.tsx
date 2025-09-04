import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, Eye } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "The Future of Digital Art in Modern Society",
      excerpt: "Exploring how artificial intelligence and blockchain technology are revolutionizing the art world and creating new opportunities for artists.",
      image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Technology",
      author: "Sarah Chen",
      date: "Jan 15, 2025",
      views: "2.4k",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Fashion: The New Wave of Conscious Living",
      excerpt: "How eco-friendly fashion brands are changing consumer behavior and creating a more sustainable future for the industry.",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Fashion",
      author: "Marcus Thompson",
      date: "Jan 14, 2025",
      views: "3.1k",
      featured: true
    },
    {
      id: 3,
      title: "Urban Exploration: Hidden Gems in Metropolitan Cities",
      excerpt: "Discovering the secret spots and architectural marvels that make city life extraordinary and full of surprises.",
      image: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Travel",
      author: "Elena Rodriguez",
      date: "Jan 13, 2025",
      views: "1.8k",
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 transform translate-x-0' 
              : index < currentSlide 
                ? 'opacity-0 transform -translate-x-full' 
                : 'opacity-0 transform translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 ease-out hover:scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                {/* Category Badge */}
                <div className="mb-4 transform transition-all duration-700 delay-300">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    {slide.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 delay-500">
                  {slide.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed transform transition-all duration-700 delay-700">
                  {slide.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-white/80 transform transition-all duration-700 delay-900">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="text-sm">{slide.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{slide.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    <span className="text-sm">{slide.views} views</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group inline-flex items-center px-8 py-4 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform transition-all duration-700 delay-1100">
                  Read Full Article
                  <ChevronRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300 group"
      >
        <ChevronLeft size={24} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300 group"
      >
        <ChevronRight size={24} className="transform group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;