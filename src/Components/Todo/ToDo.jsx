import React from "react";
class Todo extends React.Component{
    
    render() {
        return(
            <div>
                <h1>This is Todo Lists</h1>
                <div>
                    <div className='inputHolder'>
                        <input type="text" placeholder='Add some text'/>
                        <button className='btn'>Add Text</button>
                    </div>
                    <div className='textHolder d-flex'>

                    </div>
                </div>
            </div>
        )
    }
}
export default Todo