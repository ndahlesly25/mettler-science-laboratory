import knowledgeArticles from "../data/knowledgeArticles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./KnowledgeCenter.css";

export default function KnowledgeCenter() {

  const pageTitle =
    "Laboratory Knowledge Center | Mettler Science Laboratory";

  const pageDescription =
    "Professional laboratory guides, buying advice, educational science resources, medical laboratory articles and laboratory safety information from Mettler Science Laboratory in Cameroon.";

  const pageUrl =
    "https://mettlersciencelaboratory.com/knowledge-center";

  const knowledgeSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    "@id": `${pageUrl}#page`,

    name: pageTitle,

    description: pageDescription,

    url: pageUrl,

    isPartOf: {
      "@type": "WebSite",
      "@id":
        "https://mettlersciencelaboratory.com/#website",
    },

    about: {
      "@type": "Thing",
      name: "Laboratory Science and Medical Laboratory Education",
    },

    publisher: {
      "@type": "Organization",
      name: "Mettler Science Laboratory",
      url:
        "https://mettlersciencelaboratory.com",
    },

    mainEntity: {
      "@type": "ItemList",

      numberOfItems:
        knowledgeArticles.length,

      itemListElement:
        knowledgeArticles.map(
          (article, index) => ({
            "@type": "ListItem",

            position: index + 1,

            name: article.title,

            url:
              `https://mettlersciencelaboratory.com/knowledge/${article.slug}`,
          })
        ),
    },
  };

  return (

    <div className="knowledge-page">

      <Helmet>

        {/* SEO TITLE */}

        <title>
          {pageTitle}
        </title>


        {/* META DESCRIPTION */}

        <meta
          name="description"
          content={pageDescription}
        />


        {/* CANONICAL */}

        <link
          rel="canonical"
          href={pageUrl}
        />


        {/* OPEN GRAPH */}

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:url"
          content={pageUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Mettler Science Laboratory"
        />


        {/* TWITTER */}

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />


        {/* STRUCTURED DATA */}

        <script type="application/ld+json">
          {JSON.stringify(
            knowledgeSchema
          )}
        </script>

      </Helmet>


      <div className="knowledge-header">

        <h1>
          Laboratory Knowledge Center
        </h1>

        <p>
          Professional laboratory guides, buying advice,
          educational science resources, medical laboratory
          articles and laboratory safety information.
        </p>

      </div>


      <div className="knowledge-grid">

        {knowledgeArticles.map(
          (article) => (

            <Link
              key={article.id}
              to={`/knowledge/${article.slug}`}
              className="knowledge-card"
            >

              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
              />

              <div className="knowledge-content">

                <span className="knowledge-category">
                  {article.category}
                </span>

                <h2>
                  {article.title}
                </h2>

                <p>
                  {article.description}
                </p>

                <small>
                  {article.readTime} read
                </small>

              </div>

            </Link>

          )
        )}

      </div>

    </div>
  );
}