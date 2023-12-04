// Dependencies

import { between } from './math';

// Public

export interface Coordinates {
  x: number;
  y: number;
}

export class Area {
  start: Coordinates;
  end: Coordinates;

  constructor(coord1: Coordinates, coord2: Coordinates) {
    this.start = {
      x: Math.min(coord1.x, coord2.x),
      y: Math.min(coord1.y, coord2.y),
    };

    this.end = {
      x: Math.max(coord1.x, coord2.x),
      y: Math.max(coord1.y, coord2.y),
    };
  }

  contains(coord: Coordinates): boolean {
    return (
      between(coord.x, this.start.x, this.end.x) &&
      between(coord.y, this.start.y, this.end.y)
    );
  }
}
