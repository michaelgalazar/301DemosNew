"use strict";

// Spaces and breaks are not important
let student={
    name: "John",
    stuId: 123,
    courseCompleted: ["CS301", "CS303"],
    isAcceleratedTrack: true,
    getCourseCount: function(){return this.course_completed.length}
};

let completedCourseCount = student.getCourseCount();
console.log(`This student completed ${completedCourseCount} courses already.`);