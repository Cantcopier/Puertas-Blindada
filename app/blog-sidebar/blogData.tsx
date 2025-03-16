import { Image } from "@/types/image";

const blogData: Image[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  href: `/images/blog/${index + 1}.jpeg`,
}));


export default blogData;
