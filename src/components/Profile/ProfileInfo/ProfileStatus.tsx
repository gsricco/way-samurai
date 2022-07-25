import React from 'react';
import s from "../Profile.module.css";

type ProfileStatusPropsType = {
    status: string
    updateStatusThunkCreator: (status: string) => void
}

type ProfileStateProps = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStateProps> {
    // statusInputRef=React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })                             // асинхронная операция
        // this.state.editMode = true;
        // this.forceUpdate();
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunkCreator(this.state.status)
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                        <button className={s.saveButton} onClick={this.deactivateEditMode}>Save status</button>
                        {/*<input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status}/>
                        <button onClick={this.deactivateEditMode.bind(this)}>Save status</button>
                        */}
                    </div>
                }

            </div>
        );
    }
}

export default ProfileStatus;