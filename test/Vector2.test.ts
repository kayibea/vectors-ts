import { describe, it, expect } from 'vitest';
import Vec2 from '../src/Vector2';

describe('Vec2', () => {
  describe('Constructor and Getters', () => {
    it('should initialize to (0, 0) by default', () => {
      const v = new Vec2();
      expect(v.x).toBe(0);
      expect(v.y).toBe(0);
    });

    it('should initialize with given x and y values', () => {
      const v = new Vec2(5, -3);
      expect(v.x).toBe(5);
      expect(v.y).toBe(-3);
    });
  });

  describe('Setters', () => {
    it('should set x and y values individually', () => {
      const v = new Vec2();
      v.setX(10);
      v.setY(-7);
      expect(v.x).toBe(10);
      expect(v.y).toBe(-7);
    });

    it('should set x and y values together', () => {
      const v = new Vec2();
      v.setXY(2, 3);
      expect(v.x).toBe(2);
      expect(v.y).toBe(3);
    });
  });

  describe('Equality and Cloning', () => {
    it('should correctly compare equality', () => {
      const v1 = new Vec2(1, 2);
      const v2 = new Vec2(1, 2);
      const v3 = new Vec2(3, 4);

      expect(v1.equals(v2)).toBe(true);
      expect(v1.equals(v3)).toBe(false);
    });

    it('should clone a vector', () => {
      const v1 = new Vec2(1, 2);
      const v2 = v1.clone();

      expect(v2).not.toBe(v1); // Ensure it's a different instance
      expect(v2.equals(v1)).toBe(true);
    });
  });

  describe('Arithmetic Methods', () => {
    it('should add two vectors', () => {
      const v1 = new Vec2(1, 2);
      const v2 = new Vec2(3, 4);
      const result = v1.add(v2);

      expect(result.x).toBe(4);
      expect(result.y).toBe(6);
    });

    it('should subtract two vectors', () => {
      const v1 = new Vec2(5, 6);
      const v2 = new Vec2(3, 4);
      const result = v1.sub(v2);

      expect(result.x).toBe(2);
      expect(result.y).toBe(2);
    });

    it('should multiply a vector by a scalar', () => {
      const v = new Vec2(2, 3);
      const result = v.mul(2);

      expect(result.x).toBe(4);
      expect(result.y).toBe(6);
    });

    it('should divide a vector by a scalar', () => {
      const v = new Vec2(4, 6);
      const result = v.div(2);

      expect(result.x).toBe(2);
      expect(result.y).toBe(3);
    });
  });

  describe('Vector Properties', () => {
    it('should compute the length of a vector', () => {
      const v = new Vec2(3, 4);
      expect(v.length()).toBe(5); // Pythagoras: sqrt(3^2 + 4^2) = 5
    });

    it('should compute the squared length of a vector', () => {
      const v = new Vec2(3, 4);
      expect(v.sqrLength()).toBe(25);
    });

    it('should normalize a vector', () => {
      const v = new Vec2(3, 4);
      const normalized = v.norm();

      expect(normalized.x).toBeCloseTo(0.6, 5);
      expect(normalized.y).toBeCloseTo(0.8, 5);
      expect(normalized.length()).toBeCloseTo(1, 5);
    });
  });

  describe('Angle Methods', () => {
    it('should compute the angle between two vectors', () => {
      const v1 = new Vec2(1, 0);
      const v2 = new Vec2(0, 1);
      const angle = v1.angleTo(v2);

      expect(angle).toBeCloseTo(Math.PI / 2, 5); // 90 degrees
    });

    it('should compute the angle of a single vector', () => {
      const v = new Vec2(0, 1);
      expect(v.angle()).toBeCloseTo(Math.PI / 2, 5);
    });
  });

  describe('Utility Methods', () => {
    it('should compute the maximum components of two vectors', () => {
      const v1 = new Vec2(1, 5);
      const v2 = new Vec2(3, 2);
      const max = v1.max(v2);

      expect(max.x).toBe(3);
      expect(max.y).toBe(5);
    });

    it('should compute the minimum components of two vectors', () => {
      const v1 = new Vec2(1, 5);
      const v2 = new Vec2(3, 2);
      const min = v1.min(v2);

      expect(min.x).toBe(1);
      expect(min.y).toBe(2);
    });

    it('should reflect a vector over a normal', () => {
      const v = new Vec2(1, -1);
      const normal = new Vec2(0, 1);
      const reflected = v.reflect(normal);

      expect(reflected.x).toBe(1);
      expect(reflected.y).toBe(1);
    });

    it('should interpolate between two vectors', () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(10, 10);
      const lerp = v1.lerp(v2, 0.5);

      expect(lerp.x).toBe(5);
      expect(lerp.y).toBe(5);
    });

    it('should move toward another vector', () => {
      const v1 = new Vec2(0, 0);
      const v2 = new Vec2(10, 0);
      const moved = v1.moveToward(v2, 5);

      expect(moved.x).toBe(5);
      expect(moved.y).toBe(0);
    });

    it('should unpack a vector into an array', () => {
      const v = new Vec2(3, 4);
      const [x, y] = v.unpack();

      expect(x).toBe(3);
      expect(y).toBe(4);
    });

    it('should convert to a string', () => {
      const v = new Vec2(3, 4);
      expect(v.toString()).toBe('Vector2(3, 4)');
    });
  });

  describe('Static Properties', () => {
    it('should return correct static directions', () => {
      expect(Vec2.top).toEqual(new Vec2(0, -1));
      expect(Vec2.left).toEqual(new Vec2(-1, 0));
      expect(Vec2.right).toEqual(new Vec2(1, 0));
      expect(Vec2.down).toEqual(new Vec2(0, 1));
    });
  });
});
