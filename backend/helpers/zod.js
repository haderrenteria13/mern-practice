import zod from "zod";

const articleSchema = zod.object({
  id: zod.number(),
  title: zod.string(),
  body: zod.string(),
  user: zod.string(),
});

export const validateArticle = (article) => {
    return articleSchema.safeParse(article)
} 

export const validatePartial = (article) => {
  return articleSchema.partial().safeParse(article)
}