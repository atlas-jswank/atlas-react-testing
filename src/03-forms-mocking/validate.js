export function validateEmail(email) {
    if (email === "") {
        return "Email is required";
    }
    if (email.indexOf("@") === -1) {
        return "Email is invalid";
    }
    return "";
}

export function validatePassword(password) {
    if (password === "") {
        return "Password is required";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }
    return "";
}