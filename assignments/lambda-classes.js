// CODE here for your Lambda Classes

class Person {
    constructor(att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
        this.gender = att.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(insAtt) {
        super(insAtt);
        this.specialty = insAtt.specialty;
        this.favLanguage = insAtt.favLanguage;
        this.catchPhrase = insAtt.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(stuAtt) {
        super(stuAtt);
        this.previousBackground = stuAtt.previousBackground;
        this.className = stuAtt.className;
        this.favSubjects = stuAtt.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}.`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(pmAtt) {
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const josh = new Instructor({
    name: "Josh",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`
});

const seth = new Student({
    name: "Seth",
    location: "Atlanta",
    age: 33,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`,
    className: "WebPT6",
    previousBackground: "Recruiter",
    favSubjects: ["JS", "HTML", "CSS"]
});

const betty = new ProjectManager({
    name: "Betty",
    location: "Bedrock",
    age: 37,
    gender: "female",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`,
    gradClassName: "who knows",
    faveInstructor: "Josh"
});

console.log(josh.speak());
console.log(josh.demo("classes in JS"));
console.log(josh.grade(seth, "JS"));
console.log(seth.listsSubjects());
console.log(seth.PRAssignment("Sprint Challenge"));
console.log(seth.sprintChallenge("JS Class"));
console.log(betty.standUp("WebPT6"));
console.log(betty.debugsCode(seth, "JS Classes"));