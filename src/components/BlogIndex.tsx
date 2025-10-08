import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogIndexProps {
  onBackToHome: () => void;
  onNavigateToPost: (postId: 'blog1' | 'blog2' | 'blog3') => void;
}

export function BlogIndex({ onBackToHome, onNavigateToPost }: BlogIndexProps) {
  const blogPosts = [
    {
      id: 'blog1' as const,
      category: 'Philosophy',
      categoryColor: 'bg-[#075C70]/10 text-[#075C70] border-[#075C70]/20',
      title: 'Why Most Self-Help is Bullsh*t (And What Actually Works)',
      excerpt: 'Cut through the motivational fluff and discover the brutal truths about personal development that nobody wants to tell you.',
      readTime: '5 min read',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1643050079091-1d4a51e07ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwcmVhZGluZyUyMGJvb2tzJTIwdmludGFnZXxlbnwxfHx8fDE3NTk4NzUwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'blog2' as const,
      category: 'Performance',
      categoryColor: 'bg-[#CC473C]/10 text-[#CC473C] border-[#CC473C]/20',
      title: 'The 3 Strength Principles Every High Performer Needs',
      excerpt: 'Stop overcomplicating fitness. These three foundational principles will build sustainable strength for life.',
      readTime: '7 min read',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1758223520574-a6911a5aa504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZml0bmVzcyUyMG1pbmltYWx8ZW58MXx8fHwxNzU5ODc1MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'blog3' as const,
      category: 'Mindset',
      categoryColor: 'bg-[#075C70]/10 text-[#075C70] border-[#075C70]/20',
      title: 'How to Actually Get Sh*t Done (Without Burning Out)',
      excerpt: 'Productivity porn is killing your progress. Here\'s how to build systems that actually work for real humans.',
      readTime: '6 min read',
      date: 'Dec 5, 2024',
      image: 'https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5ODY1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5EE] relative overflow-hidden">
      {/* Vintage paper texture background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='23' r='1'/%3E%3Ccircle cx='29' cy='3' r='1'/%3E%3Ccircle cx='41' cy='31' r='1'/%3E%3Ccircle cx='19' cy='47' r='1'/%3E%3Ccircle cx='53' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#075C70]/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              onClick={onBackToHome}
              variant="ghost"
              className="text-[#075C70] hover:text-[#CC473C] hover:bg-[#CC473C]/10 flex items-center gap-2 px-4 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            
            <span className="text-xl tracking-wide" style={{ fontFamily: "'Cooper Hewitt', 'Avenir', 'Century Gothic', sans-serif", fontWeight: 'bold' }}>
              <span className="text-[#075C70]">ScootKidd</span><span className="text-[#CC473C]">.</span><span className="text-[#075C70]">com</span>
            </span>
          </div>
        </div>
      </header>

      {/* Blog Index Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-24"></div>
            <div className="mx-4 text-[#075C70] text-2xl">✦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-24"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-[#075C70] mb-6 leading-tight max-w-3xl mx-auto">
            Latest from the Blog
          </h1>
          
          <p className="text-xl text-[#7C7C7C] max-w-2xl mx-auto font-serif italic leading-relaxed">
            Sharp insights, practical wisdom, and unfiltered takes on building a life worth living. No fluff, just substance.
          </p>
          
          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-32"></div>
            <div className="mx-4 text-[#CC473C] text-xl">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-32"></div>
          </div>
        </header>

        {/* Blog Posts Grid */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white/60 backdrop-blur-sm rounded-none border-2 border-[#075C70]/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] relative group overflow-hidden"
            >
              {/* Vintage frame decoration */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <ImageWithFallback 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#075C70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Content */}
                <div className={`flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div>
                      <Badge className={`${post.categoryColor} border px-4 py-2 text-sm`}>
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl text-[#075C70] group-hover:text-[#CC473C] transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#7C7C7C] leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Meta and CTA */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-6 text-[#7C7C7C] text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Scoot Kidd</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    
                    <Button 
                      onClick={() => onNavigateToPost(post.id)}
                      className="bg-[#075C70] hover:bg-[#05485A] text-white px-8 py-3 rounded-none border-2 border-[#075C70] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] tracking-wide"
                    >
                      Read Full Article →
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#075C70] via-[#05485A] to-[#075C70] text-white p-12 rounded-none border-2 border-[#075C70]/20 shadow-2xl relative overflow-hidden">
          {/* Vintage paper texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='23' r='1'/%3E%3Ccircle cx='29' cy='3' r='1'/%3E%3Ccircle cx='41' cy='31' r='1'/%3E%3Ccircle cx='19' cy='47' r='1'/%3E%3Ccircle cx='53' cy='17' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-4 text-white tracking-wide">
              Never Miss a Post
            </h3>
            <p className="text-gray-200 mb-8 text-lg font-serif italic">
              Get the latest insights on philosophy, performance, and building a life worth living delivered straight to your inbox.
            </p>
            <Button 
              onClick={onBackToHome}
              className="bg-[#CC473C] hover:bg-[#B8382C] text-white px-8 py-4 rounded-none border-2 border-[#CC473C] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] tracking-wide text-lg"
            >
              Join the Newsletter
            </Button>
          </div>
          
          {/* Vintage corner decorations */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/20"></div>
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/20"></div>
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#CC473C]/40"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#CC473C]/40"></div>
        </div>

        {/* Vintage corner ornaments */}
        <div className="absolute top-20 left-6 text-[#CC473C]/10 text-4xl font-serif">❈</div>
        <div className="absolute bottom-20 right-6 text-[#075C70]/10 text-4xl font-serif">✧</div>
      </div>
    </div>
  );
}