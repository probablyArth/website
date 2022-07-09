import Link from "next/link";

export default function Post({ post }: any) {
  return (
    <div className="flex flex-col m-4 w-fit">
      <img
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        className="rounded-md"
      />
      <div className="p-4 py-4 bg-neutral-800 rounded-b-md">
        <div className="post-date text-sm text-gray-300">
          {post.frontmatter.date}
        </div>
        <h3 className="text-xl font-semibold">{post.frontmatter.title}</h3>
        <p className="text-sm py-1 text-lightContent">
          {post.frontmatter.excerpt}
        </p>

        <Link href={post.slug}>
          <a className="">Read More</a>
        </Link>
      </div>
    </div>
  );
}
