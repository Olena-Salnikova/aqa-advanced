// Declare a variable for the student's average grade (0 - 100)
const averageGrade = 101;

// Use if...else if...else to determine the performance level
if (averageGrade < 0 || averageGrade > 100) {
  console.log("Помилка: оцінка повинна бути від 0 до 100");
} else if (averageGrade < 60) {
  console.log("Незадовільно");
} else if (averageGrade <= 70) {
  console.log("Задовільно");
} else if (averageGrade <= 80) {
  console.log("Добре");
} else if (averageGrade <= 90) {
  console.log("Дуже добре");
} else {
  console.log("Відмінно");
}