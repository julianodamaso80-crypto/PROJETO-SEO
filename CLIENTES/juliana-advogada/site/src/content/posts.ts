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
import { batchKPosts } from "./posts-k";
import { batchLPosts } from "./posts-l";
import { batchMPosts } from "./posts-m";
import { batchNPosts } from "./posts-n";
import { batchOPosts } from "./posts-o";
import { batchPPosts } from "./posts-p";
import { batchQPosts } from "./posts-q";
import { batchRPosts } from "./posts-r";
import { batchSPosts } from "./posts-s";
import { batchTPosts } from "./posts-t";

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
  ...batchKPosts,
  ...batchLPosts,
  ...batchMPosts,
  ...batchNPosts,
  ...batchOPosts,
  ...batchPPosts,
  ...batchQPosts,
  ...batchRPosts,
  ...batchSPosts,
  ...batchTPosts,
];
