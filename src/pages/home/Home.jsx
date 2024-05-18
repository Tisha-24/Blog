import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import BlogPostCard from "../../components/blogPostCard/BlogPostCard";

export default function Home() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <BlogPostCard />
      </Layout>
    </div>
  );
}
