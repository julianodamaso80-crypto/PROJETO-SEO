export type { BlogPost } from "./types";
import type { BlogPost } from "./types";

import { batchAPosts } from "./posts-a";
import { batchBPosts } from "./posts-b";
import { batchCPosts } from "./posts-c";
import { batchDPosts } from "./posts-d";
import { batchEPosts } from "./posts-e";

export const blogPosts: BlogPost[] = [
  ...batchAPosts,
  ...batchBPosts,
  ...batchCPosts,
  ...batchDPosts,
  ...batchEPosts,
];
