                               //Example 1
// function User(props) {
  
//     return(
//         <div>
//             <p>Name is - {props.anun} </p>
//             <p>Surname is - {props.azganun} </p>
//             <p>Age is - {props.age} </p>
//         </div>
//     )
// }

                        //example 2

// function User(props) {

//     const name = props.anun;
//     const surname = props.azganun
//     const age = props.age
//     return(
//         <div>
//             <p>Name is - {name} </p>
//             <p>Surname is - {surname} </p>
//             <p>Age is - {age} </p>
//         </div>
//     )
// }


                      //example 3


// function User(props) {
//     const {anun,azganun, age} = props
//     return(
//         <div>
//             <p>Name is - {anun} </p>
//             <p>Surname is - {azganun} </p>
//             <p>Age is - {age} </p>
//         </div>
//     )
// }
                         // example 4
function User({anun,azganun,age}) {
    return(
        <div className='br-2'>
            <h2>This is User Component</h2>
            <p>Name is - {anun} </p>
            <p>Surname is - {azganun} </p>
            <p>Age is - {age} </p>
        </div>
    )
}
export default User