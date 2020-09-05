export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'x', { writable: false });
    Object.defineProperty(this, 'y', { writable: false });
  }


  static plus(vector1, vector2) {
    const x = vector1.x + vector2.x;
    const y = vector1.y + vector2.y;
    // eslint-disable-next-line no-undef
    return new Vector(x, y);
  }

  static minus(vector1, vector2) {
    const x = vector1.x - vector2.x;
    const y = vector1.y - vector2.y;
    // eslint-disable-next-line no-undef
    return new Vector(x, y);
  }

  distance() {
    // eslint-disable-next-line no-undef
    const dis = Math.hypot(this.x, this.y);
    // eslint-disable-next-line no-undef
    return dis;
  }
}
