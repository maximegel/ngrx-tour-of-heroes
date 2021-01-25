export type HeroTable = HeroTableRow[];

export interface HeroTableRow {
  readonly alterEgo?: string;
  readonly avatar: string;
  readonly name: string;
  readonly slug: string;
}
