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
import { batch2Posts } from "./posts-trabalhista-batch2";
import { batch3Posts } from "./posts-batch3";
import { batch4Posts } from "./posts-batch4";
import { batch5Posts } from "./posts-batch5";
import { batch6Posts } from "./posts-batch6";
import { posts01 } from "./posts_01_10";
import { posts11 } from "./posts_11_20";
import { posts21 } from "./posts_21_30";
import { posts31 } from "./posts_31_40";
import { posts41 } from "./posts_41_50";
import { postsImpactoTrab } from "./posts-impacto-trab";
import { postsImpactoPrev } from "./posts-impacto-prev";
import { postsImpactoGuias } from "./posts-impacto-guias";
import { postsImpactoDireitos } from "./posts-impacto-direitos";
import { postsBpcImigrantes } from "./posts-bpc-imigrantes";

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
  ...batch2Posts,
  ...batch3Posts,
  ...batch4Posts,
  ...batch5Posts,
  ...batch6Posts,
  ...posts01,
  ...posts11,
  ...posts21,
  ...posts31,
  ...posts41,
  ...postsImpactoTrab,
  ...postsImpactoPrev,
  ...postsImpactoGuias,
  ...postsImpactoDireitos,
  ...postsBpcImigrantes,
];
