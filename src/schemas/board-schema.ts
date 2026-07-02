import { z } from "zod";

import { ColorSchema } from "./color-schema";
import { DescriptionSchema } from "./description-schema";
import { TitleSchema } from "./title-schema";

export const BoardSchema = z.object({
  title: TitleSchema,
  description: DescriptionSchema,
  color: ColorSchema,
});
