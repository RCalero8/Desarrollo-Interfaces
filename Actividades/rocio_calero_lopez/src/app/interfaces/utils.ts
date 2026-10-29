export const API_URL = 'https://pokeapi.co/api/v2';
export const SPRITES_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites';

export function getIdFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}
