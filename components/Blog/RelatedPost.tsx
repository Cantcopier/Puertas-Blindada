import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  id,
  href,

}: {
  id: number;
  href: string;
}) => {
  return (
    <div className="lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[160px] w-[170px] overflow-hidden rounded-md sm:h-[175px] sm:w-[185px]">
          <Image src={href} alt='image' fill />
        </div>
      </div>
      <div className="w-full">
        {/* <h5>
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color">{date}</p> */}
      </div>
    </div>
  );
};

export default RelatedPost;
