function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task == "") {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = task;

        li.onclick = function() {
            li.style.textDecoration = "line-through";
        };

        document.getElementById("taskList").appendChild(li);

        document.getElementById("taskInput").value = "";
    }
}

function addStudyPlan() {
    let subject = document.getElementById("subject").value;
    let duration = Number(document.getElementById("duration").value);

    if (subject == "" || duration <= 0) {
        alert("Please enter a subject and valid study time!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = subject + " - " + duration + " minutes";

        document.getElementById("planList").appendChild(li);

        document.getElementById("subject").value = "";
        document.getElementById("duration").value = "";
    }
}

function checkMood() {
    let mood = document.getElementById("moodSelect").value;
    let message = "";

    if (mood == "") {
        alert("Please select your mood!");
    } else if (mood == "Happy") {
        message = "Great! Keep enjoying your day.";
    } else if (mood == "Relaxed") {
        message = "Wonderful! Keep taking care of yourself.";
    } else if (mood == "Stressed") {
        message = "Take a short break and focus on one task at a time.";
    } else {
        message = "Rest for a while and return when you feel ready.";
    }

    document.getElementById("moodMessage").innerHTML = message;
}

function saveNote() {
    let note = document.getElementById("noteInput").value;

    if (note == "") {
        alert("Please write a note first!");
    } else {
        document.getElementById("noteMessage").innerHTML =
            "Your note has been saved on this page: " + note;
    }
}