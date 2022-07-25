import React from 'react';

// type ProfileStatusPropsType = {
//     status: string
// }

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode:false
    }

    activateEditMode(){
        this.setState({
            editMode:true
        })                             // асинхронная операция
        // this.state.editMode = true;
        // this.forceUpdate();
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status}/>
                        <button onClick={this.deactivateEditMode.bind(this)}>Save status</button>
                    </div>
                }

            </div>
        );
    }
}

export default ProfileStatus;