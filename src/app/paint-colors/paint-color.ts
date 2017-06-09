import {PaintColorBase} from './paint-color-base';

/**
 * Represents a Paint color.
 */
export class PaintColor {
  /**
   * The ID.
   */
  private id: string;

  /**
   * The name.
   */
  private name: string;

  /**
   * The range (type).
   */
  private range: PaintColorBase;

  /**
   * The color in hexaadecimal format.
   */
  private hexColor: string;

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getRange(): PaintColorBase {
    return this.range;
  }

  public setRange(range: PaintColorBase): void {
    this.range = range;
  }

  public getHexColor(): string {
    return this.hexColor;
  }

  public setHexColor(hexColor: string): void {
    this.hexColor = hexColor;
  }


}
