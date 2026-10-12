import { getCollection } from 'astro:content';

export const units: Record<number, string> = {
  1: 'Marketing Foundations',
  2: 'Go-To-Market',
};

export async function sortedTopics() {
  return (await getCollection('topics')).sort((a, b) => a.data.order - b.data.order);
}

export const pad = (n: number) => String(n).padStart(2, '0');
