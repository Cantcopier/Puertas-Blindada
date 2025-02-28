"use client";

import { useState } from "react";
import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import blogData from "./blogData";



const BlogSidebarClient = () => {
  const [selectedImage, setSelectedImage] = useState("/images/blog/blog-details-01.jpg");

  return (
    <section className="overflow-hidden pb-[120px] pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contenu principal */}
          <div className="w-full px-4  lg:w-8/12">
            <h1 className="mb-8 text-3xl  font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Nos Derniers Articles
            </h1>

            {/* Image principale */}
            <div className="mb-10 w-full  overflow-hidden rounded">
              <div className="relative  h-[900px] aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src={selectedImage}
                  alt="Image sélectionnée"
                  fill
                  className=" w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full px-4 lg:w-4/12">
            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
              <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                Tous les images
              </h3>

              <ul className="p-8 grid grid-cols-2  xl:block xl:overflow-auto xl:h-[896px]">
                {blogData.map((item, index) => (
                  <li
                    key={index}
                    className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10 cursor-pointer"
                    onClick={() => setSelectedImage(item.href)}
                  >
                    
                    <RelatedPost id={item.id} href={item.href} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebarClient;
