const BOT_TOKEN = "8822554567:AAEnXVWhSgSwy8NHNMbbU8CkehflBQBgKL0";
const CHAT_ID = "5613942414";

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


const form = document.getElementById("demoForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const telegramMessage =
            "📋 DEMO TEST\n\n" +
            "Website form submission received.";

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
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

            console.log("Telegram response:", result);

            if (result.ok) {
                alert("Telegram message sent!");
            } else {
                alert("Telegram rejected the request.");
                console.error(result);
            }

        } catch (error) {
            console.error("Telegram request failed:", error);
            alert("Telegram request failed. Check Console.");
        }
    });
