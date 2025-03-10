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
          title="Nuestros Últimos Proyectos en Puertas para el Hogar"
          paragraph="En el marco de nuestro compromiso permanente con la excelencia y la innovación, nos enorgullece presentar una selección de nuestros proyectos más recientes en el diseño y fabricación de puertas para el hogar. Cada creación refleja una combinación única de artesanía de alta calidad y diseño contemporáneo, asegurando que cada puerta se transforme en una obra de arte que fusiona belleza y funcionalidad. Prestamos especial atención a cada detalle y toque artístico para superar las expectativas de nuestros clientes, convirtiendo cada concepto en una realidad que irradia lujo y elegancia."
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
Muestra nuestros últimos artículos            </Link>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
