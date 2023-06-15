export default function Bio ({
    image ='https://placehold.co/100x100?text=.', 
    size = '50', 
    name ='Anonymous', 
    country ='unknown', 
    description ='no bio available'
}){
    return(
        <div style={{border: "1px solid black"}}>
            <p>{name}</p>
            <p>{country}</p>
            <img src={image} width={size}/>
            <p>{description}</p>
        </div>
    )
}