// JavaScript code for interactivity
document.addEventListener('DOMContentLoaded', function () {
    // Sample code for enrolling in a course
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Add logic to enroll the user in the selected course
            alert('You are now enrolled in the course!');
        });
    });

    // Sample code for starting a quiz
    //const startQuizButton = document.querySelector('.start-quiz-btn');
    ////startQuizButton.addEventListener('click', function () {
        // Add logic to start a quiz
        //alert('Quiz started!');
    });

    // Sample code for retrieving user profile information
    // Replace with actual code to fetch and display user profile data
    const profileInfo = document.querySelector('.profile-info');
    profileInfo.innerHTML = `
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Completed Courses: 3</p>
        <p>Badges Earned: 5</p>
    `;
});

$('.res').click(function(){
 alert("Registered Successfully");
 
});