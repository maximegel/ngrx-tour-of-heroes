export interface HeroForm {
  readonly abilities: HeroFormAbility[];
  readonly about: string;
  readonly alterEgo: HeroFormAlterEgo;
  readonly name: string;
  readonly stats: HeroFormStats;
}

export interface HeroFormAlterEgo {
  readonly firstName: string | null;
  readonly lastName: string | null;
}

export interface HeroFormAbility {
  readonly description: string;
  readonly name: string;
}

export interface HeroFormStats {
  readonly durability: number;
  readonly energy: number;
  readonly fighting: number;
  readonly intelligence: number;
  readonly speed: number;
  readonly strength: number;
}
