interface PropType{
    placeholder : string,
    // onChange : (e:any)=>void
}
export function TextInput ({placeholder} : PropType){
    return (
        <input style={{
            padding : 10,
            margin : 10,
            borderColor : "black",
            borderWidth : 1
        }}
        type="text" placeholder={placeholder}/>
    )
}