{
  // Problem 4
  type CircleShape = {
    shape: "circle";
    radius: number;
  };

  type RectangleShape = {
    shape: "rectangle";
    height: number;
    width: number;
  };

  type UnionShape = CircleShape | RectangleShape;

  function calculateShapeArea(shape: UnionShape): number {
    if (shape.shape === "circle") {
      const area = Math.PI * shape.radius * shape.radius;
      return Number(area.toFixed(2));
    } else {
      const area = shape.height * shape.width;
      return Number(area.toFixed(2));
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  
  console.log(circleArea);
  console.log(rectangleArea);

  //
}
