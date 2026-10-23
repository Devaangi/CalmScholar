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
    let duration = document.getElementById("duration").value;

    if (subject === "" || duration === "" || Number(duration) <= 0) {
        alert("Please enter a subject and valid study time!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = subject + " - " + duration + " minutes";

    document.getElementById("planList").appendChild(li);

    document.getElementById("subject").value = "";
    document.getElementById("duration").value = "";
}
function addPlan() {
    let subject = document.getElementById("subjectInput").value;
    let duration = document.getElementById("timeInput").value;

    if (subject === "" || duration === "" || Number(duration) <= 0) {
        alert("Please enter a subject and valid study time!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = subject + " - " + duration + " minutes";

    document.getElementById("planList").appendChild(li);

    document.getElementById("subjectInput").value = "";
    document.getElementById("timeInput").value = "";
}




function selectMood(mood) {
    let message = "";

    if (mood.includes("Happy")) {
        message = "Great! Keep enjoying your day 😊";
    } else if (mood.includes("Okay")) {
        message = "Take things one step at a time 🙂";
    } else if (mood.includes("Stressed")) {
        message = "Take a short break and focus on one task at a time 💜";
    } else if (mood.includes("Tired")) {
        message = "Rest for a while. Your well-being matters 😴";
    }

    document.getElementById("moodResult").innerHTML = message;
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