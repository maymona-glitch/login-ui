document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
        alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
        return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    alert("تم تسجيل الدخول بنجاح");
});

document.querySelector(".google-btn").addEventListener("click", function () {

});