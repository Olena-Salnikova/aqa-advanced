// Declare a variable for the student's average grade (0 - 100)
let averageGrade = 100;

// Determine the performance level using switch(true)
switch (true) {
  case (averageGrade < 0 || averageGrade > 100):
    console.log("Помилка: оцінка повинна бути від 0 до 100");
    break;
  case (averageGrade < 60):
    console.log("Незадовільно");
    break;
  case (averageGrade <= 70):
    console.log("Задовільно");
    break;
  case (averageGrade <= 80):
    console.log("Добре");
    break;
  case (averageGrade <= 90):
    console.log("Дуже добре");
    break;
  case (averageGrade <= 100):
    console.log("Відмінно");
    break;
}