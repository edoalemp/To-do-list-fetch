import React from "react";
import PropType from "prop-types";

class Newtask extends React.Component {
	constructor() {
		super();
		this.state = {
			arraytask: [],
			text: ""
		};
	}

	addtoarray(event) {
		let array = this.arraytask;
		if (event.which == 13) {
			array.push(event.target.value);
			this.setState({ arraytask: array });
		}
	}

	render() {
		return (
			<div>
				<input
					onKeyPress={this.addtoarray}
					className="form-control form-control-lg"
					type="text"
					placeholder="New task"
					defaultValue={this.state.text}
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
							<Newtask />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

let text = "";
