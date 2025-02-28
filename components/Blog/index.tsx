import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Nos Derniers Articles"
          paragraph="Découvrez nos dernières réalisations et conseils en métallerie. Nous partageons notre expertise et nos inspirations pour des conceptions uniques et durables."
          center
        />

        <div className="grid grid-cols-1  gap-x-8 gap-y-10 md:grid-cols-2  xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        <div className="p-2 mt-3 flex justify-center">
          <div>
            <Link
              href="/blog-sidebar"
              className=" shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90" >
              Afficher Nos Derniers Articles
            </Link>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
