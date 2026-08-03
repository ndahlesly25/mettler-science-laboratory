import { useParams, Link } from "react-router-dom";
import knowledgeArticles from "../data/knowledgeArticles";
import "./KnowledgeArticle.css";
import { Helmet } from "react-helmet";
import ArticleCTA from "../components/ArticleCTA/ArticleCTA";

export default function KnowledgeArticle() {

  const { slug } = useParams();

const article = knowledgeArticles.find(
  article => article.slug === slug
);

const relatedArticles = knowledgeArticles

  .filter(item => item.id !== article.id)

  .slice(0, 3);

if (!article) {

  return (
    <div className="article-not-found">
      <h2>Article not found</h2>

      <Link to="/knowledge-center">
        Return to Knowledge Center
      </Link>
    </div>
  );

}

const pageTitle =
`${article.title} | Mettler Science Laboratory`;

const pageDescription =
article.description;

  if (!article) {

    return (

      <div className="article-not-found">

        <h2>

          Article not found

        </h2>

        <Link to="/knowledge-center">

          Return to Knowledge Center

        </Link>

      </div>

    );

  }

  return (

<div className="article-page">

<Helmet>

<title>

{pageTitle}

</title>

<meta
name="description"
content={pageDescription}
/>

<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",

  headline: article.title,

  description: article.description,

  image: article.image,

  author: {
    "@type": "Organization",
    name: "Mettler Science Laboratory"
  },

  publisher: {
    "@type": "Organization",
    name: "Mettler Company Limited",
    logo: {
      "@type": "ImageObject",
      url: "https://mettlersciencelaboratory.com/logo.png"
    }
  },

  datePublished: article.published,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://mettlersciencelaboratory.com/knowledge/${article.slug}`
  }

})}
</script>

</Helmet>

<img
src={article.image}
alt={article.title}
className="article-hero"
/>

<div className="breadcrumb">

<Link to="/">Home</Link>

{" > "}

<Link to="/knowledge-center">

Knowledge Center

</Link>

{" > "}

<span>

{article.title}

</span>

</div>

<div className="article-container">

<span className="article-category">

{article.category}

</span>

<h1>

{article.title}

</h1>

<div className="article-meta">

  <span>
    👤 {article.author}
  </span>

  <span>
    📅 {article.published}
  </span>

  <span>
    ⏱ {article.readTime}
  </span>

</div>   {/* <-- Missing */}

<div className="table-of-contents">

  <h2>

    Table of Contents

  </h2>

  <ul>

    {article.sections.map((section, index) => (

      <li key={index}>

        <a
          href={`#${section.heading
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`}
        >

          {index + 1}. {section.heading}

        </a>

      </li>

    ))}

  </ul>

</div>

<div className="article-content">

  {article.sections.map((section, index) => (

    <section
       key={index}
       id={section.heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}
>

      <h2>{section.heading}</h2>

      {section.image && (

  <img
    src={section.image}
    alt={section.imageAlt}
    className="section-image"
  />

)}

      {section.paragraphs.map((paragraph, i) => (

        <p key={i}>
          {paragraph}
        </p>

      ))}

      {/* Equipment */}

{section.equipment && (

  <>

    <h3>Equipment Required</h3>

    <ul>

      {section.equipment.map((item, i) => (

        <li key={i}>
          {item}
        </li>

      ))}

    </ul>

  </>

)}

{/* Chemicals */}

{section.chemicals && (

  <>

    <h3>Chemicals / Reagents Required</h3>

    <ul>

      {section.chemicals.map((item, i) => (

        <li key={i}>
          {item}
        </li>

      ))}

    </ul>

  </>

)}

{/* Teaching Specimens */}

{section.specimens && (

  <>

    <h3>Teaching Specimens</h3>

    <ul>

      {section.specimens.map((item, i) => (

        <li key={i}>
          {item}
        </li>

      ))}

    </ul>

  </>

)}

{/* Normal List (for Physics, Biology, etc.) */}

{section.list && (

  <ul>

    {section.list.map((item, i) => (

      <li key={i}>
        {item}
      </li>

    ))}

  </ul>

)}

    </section>

  ))}

</div>

<ArticleCTA />

<div className="related-articles">

  <h2>

    Related Articles

  </h2>

  <div className="related-grid">

    {relatedArticles.map(item => (

      <Link

        key={item.id}

        to={`/knowledge/${item.slug}`}

        className="related-card"

      >

        <img

          src={item.image}

          alt={item.title}

        />

        <span>

          {item.category}

        </span>

        <h3>

          {item.title}

        </h3>

      </Link>

    ))}

  </div>

</div>

</div>

</div>


);

}