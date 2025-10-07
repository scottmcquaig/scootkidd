import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import scootKiddLogo from 'figma:asset/1475e3343707873be0964e6fb2a8ea580946d71b.png';
import { Instagram, Youtube, BookOpen } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#FAF5EE] relative overflow-hidden">
      {/* Vintage paper texture background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='13' cy='23' r='1'/%3E%3Ccircle cx='29' cy='3' r='1'/%3E%3Ccircle cx='41' cy='31' r='1'/%3E%3Ccircle cx='19' cy='47' r='1'/%3E%3Ccircle cx='53' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Vintage decorative elements */}
        <div className="absolute top-20 left-10 opacity-10 text-[#CC473C] text-6xl font-serif rotate-12 select-none">❈</div>
        <div className="absolute top-32 right-16 opacity-10 text-[#075C70] text-4xl font-serif -rotate-12 select-none">✦</div>
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
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#CC473C]/20"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#CC473C]/20"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#075C70]/20"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#075C70]/20"></div>
      </section>

      {/* Meet the Author Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-[#FEFCF8] to-[#F9F5F0] relative">
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
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1OTg2ODc2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
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

      {/* Stoic AF Book Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F9F5F0] via-[#FAF5EE] to-white relative">
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
      <footer className="py-16 px-6 bg-gradient-to-b from-[#222222] to-[#1a1a1a] text-white relative">
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