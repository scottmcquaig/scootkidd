import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost1Props {
  onBackToHome: () => void;
  onBackToBlog: () => void;
  onNavigateToPost: (postId: 'blog1' | 'blog2' | 'blog3') => void;
}

export function BlogPost1({ onBackToHome, onBackToBlog, onNavigateToPost }: BlogPost1Props) {
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
              Philosophy
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-[#075C70] mb-6 leading-tight max-w-3xl mx-auto">
            Why Most Self-Help is Bullsh*t (And What Actually Works)
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-[#7C7C7C] text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Scoot Kidd</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <span>Dec 15, 2024</span>
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
              src="https://images.unsplash.com/photo-1643050079091-1d4a51e07ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwcmVhZGluZyUyMGJvb2tzJTIwdmludGFnZXxlbnwxfHx8fDE3NTk4NzUwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Philosophy and wisdom - vintage books"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#075C70]/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-none border-l-4 border-[#CC473C] shadow-lg mb-8">
            <p className="text-xl text-[#222222] font-serif italic leading-relaxed mb-6">
              "The self-help industry is a $13 billion circus of false promises and recycled platitudes. Here's what they don't want you to know."
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              I've spent years swimming through the self-help swamp, and I'm here to tell you: most of it is complete garbage. Not because the authors are malicious (though some are), but because they're selling you fantasy instead of reality.
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              The problem isn't that you lack motivation. The problem is that motivation is bullsh*t. It's unreliable, fleeting, and about as useful as a chocolate teapot when life gets hard.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-none border-2 border-[#075C70]/20 shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-4 relative">
              <span className="relative">
                The Three Lies of Self-Help
                <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-[#075C70] mb-2">1. "Just Think Positive"</h3>
                <p className="text-[#333333] leading-relaxed">
                  Positive thinking without action is just daydreaming with better marketing. Your problems don't disappear because you smiled at them.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl text-[#075C70] mb-2">2. "Follow Your Passion"</h3>
                <p className="text-[#333333] leading-relaxed">
                  Passion is discovered through competence, not the other way around. You don't find your calling; you build it through deliberate practice and grit.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl text-[#075C70] mb-2">3. "Believe in Yourself"</h3>
                <p className="text-[#333333] leading-relaxed">
                  Belief without evidence is delusion. Instead of believing in yourself, trust your systems and trust your process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-none border-l-4 border-[#075C70] shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                What Actually Works
                <div className="absolute -bottom-1 left-0 w-20 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              Real change comes from boring, unsexy fundamentals that most people ignore because they're not Instagram-worthy:
            </p>
            
            <ul className="space-y-4 text-[#333333] leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#CC473C] text-xl mr-3 mt-1">•</span>
                <div>
                  <strong>Systems over goals:</strong> Focus on the process, not the outcome. Goals are dreams with deadlines; systems are dreams with architecture.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CC473C] text-xl mr-3 mt-1">•</span>
                <div>
                  <strong>Consistency over intensity:</strong> Small actions repeated daily beat heroic efforts that burn out after a week.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CC473C] text-xl mr-3 mt-1">•</span>
                <div>
                  <strong>Identity over outcomes:</strong> Don't try to lose weight; become someone who eats well. Don't try to write a book; become a writer.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#075C70]/10 to-[#CC473C]/10 p-8 rounded-none border-2 border-[#075C70]/20 shadow-lg">
            <h2 className="text-2xl text-[#075C70] mb-4 relative">
              <span className="relative">
                The Bottom Line
                <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              Stop looking for the secret sauce. There isn't one. There's only the work, done consistently, with systems that account for your humanity instead of demanding perfection.
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed italic">
              The self-help industry sells you the sizzle. I'm giving you the steak: raw, unfiltered, and actually nutritious.
            </p>
          </div>
        </div>

        {/* Pagination Navigation */}
        <div className="mt-12 mb-8">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-none border-2 border-[#075C70]/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <span className="text-sm text-[#7C7C7C] uppercase tracking-wide">Previous</span>
                <div className="text-[#7C7C7C] italic">← No previous posts</div>
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
                <Button 
                  onClick={() => onNavigateToPost('blog2')}
                  variant="ghost"
                  className="text-[#075C70] hover:text-[#CC473C] hover:bg-[#CC473C]/10 p-2 h-auto transition-all duration-300"
                >
                  The 3 Strength Principles →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-white/50 backdrop-blur-sm p-8 rounded-none border-2 border-[#CC473C]/20 shadow-lg">
          <h3 className="text-xl text-[#075C70] mb-4">Want More Unfiltered Truth?</h3>
          <p className="text-[#7C7C7C] mb-6">
            Get practical wisdom that actually works delivered to your inbox. No fluff, just substance.
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