class Student {
    constructor(name, cls, age, loc) {
        this.name = name;
        this.cls = cls;
        this.age = age;
        this.loc = loc;
    }
}

var student = []

function displayStud() {
    const header = `
        <tr>
            <th>No.</th><th>Name</th><th>Class</th><th>Age</th><th>Location</th><th>Actions</th>
        </tr>
    `
    var rows = ''
    student.forEach((stud, id) => {
        rows += '<tr><td>' + (id+1) + '</td>'
            + '<td>' + stud.name + '</td>'
            + '<td>' + stud.cls + '</td>'
            + '<td>' + stud.age + '</td>'
            + '<td>' + stud.loc + '</td>'
            + `<td class = "links"><span onclick="editStud(${id})">Edit</span> <span onclick="delStud(${id})">Delete</span>` + '</tr>'
    });
    document.getElementById('student').innerHTML = header + rows;
}

function reset() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('class').value = '';
    document.getElementById('age').value = '';
    document.getElementById('loc').value = '';
}

function addStud() {
    nm = document.getElementById('name').value;
    cls = document.getElementById('class').value;
    age = Number(document.getElementById('age').value);
    loc = document.getElementById('loc').value;
    if(document.getElementById('id').value == '') {
        student.push(new Student(nm, cls, age, loc));
    } else {
        id = Number(document.getElementById('id').value)
        student[id].name = nm;
        student[id].cls = cls;
        student[id].age = age;
        student[id].loc = loc;
    }
    alert('Student Added')
    reset();
    displayStud();
}

function delStud(id) {
    delete student[id];
    displayStud();
}

function editStud(id) {
    document.getElementById('name').value = student[id].name;
    document.getElementById('class').value = student[id].cls;
    document.getElementById('age').value = student[id].age;
    document.getElementById('loc').value = student[id].loc;
    document.getElementById('id').value = id;
}

reset();
displayStud();