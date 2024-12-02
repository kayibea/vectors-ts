export default class Vec2 {
  constructor(private _x = 0, private _y = 0) {}

  /**
   * Gets the x-coordinate of the vector.
   */
  public get x(): number {
    return this._x;
  }

  /**
   * Gets the y-coordinate of the vector.
   */
  public get y(): number {
    return this._y;
  }

  /**
   * Sets the x-coordinate.
   * @param x - The new x-coordinate.
   */
  public setX(x: number): void {
    this._x = x;
  }

  /**
   * Sets the y-coordinate.
   * @param y - The new x-coordinate.
   */
  public setY(y: number): void {
    this._y = y;
  }

  /**
   * Sets the x and y coordinates.
   * @param x - The new x-coordinate.
   * @param y - The new y-coordinate.
   */
  public setXY(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }

  /**
   * Checks if this vector is equal to another vector.
   * Two vectors are considered equal if their x and y coordinates are identical.
   *
   * @param v - The vector to compare with.
   * @returns `true` if the vectors are equal, otherwise `false`.
   */
  public equals(v: Vec2): boolean {
    return this._x === v._x && this._y === v._y;
  }

  /**
   * Creates a new vector with the same x and y values as this vector.
   *
   * @returns A new `Vec2` instance that is an exact copy of this vector.
   */
  public clone(): Vec2 {
    return new Vec2(this._x, this._y);
  }

  /**
   * Adds another vector to this one.
   * @param v - The vector to add.
   * @returns A new Vec2 instance representing the sum.
   */
  public add(v: Vec2): Vec2 {
    return new Vec2(this._x + v._x, this._y + v._y);
  }

  /**
   * Subtracts the components of another vector from this vector.
   *
   * @param v - The vector to subtract from this vector.
   * @returns A new `Vec2` instance representing the result of the subtraction.
   */
  public sub(v: Vec2): Vec2 {
    return new Vec2(this._x - v._x, this._y - v._y);
  }

  /**
   * Multiplies this vector by a scalar value.
   *
   * @param scalar - The scalar value to multiply the vector by.
   * @returns A new `Vec2` instance representing the scaled vector.
   */
  public mul(scalar: number): Vec2 {
    return new Vec2(this._x * scalar, this._y * scalar);
  }

  /**
   * Divides this vector by a scalar value.
   *
   * @param scalar - The scalar value to divide the vector by.
   * @returns A new `Vec2` instance representing the resulting vector after division.
   * @throws {Error} Throws an error if the scalar is zero, as division by zero is not allowed.
   */
  public div(scalar: number): Vec2 {
    return new Vec2(this._x / scalar, this._y / scalar);
  }

  /**
   * Computes the dot product of this vector and another vector.
   *
   * The dot product is calculated as `x1 * x2 + y1 * y2`, where `x1, y1` are the components of this vector and `x2, y2` are the components of the other vector.
   *
   * @param v - The vector to compute the dot product with.
   * @returns The dot product as a scalar value.
   */
  public dot(v: Vec2): number {
    return this._x * v._x + this._y * v._y;
  }

  /**
   * Calculates the length (magnitude) of the vector.
   *
   * The length is computed using the formula `sqrt(x^2 + y^2)`, where `x` and `y` are the components of the vector.
   *
   * @returns The length of the vector as a positive number.
   */
  public length(): number {
    return Math.sqrt(this.sqrLength());
  }

  /**
   * Calculates the squared length (magnitude) of the vector.
   *
   * The squared length is computed using the formula `x^2 + y^2`, where `x` and `y` are the components of the vector.
   * This is often used when comparing the lengths of vectors, as it avoids the computational cost of calculating the square root.
   *
   * @returns The squared length of the vector.
   */
  public sqrLength(): number {
    return this._x ** 2 + this._y ** 2;
  }

  /**
   * Normalizes the vector to have a length of 1 while retaining its direction.
   *
   * This method divides the vector by its length. If the vector's length is zero, the resulting vector will also be a zero vector.
   *
   * @returns A new `Vec2` instance that is the normalized version of the vector.
   */
  public norm(): Vec2 {
    const mag = this.length();

    return mag === 0 ? new Vec2(0, 0) : new Vec2(this._x / mag, this._y / mag);
  }

  /**
   * Calculates the angle in radians between this vector and another vector.
   *
   * The angle is calculated using the dot product formula:
   * `cos(theta) = (this · v) / (|this| * |v|)`, where `this` and `v` are the two vectors.
   * The result is the smallest angle between the two vectors, in the range [0, π].
   *
   * @param v - The vector to calculate the angle to.
   * @returns The angle in radians between this vector and the other vector.
   */
  public angleTo(v: Vec2): number {
    const dotProduct = this.dot(v);
    const magProduct = this.length() * v.length();
    const cosTheta = dotProduct / magProduct;

    return Math.acos(cosTheta);
  }

  /**
   * Calculates the angle of the vector relative to the positive x-axis.
   *
   * The angle is computed using the `atan2` function, which returns the angle in radians between the positive x-axis and the vector.
   * The result is in the range [-π, π].
   *
   * @returns The angle in radians between the vector and the positive x-axis.
   */
  public angle(): number {
    return Math.atan2(this._y, this._x);
  }

  /**
   * Calculates the distance between this vector and another vector.
   *
   * The distance is computed as the length of the vector difference:
   * `distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)`, where `x1, y1` are the components of this vector and `x2, y2` are the components of the other vector.
   *
   * @param v - The vector to calculate the distance to.
   * @returns The distance between the two vectors.
   */
  public distance(v: Vec2): number {
    return this.sub(v).length();
  }

  /**
   * Returns a new vector with the maximum values of each component from this vector and another vector.
   *
   * This method compares the corresponding x and y components of both vectors and creates a new vector
   * where each component is the greater of the two. This can be useful for clamping or finding bounds.
   *
   * @param v - The vector to compare against.
   * @returns A new `Vec2` instance with the maximum x and y components.
   */
  public max(v: Vec2): Vec2 {
    return new Vec2(Math.max(this._x, v._x), Math.max(this._y, v._y));
  }

  /**
   * Returns a new vector with the minimum values of each component from this vector and another vector.
   *
   * This method compares the corresponding x and y components of both vectors and creates a new vector
   * where each component is the lesser of the two. This can be useful for clamping or finding bounds.
   *
   * @param v - The vector to compare against.
   * @returns A new `Vec2` instance with the minimum x and y components.
   */
  public min(v: Vec2): Vec2 {
    return new Vec2(Math.min(this._x, v._x), Math.min(this._y, v._y));
  }

  /**
   * Reflects this vector across a given normal vector.
   *
   * The reflection is calculated using the formula:
   * `reflected = this - 2 * (this · normal) * normal`, where `this` is the original vector,
   * `normal` is the vector across which to reflect, and `·` represents the dot product.
   * The result is a new vector that is the reflection of the original vector.
   *
   * @param normal - The normal vector to reflect across.
   * @returns A new `Vec2` instance representing the reflected vector.
   */
  public reflect(normal: Vec2): Vec2 {
    const dotProduct = this.dot(normal);
    const reflected = normal.mul(2 * dotProduct);

    return this.sub(reflected);
  }

  /**
   * Performs linear interpolation (lerp) between this vector and another vector.
   *
   * The result is a vector that is a blend between the two vectors, based on the parameter `t`.
   * If `t` is 0, the result is this vector. If `t` is 1, the result is the vector `v`. Values of `t` between 0 and 1
   * interpolate linearly between the two vectors.
   *
   * @param v - The target vector to interpolate towards.
   * @param t - The interpolation factor, where `0 <= t <= 1`. A value of 0 returns the current vector, and a value of 1 returns the target vector.
   * @returns A new `Vec2` instance representing the interpolated vector.
   */
  public lerp(v: Vec2, t: number): Vec2 {
    return this.add(v.sub(this).mul(t));
  }

  /**
   * Moves this vector towards a target vector by a maximum distance delta.
   *
   * The method computes the vector difference between the target and this vector. It then scales this difference
   * so that the resulting vector moves towards the target by no more than `maxDistanceDelta`. If the distance
   * to the target is less than or equal to the `maxDistanceDelta`, the method will return the target vector.
   *
   * @param target - The target vector to move towards.
   * @param maxDistanceDelta - The maximum distance to move towards the target.
   * @returns A new `Vec2` instance representing the new position after moving towards the target.
   */
  public moveToward(target: Vec2, maxDistanceDelta: number): Vec2 {
    const directionToTarget = target.sub(this);
    const distanceToTarget = directionToTarget.length();

    if (distanceToTarget <= maxDistanceDelta || distanceToTarget === 0) {
      return target.clone();
    }

    const unitDirection = directionToTarget.div(distanceToTarget);
    const move = unitDirection.mul(maxDistanceDelta);

    return this.add(move);
  }

  /**
   * Unpacks the vector into an array of its x and y components.
   *
   * This method returns a tuple containing the x and y values of the vector, allowing for easy access to both components
   * in a format that can be destructured or used in other operations.
   *
   * @returns A tuple `[x, y]` representing the x and y components of the vector.
   */
  public unpack(): [number, number] {
    return [this._x, this._y];
  }

  /**
   * Returns a string representation of the vector.
   *
   * This method returns a string that represents the vector in the format `"Vector2(x, y)"`, where `x` and `y` are the
   * components of the vector. This is useful for debugging and logging purposes.
   *
   * @returns A string representation of the vector, e.g., `"Vector2(3, 4)"`.
   */
  public toString(): string {
    return `Vector2(${this._x}, ${this._y})`;
  }

  /**
   * Returns a `Vec2` representing the "top" direction (0, -1).
   *
   * This is a unit vector pointing upwards along the y-axis, commonly used in 2D space to represent movement
   * or direction towards the top.
   *
   * @returns A `Vec2` instance representing the top direction (0, -1).
   */
  public static get top(): Vec2 {
    return new Vec2(0, -1);
  }

  /**
   * Returns a `Vec2` representing the "left" direction (-1, 0).
   *
   * This is a unit vector pointing leftwards along the x-axis, commonly used in 2D space to represent movement
   * or direction towards the left.
   *
   * @returns A `Vec2` instance representing the left direction (-1, 0).
   */
  public static get left(): Vec2 {
    return new Vec2(-1, 0);
  }

  /**
   * Returns a `Vec2` representing the "right" direction (1, 0).
   *
   * This is a unit vector pointing rightwards along the x-axis, commonly used in 2D space to represent movement
   * or direction towards the right.
   *
   * @returns A `Vec2` instance representing the right direction (1, 0).
   */
  public static get right(): Vec2 {
    return new Vec2(1, 0);
  }

  /**
   * Returns a `Vec2` representing the "down" direction (0, 1).
   *
   * This is a unit vector pointing downwards along the y-axis, commonly used in 2D space to represent movement
   * or direction towards the bottom.
   *
   * @returns A `Vec2` instance representing the down direction (0, 1).
   */
  public static get down(): Vec2 {
    return new Vec2(0, 1);
  }
}
