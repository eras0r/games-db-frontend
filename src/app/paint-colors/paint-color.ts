import {PaintColorRange} from './paint-color-range';

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
  private range: PaintColorRange;

  /**
   * The color in hexaadecimal format.
   */
  private hexColor: string;

  public constructor(id?: string, name?: string, range?: PaintColorRange, hexColor?: string) {
    this.id = id;
    this.name = name;
    this.range = range;
    this.hexColor = hexColor;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getRange(): PaintColorRange {
    return this.range;
  }

  public setRange(range: PaintColorRange): void {
    this.range = range;
  }

  public getHexColor(): string {
    return this.hexColor;
  }

  public setHexColor(hexColor: string): void {
    this.hexColor = hexColor;
  }


}
