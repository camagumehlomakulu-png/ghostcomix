export interface Chapter {
  number: number;
  title: string;
  pages: number;
}

export interface Series {
  slug: string;
  title: string;
  hook: string;
  synopsis: string;
  status: 'ongoing' | 'completed' | 'hiatus';
  tags: string[];
  chapters: Chapter[];
}

export const series: Series[] = [
  {
    slug: 'maid-of-honor',
    title: 'Maid of Honor',
    hook: 'Placeholder hook line.',
    synopsis: 'Placeholder synopsis. Replace with the real one later.',
    status: 'completed',
    tags: ['placeholder'],
    chapters: [
      { number: 1, title: 'Chapter 1', pages: 15 },
      { number: 2, title: 'Chapter 2', pages: 25 },
      { number: 3, title: 'Chapter 3', pages: 20 },
    ],
  },
];