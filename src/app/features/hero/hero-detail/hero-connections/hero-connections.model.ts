export type HeroConnections = HeroConnection[] | undefined;

export interface HeroConnection {
  readonly alterEgo?: string;
  readonly name: string;
  readonly slug: string;
  readonly thumbnail?: string;
}
