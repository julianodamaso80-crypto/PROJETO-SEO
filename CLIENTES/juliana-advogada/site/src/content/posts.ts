export type { BlogPost } from "./types";
import type { BlogPost } from "./types";

import { batchAPosts } from "./posts-a";
import { batchBPosts } from "./posts-b";
import { batchCPosts } from "./posts-c";
import { batchDPosts } from "./posts-d";
import { batchEPosts } from "./posts-e";
import { batchFPosts } from "./posts-f";
import { batchGPosts } from "./posts-g";
import { batchHPosts } from "./posts-h";
import { batchIPosts } from "./posts-i";
import { batchJPosts } from "./posts-j";

export const blogPosts: BlogPost[] = [
  ...batchAPosts,
  ...batchBPosts,
  ...batchCPosts,
  ...batchDPosts,
  ...batchEPosts,
  ...batchFPosts,
  ...batchGPosts,
  ...batchHPosts,
  ...batchIPosts,
  ...batchJPosts,
];
