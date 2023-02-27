let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

function printStudents() {
  for (let i = 0; i < classObj.students.length; i++) {
    console.log(classObj.students[i].name);
  }
}

function addStudent(id, name) {
  let studentObject = {
    name: name,
    id: id,
  };

  classObj.students.push(studentObject);
  // printStudents()
}
// addStudent(4,"Riya");

function changeName(idx, name) {
  classObj.students[idx].name = name;
  console.log(classObj);
}

// changeName(2,"paul")

function markOfStudent() {
  console.log(classObj.students[2].marks);
}
// markOfStudent()

function markChemistry() {
  console.log(classObj.students[0].marks[3]);
}
// markChemistry()

function changeTeacherName() {
  classObj.teacherName = "Lissy";
  console.log(classObj);
}
// changeTeacherName()

function removeStudent(i, n, students) {
  students.splice(i, n);
  return classObj;
}
// console.log(removeStudent(2,1,classObj.students));

// function sumOfMarks(id) {
//   let sum = 0;
//   for (let i = 0; i < 5; i++) {

//     sum = sum + classObj.students[id].marks[i].mark;
//   }
//   return sum;
// }
// console.log(sumOfMarks(0));

function totalMarks(id, students) {
  data = students.find((student) => {
    return student.id === id;
  });
  total = 0;
  data.marks.forEach((markObj) => {
    total += markObj.mark;
  });
  console.log(total);
}
// totalMarks('102',classObj.students)

// function deleteStudent(id,students){
//   data=students.find(student=>{
//     return student.id===id;
//   })
//   delete data.id
//   console.log(classObj);
// }
// deleteStudent('101',classObj.students)

function deleteSubject(id, students) {
  data = students.find((student) => {
    return student.id === id;
  });

  console.log(data.marks.splice(1, 4));
}
deleteSubject("103", classObj.students);
