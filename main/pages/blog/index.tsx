import { NextPage } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils/sortDate";

export default function Blog({ posts }: any) {
  console.log(posts);
  return (
    <>
      <div className="posts">
        {posts.map((post: any, index: any) => {
          return <h3 key={index}>{post.frontmatter.title}</h3>;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("blogs"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

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
