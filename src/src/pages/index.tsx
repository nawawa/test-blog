import { client } from "../../libs/client/microcms"
import { Blog } from "../../types/blog"

import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs, hello }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-2" key={blog.id}>
            <a>{blog.title}</a>
          </li>
        ))}
      </ul>
      <p>{hello.name}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ blogs: Blog[], hello: {name: string} }> = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blogs: Blog[] = data.contents

  const hello: {name: string} = await fetch(`${process.env.SERVER_ORIGIN}/api/hello`).then(res => res.json())

  return {
    props: {
      blogs,
      hello
    },
  };
};

export default Home