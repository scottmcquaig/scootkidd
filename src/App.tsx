import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import scootKiddLogo from 'figma:asset/1475e3343707873be0964e6fb2a8ea580946d71b.png';
import authorPhoto from 'figma:asset/6537e230d38cadae527ad61c1ab2f05c23937740.png';
import { Instagram, Youtube, BookOpen, Menu, X } from 'lucide-react';
import { BlogPost1 } from './components/BlogPost1';
import { BlogPost2 } from './components/BlogPost2';
import { BlogPost3 } from './components/BlogPost3';
import { BlogIndex } from './components/BlogIndex';

export default function App() {
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'blog-index' | 'blog1' | 'blog2' | 'blog3'>('home');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navigateToBlogPost = (postId: 'blog1' | 'blog2' | 'blog3') => {
    setCurrentPage(postId);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToBlogIndex = () => {
    setCurrentPage('blog-index');
    window.scrollTo(0, 0);
  };

  // Render blog posts based on current page
  if (currentPage === 'blog-index') {
    return <BlogIndex onBackToHome={navigateToHome} onNavigateToPost={navigateToBlogPost} />;
  }
  if (currentPage === 'blog1') {
    return <BlogPost1 onBackToHome={navigateToHome} onBackToBlog={navigateToBlogIndex} onNavigateToPost={navigateToBlogPost} />;
  }
  if (currentPage === 'blog2') {
    return <BlogPost2 onBackToHome={navigateToHome} onBackToBlog={navigateToBlogIndex} onNavigateToPost={navigateToBlogPost} />;
  }
  if (currentPage === 'blog3') {
    return <BlogPost3 onBackToHome={navigateToHome} onBackToBlog={navigateToBlogIndex} onNavigateToPost={navigateToBlogPost} />;
  }

  return (
    <div className="min-h-screen bg-[#FAF5EE] relative overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#075C70]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl tracking-wide" style={{ fontFamily: "'Cooper Hewitt', 'Avenir', 'Century Gothic', sans-serif", fontWeight: 'bold' }}>
                <span className="text-[#075C70]">ScootKidd</span><span className="text-[#CC473C]">.</span><span className="text-[#075C70]">com</span>
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('books')}
                className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide"
              >
                Books
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide"
              >
                Contact
              </button>
              
              {/* CTA Button */}
              <Button 
                onClick={() => scrollToSection('books')}
                className="bg-[#CC473C] hover:bg-[#CC473C]/90 text-white px-4 py-2 rounded-none font-medium tracking-wide transition-all duration-300 hover:shadow-md"
              >
                Get the Book
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#075C70] hover:text-[#CC473C] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#075C70]/10 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide text-left"
                >
                  Blog
                </button>
                <button 
                  onClick={() => scrollToSection('books')}
                  className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide text-left"
                >
                  Books
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-[#075C70] hover:text-[#CC473C] transition-colors font-medium tracking-wide text-left"
                >
                  Contact
                </button>
                
                <div className="pt-2">
                  <Button 
                    onClick={() => scrollToSection('books')}
                    className="bg-[#CC473C] hover:bg-[#CC473C]/90 text-white px-4 py-2 rounded-none font-medium tracking-wide w-full"
                  >
                    Get the Book
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Vintage paper texture background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='23' r='1'/%3E%3Ccircle cx='29' cy='3' r='1'/%3E%3Ccircle cx='41' cy='31' r='1'/%3E%3Ccircle cx='19' cy='47' r='1'/%3E%3Ccircle cx='53' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen max-h-[800px] flex flex-col items-center justify-center px-6 py-20" style={{ paddingTop: '140px' }}>
        {/* Vintage decorative elements */}
        <div className="absolute left-10 opacity-10 text-[#CC473C] text-6xl font-serif rotate-12 select-none" style={{ top: '160px' }}>❈</div>
        <div className="absolute right-16 opacity-10 text-[#075C70] text-4xl font-serif -rotate-12 select-none" style={{ top: '180px' }}>✦</div>
        <div className="absolute bottom-32 left-20 opacity-10 text-[#CC473C] text-5xl font-serif rotate-45 select-none">✧</div>
        
        {/* Subtle gradient overlay with vintage feel */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#FAF5EE]/50 to-[#F5E6D3]/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Decorative top border */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-32"></div>
            <div className="mx-4 text-[#CC473C] text-2xl">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-32"></div>
          </div>
          
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#075C70]/5 to-[#CC473C]/5 rounded-full blur-3xl scale-110"></div>
            <img 
              src={scootKiddLogo} 
              alt="Scoot Kidd Logo" 
              className="relative w-full max-w-md md:max-w-lg mx-auto h-auto"
            />
          </div>
          
          {/* Tagline with vintage styling */}
          <div className="mb-12 relative">
            <p className="tracking-[0.3em] uppercase text-sm md:text-base text-[#075C70] font-serif relative">
              <span className="relative z-10 bg-[#FAF5EE] px-4">Author. Thinker. Classic Maker.</span>
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-[#075C70]/30 to-transparent w-full"></div>
            </div>
          </div>
          
          {/* Button Row with vintage styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="relative bg-[#075C70] hover:bg-[#05485A] text-white px-8 py-3 rounded-none border-2 border-[#075C70] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] font-semibold tracking-wide"
              size="lg"
            >
              <span className="relative z-10">Read Stoic AF</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
            <Button 
              variant="outline" 
              className="relative border-2 border-[#CC473C] text-[#CC473C] hover:bg-[#CC473C] hover:text-white px-8 py-3 rounded-none bg-[#FAF5EE] transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] font-semibold tracking-wide"
              size="lg"
            >
              <span className="relative z-10">Built AF — Coming Soon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC473C]/10 to-transparent skew-x-12 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>
          
          {/* Decorative bottom border */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-24"></div>
            <div className="mx-4 text-[#075C70] text-xl">❋</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-24"></div>
          </div>
        </div>
        
        {/* Enhanced animated wheel motif */}
        <div className="absolute bottom-10 right-10 opacity-15">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-[#075C70] border-t-[#CC473C] animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#CC473C]/50 animate-pulse"></div>
          </div>
        </div>
        
        {/* Vintage corner decorations */}
        <div className="absolute left-6 w-12 h-12 border-t-2 border-l-2 border-[#CC473C]/20" style={{ top: '100px' }}></div>
        <div className="absolute right-6 w-12 h-12 border-t-2 border-r-2 border-[#CC473C]/20" style={{ top: '100px' }}></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#075C70]/20"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#075C70]/20"></div>
      </section>

      {/* Meet the Author Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-white via-[#FEFCF8] to-[#F9F5F0] relative">
        {/* Vintage decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30L70 50L50 70L30 50Z' fill='none' stroke='%23C65338' stroke-width='1'/%3E%3Cpath d='M20 20L80 20L80 80L20 80Z' fill='none' stroke='%231E3A5F' stroke-width='1'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-4xl mx-auto relative text-center">
          {/* Section header with vintage decoration */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-20"></div>
              <div className="mx-4 text-[#CC473C] text-xl">✦</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-20"></div>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#075C70] tracking-wide relative">
              <span className="relative">
                Meet the Author
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-[#CC473C] to-[#075C70]"></div>
              </span>
            </h2>
          </div>
          
          {/* Author Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left Column - Author Photo */}
            <div className="relative text-center">
              <div className="relative inline-block">
                {/* Vintage frame effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#075C70]/10 to-[#CC473C]/10 rounded-lg transform rotate-1"></div>
                <div className="absolute -inset-2 bg-white/80 rounded-lg transform -rotate-1 shadow-lg"></div>
                
                <div className="relative bg-white p-4 rounded-lg shadow-2xl">
                  <img 
                    src={authorPhoto}
                    alt="Scoot Kidd - Author Photo"
                    className="w-64 h-80 object-cover rounded-sm mx-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Column - Author Bio */}
            <div className="relative">
              {/* Vintage quote mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-[#CC473C]/20 font-serif leading-none">"</div>
              
              <div className="relative z-10 bg-white/50 p-8 rounded-none border-l-4 border-[#CC473C] shadow-lg">
                <p className="text-lg text-[#222222] leading-relaxed mb-4 font-serif">
                  Scoot Kidd writes sharp, funny, and unfiltered manifestos for people ready to rebuild their lives with grit and humor. His work cuts through the noise to deliver practical wisdom that actually works.
                </p>
                <p className="text-[#7C7C7C] italic">
                  From philosophy to performance, Scoot's writing transforms complex ideas into actionable insights for the modern world.
                </p>
                
                {/* Vintage decorative flourish */}
                <div className="mt-6 flex items-center">
                  <div className="text-[#CC473C] text-lg mr-2">❦</div>
                  <div className="h-px bg-gradient-to-r from-[#CC473C] to-transparent flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vintage corner ornaments */}
        <div className="absolute top-10 left-10 text-[#CC473C]/10 text-4xl font-serif">❈</div>
        <div className="absolute bottom-10 right-10 text-[#075C70]/10 text-4xl font-serif">✧</div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#075C70] via-[#05485A] to-[#075C70] text-white relative overflow-hidden">
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='23' r='1'/%3E%3Ccircle cx='29' cy='3' r='1'/%3E%3Ccircle cx='41' cy='31' r='1'/%3E%3Ccircle cx='19' cy='47' r='1'/%3E%3Ccircle cx='53' cy='17' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Vintage decorative elements */}
        <div className="absolute top-16 left-16 opacity-10 text-[#CC473C] text-5xl font-serif rotate-12 select-none">❈</div>
        <div className="absolute bottom-20 right-20 opacity-10 text-white text-4xl font-serif -rotate-12 select-none">✦</div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Section header with vintage decoration */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-24"></div>
              <div className="mx-4 text-[#CC473C] text-2xl">❋</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-24"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl text-white tracking-wide relative mb-4">
              <span className="relative">
                Join the Movement
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#CC473C] to-white/80"></div>
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 font-serif italic leading-relaxed max-w-2xl mx-auto">
              Get sharp insights, practical wisdom, and unfiltered takes delivered straight to your inbox. No fluff, just substance.
            </p>
          </div>
          
          {/* Newsletter signup form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-none border-2 border-white/20 shadow-2xl relative">
            {/* Vintage frame decoration */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-white/40"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-white/40"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#CC473C]/50"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#CC473C]/50"></div>
            
            <div className="max-w-md mx-auto">
              <h3 className="text-xl mb-6 text-white tracking-wide">Stay Connected</h3>
              
              <form onSubmit={handleEmailSubmit} className="space-y-6 relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 text-white placeholder:text-gray-300 border-2 border-white/30 rounded-none px-4 py-4 focus:border-[#CC473C] transition-colors backdrop-blur-sm text-center text-lg"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-[#CC473C] hover:bg-[#B8382C] text-white px-8 py-4 rounded-none border-2 border-[#CC473C] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] tracking-wide text-lg"
                >
                  Join the Newsletter
                </Button>
                
                <p className="text-sm text-gray-300 italic text-center leading-relaxed">
                  Weekly insights on philosophy, performance, and building a life worth living. Unsubscribe anytime.
                </p>
                
                {/* Vintage stamp effect */}
                <div className="absolute -top-3 -right-3 bg-[#CC473C] text-white px-3 py-1 rounded-full text-xs tracking-wide transform rotate-12 shadow-lg border-2 border-white">
                  FREE
                </div>
              </form>
            </div>
          </div>
          
          {/* Bottom decorative elements */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-20"></div>
            <div className="mx-4 text-white/40 text-lg">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-20"></div>
          </div>
        </div>
        
        {/* Vintage corner decorations */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#CC473C]/40"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#CC473C]/40"></div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-gradient-to-br from-white via-[#F9F5F0] to-[#FAF5EE] relative">
        {/* Vintage decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CC473C' fill-opacity='1'%3E%3Cpath d='M60 10L80 40L60 70L40 40Z'/%3E%3Cpath d='M10 60L40 80L70 60L40 40Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          {/* Section header with vintage decoration */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-20"></div>
              <div className="mx-4 text-[#075C70] text-xl">✦</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-20"></div>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#075C70] tracking-wide relative">
              <span className="relative">
                Latest from the Blog
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-[#075C70] to-[#CC473C]"></div>
              </span>
            </h2>
            <p className="text-[#7C7C7C] mt-4 max-w-2xl mx-auto font-serif italic">
              Sharp insights, practical wisdom, and unfiltered takes on building a life worth living
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Blog Post 1 - Philosophy */}
            <article className="bg-white/60 backdrop-blur-sm rounded-none border-2 border-[#075C70]/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] relative group">
              {/* Vintage frame decoration */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1643050079091-1d4a51e07ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwcmVhZGluZyUyMGJvb2tzJTIwdmludGFnZXxlbnwxfHx8fDE3NTk4NzUwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Philosophy and wisdom blog post"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075C70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Badge className="bg-[#075C70]/10 text-[#075C70] border border-[#075C70]/20 px-3 py-1">
                    Philosophy
                  </Badge>
                </div>
                
                <h3 className="text-xl text-[#075C70] mb-3 group-hover:text-[#CC473C] transition-colors leading-tight">
                  Why Most Self-Help is Bullsh*t (And What Actually Works)
                </h3>
                
                <p className="text-[#7C7C7C] text-sm leading-relaxed mb-4">
                  Cut through the motivational fluff and discover the brutal truths about personal development that nobody wants to tell you.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7C7C7C] uppercase tracking-wide">5 min read</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigateToBlogPost('blog1')}
                    className="text-[#075C70] hover:text-[#CC473C] hover:bg-[#CC473C]/10 p-2 h-auto"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
            
            {/* Blog Post 2 - Fitness */}
            <article className="bg-white/60 backdrop-blur-sm rounded-none border-2 border-[#075C70]/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] relative group">
              {/* Vintage frame decoration */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758223520574-a6911a5aa504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwZml0bmVzcyUyMG1pbmltYWx8ZW58MXx8fHwxNzU5ODc1MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strength training and fitness blog post"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#CC473C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Badge className="bg-[#CC473C]/10 text-[#CC473C] border border-[#CC473C]/20 px-3 py-1">
                    Performance
                  </Badge>
                </div>
                
                <h3 className="text-xl text-[#075C70] mb-3 group-hover:text-[#CC473C] transition-colors leading-tight">
                  The 3 Strength Principles Every High Performer Needs
                </h3>
                
                <p className="text-[#7C7C7C] text-sm leading-relaxed mb-4">
                  Stop overcomplicating fitness. These three foundational principles will build sustainable strength for life.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7C7C7C] uppercase tracking-wide">7 min read</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigateToBlogPost('blog2')}
                    className="text-[#075C70] hover:text-[#CC473C] hover:bg-[#CC473C]/10 p-2 h-auto"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
            
            {/* Blog Post 3 - Productivity */}
            <article className="bg-white/60 backdrop-blur-sm rounded-none border-2 border-[#075C70]/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] relative group">
              {/* Vintage frame decoration */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#075C70]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#CC473C]/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5ODY1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Productivity and work philosophy blog post"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075C70]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <Badge className="bg-[#075C70]/10 text-[#075C70] border border-[#075C70]/20 px-3 py-1">
                    Mindset
                  </Badge>
                </div>
                
                <h3 className="text-xl text-[#075C70] mb-3 group-hover:text-[#CC473C] transition-colors leading-tight">
                  How to Actually Get Sh*t Done (Without Burning Out)
                </h3>
                
                <p className="text-[#7C7C7C] text-sm leading-relaxed mb-4">
                  Productivity porn is killing your progress. Here's how to build systems that actually work for real humans.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#7C7C7C] uppercase tracking-wide">6 min read</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigateToBlogPost('blog3')}
                    className="text-[#075C70] hover:text-[#CC473C] hover:bg-[#CC473C]/10 p-2 h-auto"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
            
          </div>
          
          {/* Blog CTA */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-16"></div>
              <div className="mx-3 text-[#CC473C] text-lg">❦</div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-16"></div>
            </div>
            
            <Button 
              variant="outline"
              onClick={navigateToBlogIndex}
              className="border-2 border-[#075C70] text-[#075C70] hover:bg-[#075C70] hover:text-white px-8 py-3 rounded-none bg-white/80 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] font-semibold tracking-wide"
              size="lg"
            >
              View All Blog Posts
            </Button>
          </div>
        </div>
        
        {/* Vintage corner ornaments */}
        <div className="absolute top-10 left-10 text-[#075C70]/10 text-4xl font-serif">❈</div>
        <div className="absolute bottom-10 right-10 text-[#CC473C]/10 text-4xl font-serif">✧</div>
      </section>

      {/* Decorative Divider Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#075C70] via-[#05485A] to-[#075C70] relative overflow-hidden">
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 5L25 15L35 20L25 25L20 35L15 25L5 20L15 15Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Vintage radial burst pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-dashed border-[#CC473C]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center">
            {/* Left decorative elements */}
            <div className="flex-1 flex items-center justify-end space-x-4">
              <div className="text-white/20 text-3xl font-serif">❈</div>
              <div className="h-px bg-gradient-to-r from-transparent to-white/40 w-24"></div>
              <div className="text-[#CC473C]/40 text-2xl">✦</div>
              <div className="h-px bg-gradient-to-r from-transparent to-white/40 w-16"></div>
            </div>
            
            {/* Center ornament */}
            <div className="mx-8 text-center">
              <div className="relative">
                <div className="text-6xl text-white/80 font-serif leading-none">❋</div>
                <div className="absolute inset-0 text-6xl text-[#CC473C]/40 font-serif leading-none animate-pulse">❋</div>
              </div>
            </div>
            
            {/* Right decorative elements */}
            <div className="flex-1 flex items-center justify-start space-x-4">
              <div className="h-px bg-gradient-to-l from-transparent to-white/40 w-16"></div>
              <div className="text-[#CC473C]/40 text-2xl">✧</div>
              <div className="h-px bg-gradient-to-l from-transparent to-white/40 w-24"></div>
              <div className="text-white/20 text-3xl font-serif">❈</div>
            </div>
          </div>
          
          {/* Vintage frame corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#CC473C]/40"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#CC473C]/40"></div>
        </div>
      </section>

      {/* Stoic AF Book Section */}
      <section id="books" className="py-20 px-6 bg-gradient-to-br from-[#F9F5F0] via-[#FAF5EE] to-white relative">
        {/* Vintage decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23075C70' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='70' r='1'/%3E%3Ccircle cx='70' cy='30' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Stoic AF Book Card */}
          <div className="bg-white/70 backdrop-blur-sm p-12 rounded-none border-2 border-[#075C70]/20 shadow-2xl relative">
            {/* Vintage frame decoration */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#075C70]/30"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#075C70]/30"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#CC473C]/30"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#CC473C]/30"></div>
            
            <div className="text-center">
              {/* Header with decorative border */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-24"></div>
                  <div className="mx-4 text-[#075C70] text-2xl">❋</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#075C70] to-transparent w-24"></div>
                </div>
                <h2 className="text-4xl md:text-5xl text-[#075C70] tracking-wide relative">
                  <span className="relative">
                    Stoic AF
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#075C70] to-[#CC473C]"></div>
                  </span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="relative">
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#075C70]/10 to-[#CC473C]/10 rounded-lg transform rotate-1"></div>
                    <div className="absolute -inset-2 bg-white/80 rounded-lg transform -rotate-1 shadow-lg"></div>
                    
                    <div className="relative bg-white p-4 rounded-lg shadow-xl">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1629749125050-4d523f97c56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsb3NvcGh5JTIwYm9vayUyMGNvdmVyJTIwbWluaW1hbCUyMGRlc2lnbnxlbnwxfHx8fDE3NTk4NjcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Stoic AF Book Cover"
                        className="w-64 h-80 object-cover rounded-sm mx-auto shadow-lg"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-[#CC473C] text-white px-4 py-2 rotate-12 shadow-lg border-2 border-white text-sm font-semibold">
                        Available Now
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Book Details */}
                <div className="space-y-6">
                  <div className="relative">
                    {/* Vintage quote mark */}
                    <div className="absolute -top-2 -left-2 text-4xl text-[#CC473C]/20 font-serif leading-none">"</div>
                    
                    <div className="relative z-10 bg-white/50 p-6 rounded-none border-l-4 border-[#075C70] shadow-lg">
                      <p className="text-xl text-[#222222] font-serif italic mb-4 leading-relaxed">
                        A masterpiece of practical philosophy for the modern world
                      </p>
                      <p className="text-[#7C7C7C] leading-relaxed">
                        Sharp, funny, and unfiltered wisdom that cuts through the noise to deliver actionable insights for rebuilding your life with grit and humor.
                      </p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="text-center">
                    <Button 
                      className="bg-[#075C70] hover:bg-[#05485A] text-white px-12 py-4 rounded-none border-2 border-[#075C70] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] tracking-wide text-lg"
                      size="lg"
                    >
                      <BookOpen className="w-5 h-5 mr-3" />
                      Buy Stoic AF on Amazon
                    </Button>
                    
                    <p className="text-sm text-[#7C7C7C] mt-4 italic">
                      "Essential reading for anyone serious about personal growth" — Reader Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vintage corner ornaments */}
        <div className="absolute top-10 left-10 text-[#075C70]/10 text-4xl font-serif">❈</div>
        <div className="absolute bottom-10 right-10 text-[#CC473C]/10 text-4xl font-serif">✧</div>
      </section>

      {/* Built AF Coming Soon Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#05485A] via-[#075C70] to-[#05485A] text-white relative overflow-hidden">
        {/* Vintage paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20L30 10L40 20L30 30Z'/%3E%3Cpath d='M0 20L10 10L20 20L10 30Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Vintage radial pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
          <div className="w-full h-full rounded-full border-4 border-dashed border-white animate-pulse"></div>
          <div className="absolute inset-8 rounded-full border-2 border-white/50"></div>
          <div className="absolute inset-16 rounded-full border-2 border-white/30"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Built AF Card */}
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-none border-2 border-white/20 shadow-2xl relative">
            {/* Vintage frame decoration */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-white/30"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#CC473C]/50"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#CC473C]/50"></div>
            
            <div className="text-center">
              {/* Header with decorative border */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-24"></div>
                  <div className="mx-4 text-[#CC473C] text-2xl">❋</div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-24"></div>
                </div>
                <h2 className="text-4xl md:text-5xl text-white tracking-wide relative mb-4">
                  <span className="relative">
                    Built AF
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#CC473C] to-white"></div>
                  </span>
                </h2>
                
                {/* Coming Soon Badge */}
                <div className="inline-block bg-[#CC473C] text-white px-8 py-3 rounded-none border-2 border-white/30 shadow-lg">
                  <span className="tracking-wider uppercase font-semibold">Coming Soon</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Mock Book Cover */}
                <div className="relative">
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-[#CC473C]/20 rounded-lg transform rotate-1"></div>
                    <div className="absolute -inset-2 bg-white/10 rounded-lg transform -rotate-1 shadow-lg"></div>
                    
                    <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-white/30">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYm9vayUyMGNvdmVyJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc1OTg2NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Built AF Book Cover - Coming Soon"
                        className="w-64 h-80 object-cover rounded-sm mx-auto shadow-lg opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#075C70]/40 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Email Signup */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-none border border-white/20 shadow-lg">
                    <p className="text-xl text-gray-200 font-serif italic mb-4 leading-relaxed">
                      "The high-performer's guide to sustainable strength"
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      A comprehensive blueprint for building physical and mental resilience that lasts. Coming soon.
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl mb-4 text-gray-200 tracking-wide">Join the Launch List</h3>
                    
                    <form onSubmit={handleEmailSubmit} className="space-y-4 relative">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 text-white placeholder:text-gray-300 border-2 border-white/30 rounded-none px-4 py-3 focus:border-[#CC473C] transition-colors backdrop-blur-sm text-center"
                        required
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-[#CC473C] hover:bg-[#B8382C] text-white px-8 py-4 rounded-none border-2 border-[#CC473C] shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] font-semibold tracking-wide text-lg"
                      >
                        Join Launch List for Built AF
                      </Button>
                      
                      <p className="text-sm text-gray-400 italic text-center">
                        Be the first to know when Built AF launches. No spam, just updates.
                      </p>
                      
                      {/* Vintage stamp effect */}
                      <div className="absolute -top-2 -right-2 bg-[#CC473C] text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg border-2 border-white">
                        EXCLUSIVE
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vintage corner decorations */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-white/20"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-[#CC473C]/40"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[#CC473C]/40"></div>
      </section>



      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-gradient-to-b from-[#222222] to-[#1a1a1a] text-white relative">
        {/* Vintage paper texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='17' cy='7' r='1'/%3E%3Ccircle cx='7' cy='17' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Decorative top border */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-32"></div>
            <div className="mx-4 text-[#CC473C] text-xl">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#CC473C] to-transparent w-32"></div>
          </div>
          
          {/* Social Icons with vintage styling */}
          <div className="mb-8">
            <h3 className="text-gray-300 tracking-wider uppercase text-sm mb-6">Connect & Follow</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="#" 
                className="group relative p-3 border-2 border-gray-600 hover:border-[#CC473C] transition-all duration-300 bg-gray-800/50 hover:bg-[#CC473C]/20"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-gray-400 group-hover:text-[#CC473C] transition-colors duration-300" />
                <div className="absolute inset-0 border border-[#CC473C]/0 group-hover:border-[#CC473C]/30 transition-all duration-300"></div>
              </a>
              <a 
                href="#" 
                className="group relative p-3 border-2 border-gray-600 hover:border-[#CC473C] transition-all duration-300 bg-gray-800/50 hover:bg-[#CC473C]/20"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-gray-400 group-hover:text-[#CC473C] transition-colors duration-300" />
                <div className="absolute inset-0 border border-[#CC473C]/0 group-hover:border-[#CC473C]/30 transition-all duration-300"></div>
              </a>
              <a 
                href="#" 
                className="group relative p-3 border-2 border-gray-600 hover:border-[#CC473C] transition-all duration-300 bg-gray-800/50 hover:bg-[#CC473C]/20"
                aria-label="Amazon Author Page"
              >
                <BookOpen className="w-6 h-6 text-gray-400 group-hover:text-[#CC473C] transition-colors duration-300" />
                <div className="absolute inset-0 border border-[#CC473C]/0 group-hover:border-[#CC473C]/30 transition-all duration-300"></div>
              </a>
            </div>
          </div>
          
          {/* Copyright with vintage styling */}
          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-20"></div>
              <div className="mx-4 text-gray-500 text-xs">✦</div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-20"></div>
            </div>
            
            <p className="text-gray-400 text-sm tracking-wide">
              ©2025 Scoot Kidd • All rights reserved
            </p>
            
            <div className="mt-4 text-xs text-gray-500 italic">
              "Wheelin' in another classic since 2025"
            </div>
          </div>
        </div>
        
        {/* Vintage corner flourishes */}
        <div className="absolute bottom-4 left-4 text-[#CC473C]/20 text-2xl font-serif">❈</div>
        <div className="absolute bottom-4 right-4 text-[#CC473C]/20 text-2xl font-serif">✧</div>
      </footer>
    </div>
  );
}