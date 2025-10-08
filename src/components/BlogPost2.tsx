import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost2Props {
  onBackToHome: () => void;
  onBackToBlog: () => void;
  onNavigateToPost: (postId: 'blog1' | 'blog2' | 'blog3') => void;
}

export function BlogPost2({ onBackToHome, onBackToBlog, onNavigateToPost }: BlogPost2Props) {
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
            <Badge className="bg-[#CC473C]/10 text-[#CC473C] border border-[#CC473C]/20 px-4 py-2 text-sm">
              Performance
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-[#075C70] mb-6 leading-tight max-w-3xl mx-auto">
            The 3 Strength Principles Every High Performer Needs
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-[#7C7C7C] text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Scoot Kidd</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
            <span>Dec 10, 2024</span>
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
              src="https://images.unsplash.com/photo-1758223520574-a6911a5aa504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZml0bmVzcyUyMG1pbmltYWx8ZW58MXx8fHwxNzU5ODc1MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Strength training and fitness"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#CC473C]/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-none border-l-4 border-[#CC473C] shadow-lg mb-8">
            <p className="text-xl text-[#222222] font-serif italic leading-relaxed mb-6">
              "Strength isn't just about lifting heavy things. It's about building an unbreakable foundation for everything else in your life."
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              High performers understand something most people miss: physical strength is the gateway drug to mental resilience, emotional stability, and peak performance in every area of life.
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-6">
              But here's the problem: most fitness advice is either overcomplicated nonsense designed to sell supplements, or oversimplified garbage that ignores the fundamentals. Let me cut through the noise.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-none border-2 border-[#075C70]/20 shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                Principle #1: Progressive Overload is King
                <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              Your body adapts to stress. Give it the same stress every day, and it stops adapting. Give it progressively more stress, and it gets stronger.
            </p>
            
            <p className="text-[#333333] leading-relaxed mb-4">
              This doesn't mean adding weight every session like some meathead. It means:
            </p>
            
            <ul className="space-y-3 text-[#333333] leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#CC473C] text-xl mr-3 mt-1">•</span>
                <div>Adding reps before adding weight</div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CC473C] text-xl mr-3 mt-1">•</span>
                <div>Improving form and range of motion</div>
              </li>
              <li className="flex items-start">
                <span className="text-[#CC473C] text-xl mr-3 mt-1">•</span>
                <div>Reducing rest time between sets</div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-[#075C70]/5 border-l-2 border-[#075C70] italic text-[#333333]">
              "The strongest people I know aren't the ones who started with the heaviest weights. They're the ones who never missed a session."
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-none border-2 border-[#CC473C]/20 shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                Principle #2: Compound Movements Build Real Strength
                <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              Your body doesn't work in isolation. Neither should your training.
            </p>
            
            <p className="text-[#333333] leading-relaxed mb-4">
              Forget the Instagram-worthy isolation exercises. Focus on movements that use multiple muscle groups:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="p-4 bg-white/50 border border-[#075C70]/20">
                <h3 className="text-lg text-[#075C70] mb-2">Upper Body</h3>
                <ul className="space-y-1 text-[#333333]">
                  <li>• Pull-ups/Chin-ups</li>
                  <li>• Push-ups/Dips</li>
                  <li>• Overhead Press</li>
                  <li>• Rows</li>
                </ul>
              </div>
              <div className="p-4 bg-white/50 border border-[#CC473C]/20">
                <h3 className="text-lg text-[#CC473C] mb-2">Lower Body</h3>
                <ul className="space-y-1 text-[#333333]">
                  <li>• Squats</li>
                  <li>• Deadlifts</li>
                  <li>• Lunges</li>
                  <li>• Hip Hinges</li>
                </ul>
              </div>
            </div>
            
            <p className="text-[#333333] leading-relaxed italic">
              Master these movement patterns, and you'll build strength that transfers to real life. Everything else is just decoration.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-none border-2 border-[#075C70]/20 shadow-lg mb-8">
            <h2 className="text-2xl text-[#075C70] mb-6 relative">
              <span className="relative">
                Principle #3: Recovery is Where the Magic Happens
                <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-[#CC473C]"></div>
              </span>
            </h2>
            
            <p className="text-lg text-[#333333] leading-relaxed mb-4">
              Your muscles don't grow in the gym. They grow when you're sleeping, eating, and recovering.
            </p>
            
            <p className="text-[#333333] leading-relaxed mb-6">
              High performers understand that recovery isn't passive rest—it's active preparation for the next challenge.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-[#075C70]/5 border-l-2 border-[#075C70]">
                <h4 className="text-lg text-[#075C70] mb-2">Sleep: The Ultimate Performance Drug</h4>
                <p className="text-[#333333]">7-9 hours of quality sleep isn't negotiable. Your nervous system recovers, your hormones rebalance, and your muscles repair.</p>
              </div>
              
              <div className="p-4 bg-[#CC473C]/5 border-l-2 border-[#CC473C]">
                <h4 className="text-lg text-[#CC473C] mb-2">Nutrition: Fuel for Reconstruction</h4>
                <p className="text-[#333333]">Eat enough protein to rebuild. Eat enough carbs to refuel. Don't overthink it.</p>
              </div>
              
              <div className="p-4 bg-[#075C70]/5 border-l-2 border-[#075C70]">
                <h4 className="text-lg text-[#075C70] mb-2">Stress Management: The Hidden Variable</h4>
                <p className="text-[#333333]">Chronic stress kills gains. Manage your mind, or it will sabotage your body.</p>
              </div>
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
              Strength training isn't about looking good in a mirror (though that's a nice side effect). It's about building unshakeable confidence, mental resilience, and the physical capacity to handle whatever life throws at you.
            </p>
            
            <p className="text-lg text-[#333333] leading-relaxed italic">
              Every rep you complete is evidence that you can do hard things. Every set you finish is proof that you don't quit when it gets difficult. That's the real strength.
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
                  onClick={() => onNavigateToPost('blog1')}
                  className="block text-[#075C70] hover:text-[#CC473C] transition-colors"
                >
                  ← Why Self-Help is Bullsh*t
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
                <button 
                  onClick={() => onNavigateToPost('blog3')}
                  className="block text-[#075C70] hover:text-[#CC473C] transition-colors"
                >
                  How to Get Sh*t Done →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-white/50 backdrop-blur-sm p-8 rounded-none border-2 border-[#CC473C]/20 shadow-lg">
          <h3 className="text-xl text-[#075C70] mb-4">Ready to Build Real Strength?</h3>
          <p className="text-[#7C7C7C] mb-6">
            Get the complete framework for sustainable strength and performance.
          </p>
          <Button 
            onClick={onBackToHome}
            className="bg-[#CC473C] hover:bg-[#B8382C] text-white px-8 py-3 rounded-none border-2 border-[#CC473C] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] tracking-wide"
          >
            Get Built AF
          </Button>
        </div>

        {/* Vintage corner ornaments */}
        <div className="absolute top-20 left-6 text-[#CC473C]/10 text-4xl font-serif">❈</div>
        <div className="absolute bottom-20 right-6 text-[#075C70]/10 text-4xl font-serif">✧</div>
      </article>
    </div>
  );
}