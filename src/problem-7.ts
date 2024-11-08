{
  // Problem 7
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    } 

    getCarAge(): void {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.year;
      console.log(`${age} (assuming current year is ${currentYear})`);
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();

  //
}
