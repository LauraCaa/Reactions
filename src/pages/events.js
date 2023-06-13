import Click from "@/components/events/click"
import Change from "@/components/events/change"
import Submit from "@/components/events/submit"
import Select from "@/components/events/select"
export default function Events(){
    return(
        <>
            <h1>this is events</h1>
            <Click></Click>
            <Change></Change>
            <Submit></Submit>
            <Select></Select>
        </>
    )
}