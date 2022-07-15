

export const getNotificationText = (from_user: string, type: string) => {
    switch (type) {
        case "C":
            return `${from_user} commented your Post!`
        case "L":
            return `${from_user} liked your Post!`
        case "F":
            return `${from_user} is now following you!`
        case "LC":
            return `${from_user} liked your comment!`
        case "CR":
            return `${from_user} responsed you!`
    }
}