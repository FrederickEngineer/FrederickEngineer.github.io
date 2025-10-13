document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById("status");

    if (form.website.value) {
      status.textContent = "スパムの可能性があります。";
      return;
    }

    const token = await grecaptcha.execute(
      "6Le5d-grAAAAAGVOBeM0Q-zx2ldaqoln1rydUCDl",
      {
        action: "submit",
      }
    );

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      token,
    };

    status.textContent = "送信中...";

    const res = await fetch("api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    status.textContent = result.success ? "送信成功！" : "送信失敗。";
  });
