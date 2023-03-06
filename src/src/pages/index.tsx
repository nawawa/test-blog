import { client } from "../../libs/client/microcms"
import { Blog } from "../../types/blog"

import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs, origin }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-2" key={blog.id}>
            <a>{blog.title}</a>
          </li>
        ))}
      </ul>
      <p>{origin}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ blogs: Blog[], origin?: string }> = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blogs: Blog[] = data.contents

  const origin = process.env.SERVER_ORIGIN

  return {
    props: {
      blogs,
      origin
    },
  };
};

export default Home