import React from "react";

class Newtask extends React.Component {
	constructor() {
		super();
		this.state = { arraytask: [] };
	}

	adtoarray(event) {
		if (event.keyCode == 13) {
			this.state.arraytask.push(this.state.task);
		}
	}

	render() {
		return (
			<input
				onKeypress={this.adtoarray}
				className="form-control form-control-lg"
				type="text"
				placeholder="New task"
				value={this.state.task}
			/>
		);
	}
}

class Arraytask extends React.Component {
	render() {
		return <div />;
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
							<Arraytask />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

let arraytask = [];
