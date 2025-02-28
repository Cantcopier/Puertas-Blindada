"use client";

import { useState } from "react";
import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import blogData from "./blogData";
import { motion } from "framer-motion";

const BlogSidebarClient = () => {
  const [selectedImage, setSelectedImage] = useState("/images/blog/blog-details-01.jpg");

  return (
    <section className="overflow-hidden pb-16 pt-24">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Contenu principal */}
          <div className="w-full px-4 lg:w-8/12">
            <h1 className="mb-6 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
              Nos Derniers Articles
            </h1>

            {/* Image principale */}
            <div className="mb-6 hidden w-full overflow-hidden rounded-md xl:block">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selectedImage}
                  alt="Image sélectionnée"
                  fill
                  className="object-cover object-center rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full px-4 lg:w-4/12">
            <div className="mb-8 rounded-md bg-white p-4 shadow-sm dark:bg-gray-dark dark:shadow-none">
              <h3 className="border-b border-gray-300 pb-2 text-base font-semibold text-black dark:border-white dark:text-white">
                Tous les images
              </h3>

              <ul className="p-4 grid grid-cols-2 gap-8 xl:block xl:overflow-auto xl:h-[500px]">
                {blogData.map((item, index) => (
                  <motion.li
                    key={index}
                    className="cursor-pointer border-b border-gray-200 pb-3 text-sm dark:border-white/10"
                    onClick={() => setSelectedImage(item.href)}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                  >
                    <RelatedPost id={item.id} href={item.href} />
                  </motion.li>
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
