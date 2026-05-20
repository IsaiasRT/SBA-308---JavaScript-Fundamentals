// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

////////////////////////////////////////////////////////////////////////////

//function that check which assignment group belongs to the course
function validGroupCourse(course, group){
  if (!course || !group){
    throw new Error ("AssignmentGroup or course is missing.");
  } else if(course.id === group.course_id) {
    throw new Error ("assignmentGroup does not match to this course");
  }
}

//function that parse date string into Date Object
function parseDate(datestring){
  const date = new Date(datestring);
  if(isNaN(date.getTime())){
    throw new Error ("Invalid date");
  }
  return date;
}

//function that checks if an assignment is not yet due
function notYetDue(assignment){
  const dueDate = parseDate(assignment.due_at);
  const today = new Date();
  return dueDate > today;

}

//function if the submission is late
function Late(submitted_at, due_at){
  const submittedDate = parseDate(submitted_at);
  const dueDate = parseDate(due_at);
  return submittedDate > dueDate;
}

//function that validates if a score is a reasonable range
function validScore(points_possible, score){
  if (typeof score !== "number" || isNaN(score)){
    return false;
  } else if(points_possible <= 0){
    return false;
  }
  return true;
}

//function that applies 10% penalty for late submissions
function latePenalty(score, lateSubmission, penaltypoints =15){
  if(!lateSubmission){
    return score;
  }
  const adjust = score - penaltypoints;
  return adjust < 0 ? 0 : adjust;

}

//function that normalize raw score value 0 and 1
function normalize(score, points_possible){
return score / points_possible;
}

function getLearnerData(course, group, submissions) {
  // here, we would process this data to achieve the desired result.
  try{
  
    validGroupCourse(course, group);
  
    return [];
  }catch(error){
    console.error("getLearnerData error. please check it", error.message);
    return [];
  }
  
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
