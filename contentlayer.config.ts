import { makeSource } from 'contentlayer/source-files';

import { Block } from './lib/contentlayer/types/block';
import { Project } from './lib/contentlayer/types/project';
import { Education } from './lib/contentlayer/types/education';
import { Position } from './lib/contentlayer/types/position';
import { Skill } from './lib/contentlayer/types/skill';

export default makeSource({
  contentDirExclude: ['.DS_Store', 'content.json'],
  contentDirPath: 'content',
  documentTypes: [Block, Project, Education, Position, Skill],
  mdx: {},
});
