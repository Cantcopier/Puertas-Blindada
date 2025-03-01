import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { col, image, tags, row } = blog;

  return (
    <div className="shadow-one row-span-3 dark:bg-dark dark:hover:shadow-gray-dark rounded-lg overflow-hidden hover:shadow-lg duration-300" data-wow-delay=".1s">
      {/* Image Section */}
      <Link href="/blog-sidebar" className="relative block aspect-[37/22]  md:h-full col-span-1 md:col-span-2">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={image} alt='image'  layout="fill" className="object-cover rounded-md" />
      </Link>


    </div>
  );
};

export default SingleBlog;
