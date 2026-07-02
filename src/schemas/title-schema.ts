import { z } from "zod";

const { stringError, noneEmptyError, minError } = {
  stringError: "Title must be a string.",
  noneEmptyError: "Title Cannot be empty.",
  minError: "Title must be at least 3 characters.",
};

export const TitleSchema = z
  .string(stringError)
  .trim()
  .nonempty(noneEmptyError)
  .min(3, minError);
