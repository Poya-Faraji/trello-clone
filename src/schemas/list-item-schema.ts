import { z } from "zod";

import { DescriptionSchema } from "./description-schema";
import { TitleSchema } from "./title-schema";

export const ListItemSchema = z.object({
  title: TitleSchema,
  description: DescriptionSchema,
  dueDate: z.string(),
});
