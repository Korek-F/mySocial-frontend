

export const getErrors = (e: any) => {
    console.log("ERROR", e)
    const data = e.response?.data
    if (e.response.data?.detail === "Authentication credentials were not provided.") {
        console.log("ERR")
        return "Authentication failed. Please login again"
    }
    if (e.response.data?.detail === "Given token not valid for any token type"
        || e.response.data?.detail === "User not found") {

        localStorage.removeItem("access")
    }
    let response = ""
    if (data) {
        data.username && (response += (" USERNAME: " + data.username.join("")))
        data.password && (response += (" PASSWORD: " + data.password.join("")))
        data.email && (response += (" EMAIL: " + data.email.join("")))
        data.detail && (response += data.detail)
    }
    if (typeof data === "string") {
        response = data
    }
    return response
}