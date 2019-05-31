import React from "react";
import PropType from "prop-types";

class Listask extends React.Component {
	constructor() {
		super();
		this.state = {
			arraytask: [],
			text: ""
		};
		this.createtask = this.createtask.bind(this);
		this.addtoarraytask = this.addtoarraytask.bind(this);
	}

	addtoarraytask(event) {
		if (event.which == 13) {
			let array = this.state.arraytask;
			array.push(event.target.value);
			this.setState({
				arraytask: array
			});
		}
	}

	createtask(event) {
		this.setState({ text: event.target.value });
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<input
					onKeyPress={this.addtoarraytask}
					className="form-control form-control-lg"
					type="text"
					placeholder="New task"
					onChange={this.createtask}
				/>
				<div>{this.state.arraytask}</div>
			</div>
		);
	}
}

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col col-lg-6">
						<div className="text-center mt-5">
							<Listask />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

let text = "";
