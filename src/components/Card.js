export default function Card(props){
    return(
        <div style={{width:300,borderStyle:"solid"}}>
            {props.children}
        </div>
    )
}