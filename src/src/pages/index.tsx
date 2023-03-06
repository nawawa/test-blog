import { client } from "../../libs/client/microcms"
import { Blog } from "../../types/blog"

import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-2" key={blog.id}>
            <a>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const blogs: Blog[] = data.contents

  return {
    props: {
      blogs,
    },
  };
};

export default Home