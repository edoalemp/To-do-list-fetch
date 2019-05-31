import React from "react";
import PropType from "prop-types";

class Newtask extends React.Component {
	constructor() {
		super();
		this.state = {
			arraytask: [],
			text: ""
		};
		this.createtask = this.createtask.bind(this);
		this.addtoarraytask = this.addtoarraytask.bind(this);
	}

	// agrega nueva tarea

	addtoarraytask(event) {
		if (event.which == 13 && event.target.value !== "") {
			let array = this.state.arraytask;
			array.push(this.state.text);
			this.setState({
				arraytask: array
			});
		}
	}

	// registra ingreso de tarea

	createtask(event) {
		this.setState({ text: event.target.value });
	}

	deltask() {}

	// Dibuja casilla de ingreso

	render() {
		let array = this.state.arraytask;
		let arrayhtml = [];
		console.log(array);
		if (array[0] !== null) {
			for (let i = 0; i <= array.length - 1; i++) {
				arrayhtml.push(
					<div className="alert alert-dark alert-dismissible fade show m-0">
						<button
							type="button"
							className="close"
							data-dismiss="alert">
							&times;
						</button>
						{array[i]}
					</div>

					/*				<div>
						<input
							className="form-control form-control-lg"
							type="text"
							placeholder=".form-control-lg"
							value={array[i]}
							disabled
						/>
					</div>*/
				);
			}
		}
		return (
			<div>
				<input
					onKeyPress={this.addtoarraytask}
					className="form-control form-control-lg"
					type="text"
					placeholder="New task"
					onChange={this.createtask}
				/>
				{arrayhtml}
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
