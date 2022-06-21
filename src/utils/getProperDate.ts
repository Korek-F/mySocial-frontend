
import { PostInterface } from "../redux/actionTypes/PostTypes"

type LocalProps = {
    created: string,
}

export const getProperDate = ({ created }: LocalProps) => {
    let date = new Date(created).getTime() / 1000
    let now = new Date().getTime() / 1000
    let time = (now - date) / 60
    if (time > 60 * 24) {
        //older than a day
        if (time < 60 * 24 * 7) {
            return `${Math.floor(time / (60 * 24))} days ago`
        } else {
            return `More than a week ago`
        }
    } else {
        if (time > 60) {
            return `${Math.floor(time / 60)} hours ago`

        } else if (time < 1) {
            return `Now`
        }
        else {
            return `${Math.floor(time)} minutes ago`
        }
    }

}