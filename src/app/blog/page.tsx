import { Fragment, type ReactElement } from "react";
import { Cards } from "@/components/Cards";
import { Form } from "@/components/Form";
import { Sections } from "@/components/Sections";

const Blog = (): ReactElement => {
  const { Search } = Form;
  const { CallToAction } = Sections;
  const { BlogArticle } = Cards;

  return (
    <Fragment>
      <div className="container mx-auto px-4 py-5 md:py-14 lg:px-6 lg:py-20">
        <div className="container mx-auto mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-14">
          <header className="flex flex-col gap-3 md:max-w-110">
            <div className="flex w-fit items-center justify-center rounded-md bg-cyan-300 px-3 py-1.5">
              <span className="font-medium text-cyan-100 text-xs uppercase">
                {"Blog"}
              </span>
            </div>
            <h1 className="font-bold text-2xl leading-tight md:text-3xl lg:text-4xl">
              {"Dicas e estratégias para impulsionar seu negócio"}
            </h1>
          </header>
          <Search />
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
        </div>
      </div>
      <CallToAction className="mt-14 md:mt-10 md:block lg:mt-14" />
    </Fragment>
  );
};

export default Blog;
