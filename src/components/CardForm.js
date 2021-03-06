import React from 'react'
import {connect} from 'react-redux'
import {postData} from "../redux/actions";
import '../css/CardForm.css'


class CardForm extends React.Component {
    constructor(props) {
        super(props)

        this.repository = props.repository;

        this.state = {
            repository: '',
            command: '',
            branch: '',
            syncTime: 1
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {repository, command, branch, syncTime} = this.state;

        if (!(repository.trim() && command.trim() && branch.trim())) {
            alert("Not all fields are entered");
            return;
        }

        if (!this.repository.exitsRepository(repository)) {
            alert("Repository not exits");
            return;
        }

        this.props.postData({
            repository: repository,
            command: command,
            branch: branch,
            syncTime: syncTime
        })

    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    render() {
        return (
            <>
                <b>Settings</b>
                <p>Configure repository connection and synchronization settings.</p>

                <form onSubmit={this.submitHandler}>

                    <div className="field">

                        <div className="field-text">
                            <label className="field-label">GitHub repository</label>
                            <span className="redStar">*</span>
                        </div>

                        <input
                            type="text"
                            id="repository"
                            name="repository"
                            value={this.state.repository}
                            onChange={this.changeInputHandler}
                            placeholder="user-name/repo-name"/>
                    </div>

                    <div className="field">
                        <div className="field-text">
                            <label className="field-label">Build command</label>
                            <span className="redStar">*</span>
                        </div>
                        <input
                            type="text"
                            id="command"
                            name="command"
                            value={this.state.command}
                            onChange={this.changeInputHandler}
                            placeholder="enter command"/>
                    </div>

                    <div className="field">
                        <label className="field-label">Main branch</label>
                        <input
                            type="text"
                            id="branch"
                            name="branch"
                            value={this.state.branch}
                            onChange={this.changeInputHandler}
                            placeholder="enter branch"/>
                    </div>

                    <p style={{marginTop: -2, marginBottom: 24}}>
                        Synchronize every
                        <input
                            type="text"
                            id="syncTime"
                            name="syncTime"
                            className="syncInputTime"
                            value={this.state.syncTime}
                            onChange={this.changeInputHandler}
                            placeholder="1"/>
                        minutes
                    </p>

                    <div className="form-buttons">
                        <button className="btn btn-gold" type="submit">Save</button>
                        <button className="btn btn-grey" type="submit">Cancel</button>
                    </div>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = { postData }
export default connect(null, mapDispatchToProps)(CardForm);