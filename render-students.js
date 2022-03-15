export function renderStudents(studentObject) {
    let studentDiv = document.createElement('div');
    studentDiv.classList.add('student-item');

    let gpaPara = document.createElement('p');
    gpaPara.textContent = studentObject.gpa;
    studentDiv.appendChild(gpaPara);

    let namePara = document.createElement('p');
    namePara.textContent = studentObject.name;
    studentDiv.appendChild(namePara);

    let majorPara = document.createElement('p');
    majorPara.textContent = studentObject.major;
    studentDiv.appendChild(majorPara);

    let agePara = document.createElement('p');
    agePara.textContent = studentObject.age;
    studentDiv.appendChild(agePara);

    return studentDiv;
}
