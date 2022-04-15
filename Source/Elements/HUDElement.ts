export interface IHUDElementSettings {
  position: string;
  template: string;
  variation: string;
  mods: string[];
}

/**
 * HUD Element
 */
export class HUDElement {
  public variation: string;
  public template: string;
  public position: string;

  constructor(props: Partial<IHUDElementSettings>) {
    this.position = props.position || 'none';
    this.template = props.template || 'default';
    this.variation = props.variation || 'unknown';
  }

  /**
   * Render SVG
   */
  public renderSVG() {
    return '';
  }
}
