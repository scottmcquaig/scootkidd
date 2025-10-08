import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost3Props {
  onBackToHome: () => void;
  onBackToBlog: () => void;
  onNavigateToPost: (postId: 'blog1' | 'blog2' | 'blog3') => void;
}

export function BlogPost3({ onBackToHome, onBackToBlog, onNavigateToPost }: BlogPost3Props) {
  return (
    <div className="min-h-screen bg-[#FAF5EE] relative overflow-hidden">
      {/* Vintage paper texture background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='23' r='1'/%3E%3Ccircle cx='29' cy='3' r='1'/%3E%3Ccircle cx='41' cy='31' r='1'/%3E%3Ccircle cx='19' cy='47' r='1'/%3E%3Ccircle cx='53' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#075C70]/10 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={onBackToBlog}
                variant="ghost"
                className="text-[#075C70] hover:text-[#CC473C] hover:bg-[#CC473C]/10 flex items-center gap-2 px-4 py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
              <span className="text-[#7C7C7C]">|</span>
              <Button 
                onClick={onBackToHome}
                variant="ghost"
                className="text-[#7C7C7C] hover:text-[#075C70] hover:bg-[#075C70]/10 px-4 py-2"
              >
                Home
              </Button>
            </div>
            
            <span className="text-xl tracking-wide" style={{ fontFamily: "'Cooper Hewitt', 'Avenir', 'Century Gothic', sans-serif", fontWeight: 'bold' }}>
              <span className="text-[#075C70]">ScootKidd</span><span className="text-[#CC473C]">.</span><span className="text-[#075C70]">com</span>
            </span>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 relative">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="mb-6">
            <Badge className="bg-[#075C70]/10 text-[#075C70] border border-[#075C70]/20 px-4 py-2 text-sm">
              Mindset
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-[#075C70] mb-6 leading-tight max-w-3xl mx-auto">
            How to Actually Get Sh*t Done (Without Burning Out)
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-[#7C7C7C] text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Scoot Kidd</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
            <span>Dec 5, 2024</span>
          </div>
          
          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-24"></div>
            <div className="mx-4 text-[#CC473C] text-xl">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-24"></div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 relative">
          <div className="relative overflow-hidden shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5ODY1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern productivity workspace"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#075C70]/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-none border-l-4 border-[#CC473C] shadow-lg mb-8">
            <p className="text-xl text-[#222222] font-serif italic leading-relaxed mb-6">
              "Productivity porn is killing your progress. Here's how to build systems that actually work for real humans."
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              The productivity industry has convinced you that the problem is your system. Wrong. The problem is that you're treating yourself like a machine instead of a human being.
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Machines don't get tired, distracted, or demotivated. Humans do. And that's exactly why most productivity advice fails spectacularly.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-none border-2 border-[#075C70]/20 shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                The Productivity Trap
                <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              You've been sold a lie: that optimization equals results. That the right app, the perfect morning routine, or the ultimate productivity hack will finally make you unstoppable.
            </p>
            
            <div className="bg-[#CC473C]/5 border-l-4 border-[#CC473C] p-4 mb-6">
              <p className="text-[#333333] italic">
                "I have 47 productivity apps on my phone and I still can't get anything meaningful done." — Every productivity addict ever
              </p>
            </div>
            
            <p className="text-[#333333] leading-relaxed">
              The real issue isn't your tools. It's that you're optimizing for the wrong things: busy work instead of meaningful work, perfection instead of progress, feeling productive instead of being effective.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-none border-2 border-[#CC473C]/20 shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                The Three Pillars of Sustainable Productivity
                <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <div className="space-y-8">
              <div className="p-6 bg-white/50 border-l-4 border-[#075C70] shadow-sm">
                <h3 className="text-xl text-[#075C70] mb-3">1. Energy Management Over Time Management</h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  You don't have a time problem; you have an energy problem. Everyone gets 24 hours. Not everyone gets the same energy levels throughout those hours.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-[#CC473C] mr-2">•</span>
                    <span>Do your hardest work when your energy is highest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC473C] mr-2">•</span>
                    <span>Batch similar tasks to avoid context switching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC473C] mr-2">•</span>
                    <span>Protect your peak hours like Fort Knox</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-white/50 border-l-4 border-[#CC473C] shadow-sm">
                <h3 className="text-xl text-[#CC473C] mb-3">2. Constraints Create Freedom</h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  Infinite possibilities = paralysis. Smart constraints = focused action.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-[#075C70] mr-2">•</span>
                    <span>Choose only 3 priorities per day (maximum)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#075C70] mr-2">•</span>
                    <span>Set artificial deadlines that force decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#075C70] mr-2">•</span>
                    <span>Use "good enough" as your new perfectionism</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-white/50 border-l-4 border-[#075C70] shadow-sm">
                <h3 className="text-xl text-[#075C70] mb-3">3. Recovery is Productive</h3>
                <p className="text-[#333333] leading-relaxed mb-3">
                  Rest isn't the enemy of productivity; it's the foundation. Your brain needs downtime to process, connect, and create.
                </p>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start">
                    <span className="text-[#CC473C] mr-2">•</span>
                    <span>Schedule breaks like you schedule meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC473C] mr-2">•</span>
                    <span>Treat sleep as a performance enhancer, not a luxury</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC473C] mr-2">•</span>
                    <span>Embrace boredom—it's where breakthrough ideas happen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-none border-l-4 border-[#075C70] shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                The Anti-Productivity System
                <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Here's a system so simple it actually works:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg text-[#075C70]">Daily</h3>
                <div className="space-y-3 text-[#333333]">
                  <div className="flex items-start">
                    <span className="text-[#CC473C] text-lg mr-3">1.</span>
                    <span>Pick ONE thing that matters most</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#CC473C] text-lg mr-3">2.</span>
                    <span>Do it first, when your energy is highest</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#CC473C] text-lg mr-3">3.</span>
                    <span>Everything else is gravy</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg text-[#075C70]">Weekly</h3>
                <div className="space-y-3 text-[#333333]">
                  <div className="flex items-start">
                    <span className="text-[#CC473C] text-lg mr-3">1.</span>
                    <span>Review what actually got done (not what you planned)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#CC473C] text-lg mr-3">2.</span>
                    <span>Identify energy patterns and time wasters</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#CC473C] text-lg mr-3">3.</span>
                    <span>Adjust based on reality, not aspirations</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#075C70]/5 border border-[#075C70]/20 italic text-[#333333]">
              "The goal isn't to do more things. It's to do the right things with the energy you actually have."
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#075C70]/10 to-[#CC473C]/10 p-8 rounded-none border-2 border-[#075C70]/20 shadow-lg">
            <h2 className="text-2xl text-[#075C70] mb-4 relative">
              <span className="relative">
                The Bottom Line
                <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              Stop trying to optimize yourself into a machine. Start working with your human nature instead of against it.
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed italic">
              The most productive people aren't the ones with the most systems. They're the ones who do the important work consistently, recover properly, and ignore everything else.
            </p>
          </div>
        </div>

        {/* Pagination Navigation */}
        <div className="mt-12 mb-8">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-none border-2 border-[#075C70]/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <span className="text-sm text-[#7C7C7C] uppercase tracking-wide">Previous</span>
                <button 
                  onClick={() => onNavigateToPost('blog2')}
                  className="block text-[#075C70] hover:text-[#CC473C] transition-colors"
                >
                  ← The 3 Strength Principles
                </button>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={onBackToBlog}
                  variant="outline"
                  className="border border-[#075C70] text-[#075C70] hover:bg-[#075C70] hover:text-white px-6 py-2 rounded-none"
                >
                  All Posts
                </Button>
              </div>
              
              <div className="flex-1 text-right">
                <span className="text-sm text-[#7C7C7C] uppercase tracking-wide">Next</span>
                <div className="text-[#7C7C7C] italic">No newer posts →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-white/50 backdrop-blur-sm p-8 rounded-none border-2 border-[#CC473C]/20 shadow-lg">
          <h3 className="text-xl text-[#075C70] mb-4">Want More Reality-Based Productivity?</h3>
          <p className="text-[#7C7C7C] mb-6">
            Get practical systems that work for humans, not robots.
          </p>
          <Button 
            onClick={onBackToHome}
            className="bg-[#CC473C] hover:bg-[#B8382C] text-white px-8 py-3 rounded-none border-2 border-[#CC473C] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] tracking-wide"
          >
            Join the Newsletter
          </Button>
        </div>

        {/* Vintage corner ornaments */}
        <div className="absolute top-20 left-6 text-[#CC473C]/10 text-4xl font-serif">❈</div>
        <div className="absolute bottom-20 right-6 text-[#075C70]/10 text-4xl font-serif">✧</div>
      </article>
    </div>
  );
}