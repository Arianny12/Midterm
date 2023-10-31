"use-client"
 

const BreedType = ({breed}) => {
    switch(breed){
        case "husky":
            return <h1>Let the husky tell you a joke</h1>;
        case "samoyed":
            return <h1>Let the samoyed tell you a joke</h1>;
        case "appenzeller":
            return <h1>Let the appenzeller tell you a joke</h1>;
        case "eskimo":
            return <h1>Let the eskimo tell you a joke</h1>;
        default:
            return <h1>Let the dog tell you a joke</h1>;
    }
    return <div></div>
}
export default BreedType;