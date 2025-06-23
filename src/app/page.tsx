
'use client';
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Project from '@/components/project';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Project/>
      <Footer />
    </div>
  
  );
}
