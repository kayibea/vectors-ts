export default class Vec3 {
  constructor(private _x = 0, private _y = 0, private _z = 0) {
    throw new Error('To be implemented !');
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  public get z(): number {
    return this._z;
  }
}
