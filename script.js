document.addEventListener("DOMContentLoaded", function () {
    const deadlines = [
        { title: "Foundations of Business Communication II", subtitle: "Module 4 CLA", deadline: "2025-03-19T23:59:59", link: "https://example.com/business-comm" },
        { title: "Principles of Microeconomics", subtitle: "Module 4 CLA", deadline: "2025-03-19T23:59:59", link: "https://example.com/microeconomics" },
        { title: "Venturing on a Budget: Rs250 Venture", subtitle: "Module 3 CLA", deadline: "2025-03-19T23:59:59", link: "https://example.com/venture" },
        { title: "Advanced Statistics for Business", subtitle: "Mid-Term 2", deadline: "2025-03-26T23:59:59", link: "https://example.com/statistics" }
    ];

    const sessions = [
        { title: "Learning Pods", subtitle: "Briefing Meet", date: "March 19, 2025", time: "4:00 PM IST", link: "https://example.com/learning-pods", available: true },
        { title: "Venturing on a Budget: Rs250 Venture", subtitle: "Faculty Live Session", date: "March 20, 2025", time: "TBA", link: "#", available: false },
        { title: "Foundations of Business Communication II", subtitle: "SME Live Session", date: "March 21, 2025", time: "5:00 PM IST", link: "#", available: false }
    ];

    function updateCountdowns() {
        const now = new Date().getTime();
        let deadlineHTML = "";

        deadlines.forEach((item) => {
            const deadlineTime = new Date(item.deadline).getTime();
            const timeLeft = deadlineTime - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            deadlineHTML += `
                <div class="card" onclick="window.location.href='${item.link}'">
                    <h3>${item.title}</h3>
                    <p>${item.subtitle}</p>
                    <p class="timer">${days}d ${hours}h ${minutes}m ${seconds}s</p>
                </div>
            `;
        });

        document.getElementById("deadlines").innerHTML = deadlineHTML;
    }

    function loadSessions() {
        let sessionHTML = "";

        sessions.forEach((session) => {
            sessionHTML += `
                <div class="card" onclick="window.location.href='${session.link}'">
                    <h3>${session.title}</h3>
                    <p>${session.subtitle}</p>
                    <p>${session.date} - ${session.time}</p>
                    <a href="${session.link}" class="button ${session.available ? "join" : "disabled"}">
                        ${session.available ? "JOIN SESSION" : "LINK NOT AVAILABLE"}
                    </a>
                </div>
            `;
        });

        document.getElementById("sessions").innerHTML = sessionHTML;
    }

    setInterval(updateCountdowns, 1000);
    updateCountdowns();
    loadSessions();
});
