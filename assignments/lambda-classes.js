// CODE here for your Lambda Classes

class Person {
    constructor(att){
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
    constructor(insAtt){
        super(insAtt);
        this.specialty = insAtt.specialty;
        this.favLanguage = insAtt.favLanguage;
        this.catchPhrase = insAtt.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.specialty}.`
    }
    grade() {
        return `${this.name} receives a perfect score on ${this.specialty}.`
    }
}

class Student extends Instructor {
    constructor(stuAtt){
        super(stuAtt);
        this.previousBackground = stuAtt.previousBackground;
        this.className = stuAtt.className;
        this.favSubjects = stuAtt.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}.`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.specialty}.`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.specialty}.`
    }
}
