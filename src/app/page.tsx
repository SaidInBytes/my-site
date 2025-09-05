
'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Project from '@/components/project';
import About from '@/components/about';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Project/>
      <Footer />
    </div>
  
  );
}
