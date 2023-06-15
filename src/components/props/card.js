export default function Card({image,name,country,size}){
    return(
        <div style={{border: "1px solid blue"}}>
            <img width={size} src={image}/>
            <p>{name}</p>
            <p>{country}</p>
        </div>
    )
}
// Image,
// Name,
// Country,