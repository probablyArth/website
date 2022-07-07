import { NextPage } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils/sortDate";

const Blog: NextPage = () => {
  return <div>Blog</div>;
};

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("blogs"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Blog;
