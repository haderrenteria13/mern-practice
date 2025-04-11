import express from "express";
import { articles } from "./data/articles.js";
import { validateArticle, validatePartial } from "./helpers/zod.js";

const app = express();

app.use(express.json());

let articleReturn = articles;

// Create
app.post("/api/articles/", (request, response) => {
  const validationResult = validateArticle(request.body);

  if (!validationResult.success) {
    return response.status(400).json("La validación es incorrecta");
  }

  const newArticle = {
    ...validationResult.data,
  };

  articleReturn = [...articleReturn, newArticle];
  response.json(newArticle);
});

// Read
app.get("/api/articles", (request, response) => {
  response.json(articleReturn);
});

// Update
app.put("/api/articles/:id", (request, response) => {
  const id = Number(request.params.id);
  const articleValidate = validatePartial(request.body);

  if (!articleValidate.success) {
    return response.status(400).json("La validación es incorrecta");
  }

  const articleIndex = articleReturn.findIndex((article) => article.id === id);

  if (articleIndex === -1) {
    return response.status(400).json("No se encontro el articulo");
  }

  const newArticle = {
    ...articleReturn[articleIndex],
    ...request.body,
  };

  articleReturn[articleIndex] = newArticle;

  response.json(newArticle);
});

app.get("/api/articles/:id", (request, response) => {
  const id = Number(request.params.id);
  const article = articleReturn.find((article) => article.id === id);
  if (article) {
    response.json(article);
  } else {
    response.status(404).end();
  }
});

// Delete
app.delete("/api/articles/:id", (request, response) => {
  const id = Number(request.params.id);
  articleReturn = articleReturn.filter((articles) => articles.id != id);

  if (articleReturn) {
    response.json(articleReturn);
  } else {
    response.status(400).end();
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor encendido: http://localhost:${PORT}`);
});
