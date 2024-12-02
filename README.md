# Vectors - A 2D and 3D Vector Library

Vectors is a lightweight, high-performance vector math library designed for use in browser-based games and applications that require vector manipulation. It currently supports 2D vectors (`Vec2`), and plans are in place for future support of 3D vectors (`Vec3`) and possibly other types.

## Features

- **2D Vector Operations**: Addition, subtraction, multiplication, division, and more.
- **Geometrical Operations**: Dot product, distance, length, normalization, and angle calculations.
- **Static Vectors**: Common directions (top, right, down, left).
- **Interpolation & Movement**: Linear interpolation (`lerp`), moving toward targets, and vector reflection.
- **Future Support for Vec3**: 3D vectors (and potentially other vector types) are planned for future releases.

## Installation

Install Vec2 using npm or yarn:

```bash
npm i @kayibea/vectors
```

## Usage

Creating a Vector

```ts
import Vec2 from 'vectors';

// 2D Vector
const v2 = new Vec2(10, 20);
console.log(v2.x, v2.y); // 10 20

// 3D Vector (When implemented)
const v3 = new Vec3(10, 20, 30);
console.log(v3.x, v3.y, v3.z); // 10 20 30
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
