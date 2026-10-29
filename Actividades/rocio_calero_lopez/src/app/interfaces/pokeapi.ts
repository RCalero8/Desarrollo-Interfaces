export interface NamedResource {
  name: string;
  url: string;
}

export interface ListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedResource[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    other?: { 'official-artwork': { front_default: string | null } };
  };
  types: { slot: number; type: NamedResource }[];
  abilities: { ability: NamedResource; is_hidden: boolean }[];
  stats: { base_stat: number; stat: NamedResource }[];
}

export interface BerryDetail {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedResource;
  item: NamedResource;
  flavors: { potency: number; flavor: NamedResource }[];
}

export interface ItemDetail {
  id: number;
  name: string;
  cost: number;
  category: NamedResource;
  sprites: { default: string | null };
  attributes: NamedResource[];
  effect_entries: { effect: string; short_effect: string; language: NamedResource }[];
}
