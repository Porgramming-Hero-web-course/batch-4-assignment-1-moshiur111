
**Union and Intersection Types in TypeScript**

Union and intersection types are powerful features in TypeScript that make your code more flexible and secure.

**Union Types**
Union types allow a variable to hold values of multiple different types. This is really useful when you have a function that can accept different kinds of input, like a string or a number.

**Example:**
```typescript
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`Your ID is: ${id}`);
}

printId(101); // Valid
printId("202"); // Also valid
```

**Why it's useful:**
- **Flexibility:** Union types let you work with different types without losing type safety.
- **Type Narrowing:** TypeScript can automatically figure out which type you're working with at different points in your code.

**Intersection Types**
Intersection types combine multiple types into one. This means an object of an intersection type will have all the properties from the combined types.

**Example:**
```typescript
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Abdullah",
  employeeId: 1234
};
```

**Why it's useful:**
- **Type Composition:** You can create new types by combining existing ones, which is great for complex data structures.
- **Reusability:** You can create components that follow multiple interfaces or classes, making your code more organized and modular.
- **Strict Checking:** TypeScript ensures all required properties are present when using intersection types, improving code safety.

Overall, union and intersection types give TypeScript developers more power to create flexible, type-safe, and maintainable code. By using these features, you can write cleaner applications with fewer runtime errors.

