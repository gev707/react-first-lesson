import React from 'react';


class Show extends React.Component {
    state = {
        isOn : false
    }
    toggleSwitch = () => {
        this.setState({
            isOn:!this.state.isOn
        })
    };
    render() {
        return (
            <div >
                <div>
                    <div className={this.state.isOn ? 'btnHolder ':'btnHolder btn-light'}>
                    <button className={this.state.isOn ? 'ligth': 'dark'}
                    onClick={this.toggleSwitch}>
                    {this.state.isOn?'Switch On !':'Switch Off !'}
                    </button>
                
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Show;