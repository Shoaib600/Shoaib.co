import type { SectionId } from '../types/common';

export const SITE_META = {
  name: 'Shoaib',
  title: 'Shoaib — Portfolio',
  description: 'A cinematic portfolio experience for Shoaib.',
} as const;

export const SECTION_IDS: Record<Uppercase<SectionId>, SectionId> = {
  INTRO: 'intro',
  WORK: 'work',
  ABOUT: 'about',
  CONTACT: 'contact',
};
