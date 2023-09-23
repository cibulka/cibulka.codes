import dayjs from 'dayjs';
import { Project, Skill } from 'contentlayer/generated';

export function sortByPriority(a: Project, b: Project) {
  const aPriority = a.priority || 0;
  const bPriority = b.priority || 0;
  return bPriority - aPriority;
}

function getAlphabetPosition(char: string) {
  const code = char.toUpperCase().charCodeAt(0);
  return code > 64 && code < 91 ? code - 64 : 0;
}

function cerfToNumber(level?: string) {
  if (!level) return 0;
  const [letter, number] = level.split('');
  return getAlphabetPosition(letter) + parseInt(number);
}

export function sortByLevel(a: Skill, b: Skill) {
  return cerfToNumber(b.level) - cerfToNumber(a.level);
}

function getLatestDate(project: Project) {
  const dates = project.positions?.map((p) => p.end);
  return dates ? Math.max(...dates.map((d) => dayjs(d).unix())) : 0;
}

export function sortByDate(a: Project, b: Project) {
  const today = dayjs();
  const aEnd = getLatestDate(a);
  const bEnd = getLatestDate(b);
  return bEnd - aEnd;
}
