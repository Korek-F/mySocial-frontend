

export const getErrors = (e: any) => {
    console.log("ERROR", e)
    const data = e.response.data
    if (e.response.data.detail === "Authentication credentials were not provided.") {
        console.log("ERR")
        return "Authentication failed. Please login again"
    }
    let response = ""
    data.username && (response += (" USERNAME: " + data.username.join("")))
    data.password && (response += (" PASSWORD: " + data.password.join("")))
    data.email && (response += (" EMAIL: " + data.email.join("")))
    data.detail && (response += data.detail)
    if (typeof data === "string") {
        response = data
    }
    return response
}