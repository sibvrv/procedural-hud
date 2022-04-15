import {HUDElement, IHUDElementSettings} from '../Elements/HUDElement';

/**
 * HUD Layout
 */
export class Layout {
  public grid: Record<string, HUDElement> = {};

  /**
   * Create new Element
   * @param props
   */
  public addElement(props: Partial<IHUDElementSettings>) {
    const element = new HUDElement(props);
    this.grid[element.position] = element;
  }

  /**
   * Render to SVG
   */
  public renderSVG() {
    return Object.entries(this.grid).map((ent) => ent[1].renderSVG()).join('\n');
  }
}
