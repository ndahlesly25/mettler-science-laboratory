import knowledgeArticles from "../data/knowledgeArticles";
import { Link } from "react-router-dom";
import "./KnowledgeCenter.css";

export default function KnowledgeCenter() {

  return (

    <div className="knowledge-page">

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

        {knowledgeArticles.map((article) => (

          <Link
            key={article.id}
            to={`/knowledge/${article.slug}`}
            className="knowledge-card"
          >

            <img
              src={article.image}
              alt={article.title}
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

        ))}

      </div>

    </div>

  );

}