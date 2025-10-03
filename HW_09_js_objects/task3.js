const car1 = {
    brand: "KIA",
    model: "Carnival",
    year: 2025,
};

const car2 = {
    brand: "Tesla",
    model: "Model 3",
    owner: 2022,
};

const car3 = {...car1, ...car2};

console.log(car3);