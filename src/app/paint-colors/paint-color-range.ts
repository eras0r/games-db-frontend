/**
 * Represents all available paint color bases (types).
 * We use this instead of an enum, as on the server side the bases are stored as strings and not numbers.
 */
// TODO rename to PaintColorRange
export type PaintColorRange =
  'Base' |
  'Layer' |
  'Shade' |
  'Dry' |
  'Edge' |
  'Glaze' |
  'Texture' |
  'Technical';
