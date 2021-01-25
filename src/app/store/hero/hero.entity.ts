export interface Hero {
  readonly abilities?: HeroAbility[];
  readonly alterEgo?: HeroAlterEgo;
  readonly avatar: string;
  readonly connections?: HeroConnection[];
  readonly coverImage?: string;
  readonly id: string | number;
  readonly intro?: string;
  readonly name: string;
  readonly slug: string;
  readonly stats?: HeroStats;
  readonly thumbnail?: string;
}

export type HeroPeek = Pick<Hero, 'id' | 'slug' | 'avatar' | 'name' | 'alterEgo'>;

export interface HeroAbility {
  readonly description: string;
  readonly image: string;
  readonly name: string;
}

export interface HeroAlterEgo {
  readonly name: string;
}

export type HeroConnection = Pick<Hero, 'id' | 'slug' | 'name' | 'thumbnail' | 'alterEgo'>;

export interface HeroStats {
  readonly durability: number;
  readonly energy: number;
  readonly fighting: number;
  readonly intelligence: number;
  readonly speed: number;
  readonly strength: number;
}
