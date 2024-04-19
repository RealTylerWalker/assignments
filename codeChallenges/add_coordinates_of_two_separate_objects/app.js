// const addCoordinates = (cords1, cords2) => {
//   let cords1 = { firstX: a, secondX: b };
//   let cords2 = { secondX: c, secondY: d };

//   return {
//     x: cords1.firstX + cords2.secondX,
//     y: cords1.secondX + cords2.secondY,
//   };
// };
// console.log(addCoordinates(cords1.firstX.))

const addCoordinates = (coords1, coords2) => {
  const x = coords1.x + coords2.x;
  const y = coords1.y + coords2.y;
  return { x, y };
};

const coordinates1 = { x: 3, y: 5 };
const coordinates2 = { x: 15, y: 30 };

console.log(addCoordinates(coordinates1, coordinates2));

// const addCoordinates = (coords1, coords2) => {
//   const x = coords1.x + coords2.x;
//   const y = coords1.y + coords2.y;
//   return { x, y };
// };

// const coordinates1 = { x: 3, y: 5 };
// const coordinates2 = { x: 15, y: 30 };

// console.log(addCoordinates(coordinates1, coordinates2));
