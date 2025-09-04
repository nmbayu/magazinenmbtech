import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-500 rounded-full blur-lg"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {!isSubscribed ? (
            <>
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-8 transform hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={32} />
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stay in the Creative Loop
              </h2>
              
              {/* Description */}
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Get our latest articles, exclusive insights, and creative inspiration delivered straight to your inbox. Join our community of curious minds.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Subscribe
                        <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                {[
                  {
                    title: "Weekly Digest",
                    description: "Curated selection of our best content delivered every week"
                  },
                  {
                    title: "Exclusive Content",
                    description: "Access to subscriber-only articles and behind-the-scenes insights"
                  },
                  {
                    title: "No Spam",
                    description: "Quality over quantity. Unsubscribe anytime with one click"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="transform animate-fade-in">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-8 transform animate-bounce">
                <CheckCircle className="text-white" size={32} />
              </div>

              {/* Success Message */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Welcome Aboard!
              </h2>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Thanks for subscribing! You'll receive your first digest soon. Get ready for some amazing content.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;