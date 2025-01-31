import { Route, Routes, useParams } from "react-router-dom";
import "./Post.css";

import posts from "json/posts.json";
import { PostModel } from "components/PostModel";
import ReactMarkdown from "react-markdown";
import { NotFound } from "pages/Not-Found";
import { Pagedefault } from "components/PageDefault";

export const Post = () => {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<Pagedefault />}>
        <Route
          index
          element={
            <PostModel
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
};
