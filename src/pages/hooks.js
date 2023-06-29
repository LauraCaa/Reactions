import States from "@/components/hooks/states"
import Effects from "@/components/hooks/effects"
import SimpleEffect from "@/components/hooks/simple-effect"
import Refs from "@/components/hooks/refs"
import RefDom from "@/components/hooks/ref-dom"
import Friends from "@/components/hooks/friends"
export default function Hooks(){
    return(
        <>
            <h3>Hooks!!</h3>
            <States></States>
            <Effects></Effects>
            <SimpleEffect></SimpleEffect>
            <Refs></Refs>
            <RefDom></RefDom>
            <Friends></Friends>
        </>
    )
}