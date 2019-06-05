import React from "react";
import PropType from "prop-types";

function converttoJ(array) {
	let todos = [];
	for (let i = 0; i <= array.length - 1; i++) {
		todos.push({ label: array[i], done: false });
	}
	return todos;
}

function convertToA(todos) {
	let array = [];
	for (let i = 0; i <= todos.length - 1; i++) {
		array.push(todos[i].label);
	}
	return array;
}

class ListTask extends React.Component {
	constructor() {
		super();
		this.state = {
			arraytask: [],
			text: ""
		};
		this.createtask = this.createtask.bind(this);
		this.addtoarraytask = this.addtoarraytask.bind(this);
		this.deltask = this.deltask.bind(this);
	}

	// agrega nueva tarea a la lista

	addtoarraytask(event) {
		if (event.which == 13 && event.target.value !== "") {
			let array = this.state.arraytask;
			let value = array.find(task => {
				return task == this.state.text;
			});
			if (value == undefined) {
				array.push(this.state.text);
				this.setState({
					arraytask: array
				});
			}

			event.target.value = "";

			let todos = converttoJ(array);
		}
	}

	// registra ingreso de tarea

	createtask(event) {
		this.setState({ text: event.target.value });
	}

	deltask(event) {
		let array = this.state.arraytask;
		let i = event.target.value;
		array.splice(i, 1);
		this.setState({
			arraytask: array
		});
		console.log(this.state.arraytask);
	}

	//PUT array

	// Dibuja casilla de ingreso

	render() {
		//GET

		let arrayhtml = [];

		let array = this.state.arraytask;

		if (array[0] !== null) {
			for (let i = 0; i <= array.length - 1; i++) {
				arrayhtml.push(
					<div className="alert alert-dark fade show m-0 text-left">
						<button
							type="button"
							className="close"
							onClick={this.deltask}
							value={i}>
							&times;
						</button>
						{array[i]}
					</div>
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
				<div>{arrayhtml}</div>
				<div className="alert alert-dark fade show m-0 text-left">
					<button type="button" className="close">
						<i className="fas fa-trash-alt" />
					</button>
					Delete all Tasks
				</div>
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
							<ListTask />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
