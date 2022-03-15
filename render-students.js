export function renderStudents(studentObject) {
    let studentDiv = document.createElement('div');
    studentDiv.classList.add('student-item');
    let gpaPara = document.createElement('p');
    gpaPara.textContent = studentObject.gpa;
    let namePara = document.createElement('p');
    namePara.textContent = studentObject.name;
    let majorPara = document.createElement('p');
    majorPara.textContent = studentObject.major;
    let agePara = document.createElement('p');
    agePara.textContent = studentObject.age;
    return studentDiv;
}
