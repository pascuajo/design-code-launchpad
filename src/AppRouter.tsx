import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { AppFunQuirky } from './AppFunQuirky';
import { BlogPage } from './components/blog/BlogPage';
import { BlogPostPage } from './components/blog/BlogPostPage';
import { Layout } from './components/Layout';
import { ContactPage } from './components/ContactPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fun-quirky" element={<AppFunQuirky />} />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogPostPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}