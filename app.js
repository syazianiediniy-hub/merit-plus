/* =========================================
   MERIT+ STUDENT MERIT MANAGEMENT SYSTEM
   Centralised JavaScript
========================================= */

/* =========================================
1. DEMO STUDENT INFORMATION
========================================= */

const student = {
    studentID: "2025123456",
    password: "merit123",
    name: "Dhea Safia binti Adha",
    email: "dheasafia@student.uitm.edu.my",
    phone: "012-5141008",
    faculty: "Faculty of Information Management",
    programme: "Bachelor (Hons) of Information Science System Management",
    campus: "UiTM Puncak Perdana",
    college: "Kolej Jasmine",
    academicSession: "2026/2027"
};


/* =========================================
   PAGE ACCESS PROTECTION
========================================= */

const isLoginPage = document.getElementById("loginForm") !== null;
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

if (isLoginPage && isLoggedIn) {

    window.location.replace("dashboard.html");

} else if (!isLoginPage && !isLoggedIn) {

    window.location.replace("index.html");

}


/* =========================================
2. COMPLETED PROGRAMME DATABASE
========================================= */

const completedProgrammes = [

    // College Programmes
    {
        name: "BIZFEST 2026",
        date: "2026-02-10",
        category: "College",
        merit: 0.75
    },
    {
        name: "Jasmin CARE: Gaya hidup Sihat",
        date: "2026-02-18",
        category: "College",
        merit: 0.75
    },
    {
        name: "Run-O-Saurus",
        date: "2026-03-05",
        category: "College",
        merit: 0.75
    },
    {
        name: "Ladies Fit Night",
        date: "2026-04-12",
        category: "College",
        merit: 0.75
    },
    {
        name: "Gotong Royong Perdana 2",
        date: "2026-05-20",
        category: "College",
        merit: 0.75
    },
    {
        name: "Kenduri Kasih Jasmine",
        date: "2026-06-15",
        category: "College",
        merit: 0.75
    },

    // Non-College Programmes
    {
        name: "Clean Up Campaign",
        date: "2026-02-22",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Liqa Mauziah (WOW)",
        date: "2026-03-10",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Kelas Tajwid Surau Ar-Razzaq",
        date: "2026-03-25",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Webinar: Pain to Power",
        date: "2026-04-08",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Bacaan Yassin, Tahlil",
        date: "2026-04-20",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "AI Unlocked: Exploring the Future of AI",
        date: "2026-05-05",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Monolog Night X Coffee Rocks",
        date: "2026-05-18",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Silat Cekak: Basic Self Defense",
        date: "2026-06-02",
        category: "Non-College",
        merit: 0.25
    },
    {
        name: "Movie Night PEERS",
        date: "2026-06-25",
        category: "Non-College",
        merit: 0.25
    }

];


/* =========================================
3. UPCOMING PROGRAMME DATABASE
========================================= */

const upcomingProgrammes = [
    {
        name: "Bebas Aedes With Combi",
        day: 0,
        time: "9:00 AM - 12:00 PM",
        location: "Unit Sukan Kolej Jasmine J1",
        category: "Non-College",
        description: "Cleaning around the college."
    },
    {
        name: "Heartbeat Heroes",
        day: 1,
        time: "10:00 AM - 1:00 PM",
        location: "Basketball Court",
        category: "College",
        description: "Learn how to perform CPR and handle critical situations."
    },
    {
        name: "Taklimat Kolej Jasmine Bersama Pengetua",
        day: 2,
        time: "8:00 PM - 10:30 PM",
        location: "Dewan Serbaguna Jasmine",
        category: "College",
        description: "Learn about the college rules and facilities."
    },
    {
        name: "Tafaqquh Fiddin Hadhari",
        day: 3,
        time: "7:45 PM - 8:30 PM",
        location: "Lecture Hall 2",
        category: "Non-College",
        description: "Learn more about Tajwid."
    },
    {
        name: "Chillax Night",
        day: 4,
        time: "8:30 PM - 10:00 PM",
        location: "Cafe Jasmine",
        category: "Non-College",
        description: "Talent session performance with FITA students."
    },
    {
        name: "Fashion & Art Revouge",
        day: 6,
        time: "8:30 PM - 10:00 PM",
        location: "Perkarangan J1 & J2",
        category: "College",
        description: "Creative art and fashion show by college students."
    }
];


/* =========================================
4. MERIT CALCULATION
========================================= */

const collegeProgrammes = completedProgrammes.filter(
    programme => programme.category === "College"
);

const nonCollegeProgrammes = completedProgrammes.filter(
    programme => programme.category === "Non-College"
);

const collegeMerit = collegeProgrammes.reduce(
    (total, programme) => total + programme.merit, 0
);

const nonCollegeMerit = nonCollegeProgrammes.reduce(
    (total, programme) => total + programme.merit, 0
);

const totalMerit = collegeMerit + nonCollegeMerit;


/* =========================================
5. GENERAL HELPER FUNCTIONS
========================================= */

function formatDate(date) {
    return new Date(date + "T00:00:00").toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}

function getProgrammeDate(dayOffset) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + dayOffset);
    return date;
}

function formatUpcomingDate(date) {
    return date.toLocaleDateString("en-MY", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


/* =========================================
6. LOGIN FUNCTION
========================================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.replace("dashboard.html");
    }

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const studentID =
            document.getElementById("studentID").value.trim();

        const password =
            document.getElementById("password").value;

        const errorMessage =
            document.getElementById("error-message");

        if (
            studentID === student.studentID &&
            password === student.password
        ) {

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            errorMessage.classList.remove("d-none");

        }

    });

}


/* =========================================
7. DASHBOARD MERIT SUMMARY
========================================= */

const dashboardChart = document.getElementById("meritChart");

if (dashboardChart) {

    const summaryCards =
        document.querySelectorAll(".summary-card");

    if (summaryCards.length >= 3) {

        summaryCards[0].querySelector("h2").textContent =
            totalMerit.toFixed(2);

        summaryCards[0].querySelector("small").textContent =
            "Merit Points";

        summaryCards[1].querySelector("h2").textContent =
            collegeMerit.toFixed(2);

        summaryCards[1].querySelector("small").textContent =
            collegeProgrammes.length + " completed programmes";

        summaryCards[2].querySelector("h2").textContent =
            nonCollegeMerit.toFixed(2);

        summaryCards[2].querySelector("small").textContent =
            nonCollegeProgrammes.length + " completed programmes";

    }

    if (typeof Chart !== "undefined") {
        new Chart(dashboardChart, {

            type: "doughnut",

            data: {
                labels: ["College Merit", "Non-College Merit"],

                datasets: [{
                    data: [collegeMerit, nonCollegeMerit],
                    backgroundColor: ["#239b65", "#e69a3a"],
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },

            options: {

                responsive: true,
                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        position: "bottom",

                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },

                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ": " +
                                    Number(context.raw).toFixed(2) + " points";
                            }
                        }
                    }

                }

            }

        });
    }

}


/* =========================================
8. DASHBOARD UPCOMING PROGRAMMES
========================================= */

const upcomingProgrammeList =
    document.getElementById("upcomingProgrammeList");

if (upcomingProgrammeList) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sevenDayProgrammes = upcomingProgrammes
        .filter(programme => programme.day >= 0 && programme.day <= 6)
        .sort((a, b) => a.day - b.day);

    upcomingProgrammeList.innerHTML = "";

    if (sevenDayProgrammes.length > 0) {

        sevenDayProgrammes.forEach(programme => {

            const programmeDate = getProgrammeDate(programme.day);

            const row = document.createElement("tr");

            const merit =
                programme.category === "College" ? 0.75 : 0.25;

            row.innerHTML = `
                <td><strong>${programme.name}</strong></td>
                <td>${programmeDate.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })}</td>
                <td>${programme.category}</td>
                <td>${merit.toFixed(2)}</td>
            `;

            upcomingProgrammeList.appendChild(row);

        });

    } else {

        upcomingProgrammeList.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-muted">
                    No upcoming programmes available.
                </td>
            </tr>
        `;

    }

}


/* =========================================
9. MY MERIT PAGE
========================================= */

const completedMeritList =
    document.getElementById("completedMeritList");

if (completedMeritList) {

    const summaryCards =
        document.querySelectorAll(".summary-card");

    if (summaryCards.length >= 3) {

        summaryCards[0].querySelector("h2").textContent =
            totalMerit.toFixed(2);

        summaryCards[1].querySelector("h2").textContent =
            collegeMerit.toFixed(2);

        summaryCards[1].querySelector("small").textContent =
            collegeProgrammes.length + " completed programmes";

        summaryCards[2].querySelector("h2").textContent =
            nonCollegeMerit.toFixed(2);

        summaryCards[2].querySelector("small").textContent =
            nonCollegeProgrammes.length + " completed programmes";

    }

    const completedBadge =
        document.querySelector(".card-heading .badge");

    if (completedBadge) {
        completedBadge.textContent =
            completedProgrammes.length + " Completed";
    }

    completedMeritList.innerHTML = "";

    completedProgrammes.forEach((programme, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>
                <strong>${programme.name}</strong>
            </td>

            <td>${formatDate(programme.date)}</td>

            <td>${programme.category}</td>

            <td>
                <strong>${programme.merit.toFixed(2)}</strong>
            </td>

            <td>
                <span class="badge text-bg-success">
                    Completed
                </span>
            </td>
        `;

        completedMeritList.appendChild(row);

    });

}


/* =========================================
   MONTHLY MERIT STACKED BAR CHART (MY MERIT)
========================================= */

const monthlyMeritCanvas =
    document.getElementById("monthlyMeritChart");

if (monthlyMeritCanvas && typeof Chart !== "undefined") {

    const monthOrder = [
        "2026-02",
        "2026-03",
        "2026-04",
        "2026-05",
        "2026-06"
    ];

    const monthLabels = [
        "Feb 2026",
        "Mar 2026",
        "Apr 2026",
        "May 2026",
        "Jun 2026"
    ];

    const collegeByMonth = monthOrder.map(monthKey =>
        completedProgrammes
            .filter(item =>
                item.date.startsWith(monthKey) &&
                item.category === "College"
            )
            .reduce((sum, item) => sum + item.merit, 0)
    );

    const nonCollegeByMonth = monthOrder.map(monthKey =>
        completedProgrammes
            .filter(item =>
                item.date.startsWith(monthKey) &&
                item.category === "Non-College"
            )
            .reduce((sum, item) => sum + item.merit, 0)
    );

    new Chart(monthlyMeritCanvas, {

        type: "bar",

        data: {
            labels: monthLabels,
            datasets: [
                {
                    label: "College Merit (0.75)",
                    data: collegeByMonth,
                    backgroundColor: "#239b65",
                    borderRadius: 6
                },
                {
                    label: "Non-College Merit (0.25)",
                    data: nonCollegeByMonth,
                    backgroundColor: "#e69a3a",
                    borderRadius: 6
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: "index",
                intersect: false
            },
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Merit Points"
                    }
                }
            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ": " +
                                Number(context.raw).toFixed(2) + " pts";
                        },
                        footer: function(tooltipItems) {
                            const monthTotal = tooltipItems.reduce(
                                (sum, item) => sum + Number(item.raw), 0
                            );
                            return "Monthly Total: " + monthTotal.toFixed(2) + " pts";
                        }
                    }
                }
            }
        }

    });

}


/* =========================================
10. PROGRAMMES PAGE
========================================= */

const programmeList =
    document.getElementById("programmeList");

if (programmeList) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const rollingProgrammes = upcomingProgrammes
        .filter(programme => programme.day >= 0 && programme.day <= 6)
        .sort((a, b) => a.day - b.day);

    programmeList.innerHTML = "";

    const programmeCount =
        document.getElementById("programmeCount");

    const programmeDateRange =
        document.getElementById("programmeDateRange");

    if (programmeCount) {
        programmeCount.textContent =
            rollingProgrammes.length + " Programmes Available";
    }

    if (programmeDateRange) {

        const lastDay = getProgrammeDate(6);

        programmeDateRange.textContent =
            formatUpcomingDate(today) + " - " +
            formatUpcomingDate(lastDay);

    }

    rollingProgrammes.forEach((programme, index) => {

        const programmeDate =
            getProgrammeDate(programme.day);

        const merit =
            programme.category === "College" ? 0.75 : 0.25;

        const column = document.createElement("div");
        column.className = "col-12 col-lg-6";

        const card = document.createElement("div");
        card.className = "programme-card h-100";

        card.innerHTML = `
            <div class="row align-items-center">

                <div class="col-md-8">

                    <span class="programme-category">
                        ${programme.category}
                    </span>

                    <h5 class="mt-3">${programme.name}</h5>

                    <div class="programme-details">
                        <p>📅 ${formatUpcomingDate(programmeDate)}</p>
                        <p>🕒 ${programme.time}</p>
                        <p>📍 ${programme.location}</p>
                    </div>

                    <p class="programme-merit">
                        Merit Value: ${merit.toFixed(2)}
                    </p>

                </div>

                <div class="col-md-4 text-md-end">

                    <button
                        type="button"
                        class="view-details-btn"
                        data-programme-index="${index}">
                        View Details
                    </button>

                </div>

            </div>
        `;

        column.appendChild(card);
        programmeList.appendChild(column);

    });


    // Programme Details Modal
    programmeList.addEventListener("click", function(event) {

        const button =
            event.target.closest(".view-details-btn");

        if (!button) return;

        const index =
            Number(button.dataset.programmeIndex);

        const programme =
            rollingProgrammes[index];

        if (!programme) return;

        const programmeDate =
            getProgrammeDate(programme.day);

        const merit =
            programme.category === "College" ? 0.75 : 0.25;

        document.getElementById("programmeModalLabel").textContent =
            programme.name;

        document.getElementById("programmeModalBody").innerHTML = `
            <p><strong>Category:</strong> ${programme.category}</p>
            <p><strong>Date:</strong> ${formatUpcomingDate(programmeDate)}</p>
            <p><strong>Time:</strong> ${programme.time}</p>
            <p><strong>Location:</strong> ${programme.location}</p>
            <p><strong>Merit Value:</strong> ${merit.toFixed(2)}</p>

            <hr>

            <p><strong>Programme Description:</strong></p>
            <p>${programme.description}</p>

            <p class="text-muted">
                Note: Merit will only be given after successful
                programme completion and attendance.
            </p>
        `;

        const modalElement =
            document.getElementById("programmeModal");

        const modal =
            bootstrap.Modal.getOrCreateInstance(modalElement);

        modal.show();

    });

}


/* =========================================
11. STUDENT PROFILE PAGE
========================================= */

const profilePage =
    document.querySelector(".profile-main-card");

if (profilePage) {

    const profileName =
        profilePage.querySelector(".profile-name");

    if (profileName) {
        profileName.textContent = student.name;
    }

    const profileAvatar =
        profilePage.querySelector(".profile-avatar");

    if (profileAvatar) {
        profileAvatar.textContent = student.name.charAt(0).toUpperCase();
    }

}


/* =========================================
   LOGOUT FUNCTION
========================================= */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function() {

        localStorage.removeItem("isLoggedIn");

        window.location.replace("index.html");

    });

}