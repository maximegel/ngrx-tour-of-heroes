export type HeroAbilities = HeroAbility[] | undefined;

export interface HeroAbility {
  readonly description: string;
  readonly image: string;
  readonly name: string;
}
