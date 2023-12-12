import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Error from '../../Error/Error'
import BaseSection from '../../Reusable/Section/BaseSection';

export const ArticleBody = () => {
  const location = useLocation();

  const article = location.state.article;

  if (!article) {
    return (
      <Error />
    )
  }

  return (
    <main>
      <BaseSection
        id="article-header"
        sectionClassName="position-relative bg-gradient-light"
      >
        <div className="container pt-14 pb-9 pb-lg-11 position-relative">
          <article className="row pt-lg-7 pb-11">
            <div className="col-lg-10 col-xl-8">
              <div className="position-relative pb-3 pb-lg-0">
                <div className="d-flex align-items-center w-100">

                  {article.tags.map(tag => (<a href="#!" key={tag} className="badge bg-primary rounded-pill me-3">{tag}</a>))}

                  <small className="text-muted">{article.published}</small>
                </div>

                <div>
                  <h2 className="my-4 display-3">
                    {article.title}
                  </h2>
                  <div className="d-flex pt-2 mb-0 small align-items-center">
                    <img src={article.authorImg} alt="" className="width-3x height-3x rounded-circle me-2" />
                    <span className="text-muted d-inline-block">By <a href="#!"
                      className="text-dark">{article.author}</a></span>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </div>

        <svg className="position-absolute start-0 bottom-0 text-white" preserveAspectRatio="none" width="100%"
          height="120" viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M800 240H0L800 0V240Z" fill="currentColor" />
        </svg>

      </BaseSection>
      <BaseSection
        sectionClassName="position-relative bg-white border-bottom"
        >
        <div className="container pb-9 pb-lg-11">
          <img src={`../${article.articleImg}`} alt=""
            className="img-fluid shadow-lg rounded-4 mb-7 mb-lg-9 position-relative mt-n14" />

          <div className="row">
            <div className="col-xl-9 mx-auto">
              <article className="article mb-9" dangerouslySetInnerHTML={{ __html: article.body }}>

              </article>


            </div>
          </div>
        </div>

      </BaseSection>

    </main>
  );
};
export default ArticleBody