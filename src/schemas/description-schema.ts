import { z } from "zod";

const CHAR_LIMIT = 1000;

const { stringError, maxError } = {
  stringError: "Description must be a string.",
  maxError: `Description must be less than ${CHAR_LIMIT} characters.`,
};

export const DescriptionSchema = z
  .string(stringError)
  .trim()
  .max(CHAR_LIMIT, maxError);
