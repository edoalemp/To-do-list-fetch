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
		this.addtask = this.addtask.bind(this);
		this.deltask = this.deltask.bind(this);
		this.deletealltask = this.deletealltask.bind(this);
	}

	// agrega nueva tarea a la lista

	addtask(event) {
		if (event.which == 13 && event.target.value !== "") {
			let array = this.state.arraytask;
			let value = array.find(task => {
				return task == this.state.text;
			});
			if (value === undefined) {
				array.push(this.state.text);
				//let todos = converttoJ(array);
				this.fetchput(converttoJ(array), event);
				//this.fetchget();
			}
			event.target.value = "";
		}
	}

	// registra ingreso de tarea

	createtask(event) {
		this.setState({ text: event.target.value });
	}

	deltask(event) {
		let array = this.state.arraytask;
		array.splice(event.target.value, 1);
		console.log(array);
		this.fetchput(converttoJ(array));
		//this.fetchget();
	}

	deletealltask() {
		this.fetchput(converttoJ([]));
		//this.fetchget();
	}

	createlisttask() {
		let arrayhtml = [];
		let array = this.state.arraytask;
		if (array[0] !== null) {
			for (let i = 0; i <= array.length - 1; i++) {
				arrayhtml.push(
					<div
						key={i}
						className="alert alert-dark fade show m-0 text-left">
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
		return arrayhtml;
	}

	fetchget() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log("GET");
				console.log(data);
				if (
					data.msg ===
						"This use does not exists, first call the POST method first to create the list for this username" ||
					data.msg === "Ther json file alesanchezr was not found"
				) {
					this.fetchpost();
				} else {
					let array = convertToA(data);
					this.setState({
						arraytask: array
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	fetchput(todos) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log("PUT");
				console.log(data);
				this.fetchget();
			})
			.catch(error => {
				console.log(error);
			});
	}

	fetchpost() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "POST",
			body: "[]",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log("POST");
				console.log(data);
				this.fetchget();
			})
			.catch(error => {
				console.log(error);
			});
	}

	fetchdelete() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log("DELETE");
				console.log(data);
				this.fetchpost();
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		let arrayhtml = this.createlisttask();
		return (
			<div>
				<input
					onKeyPress={this.addtask}
					className="form-control form-control-lg"
					type="text"
					placeholder="New task"
					onChange={this.createtask}
				/>
				<div>{arrayhtml}</div>
				<div className="alert alert-dark fade show m-0 text-left">
					<button type="button" className="close">
						<i
							className="fas fa-trash-alt"
							onClick={this.deletealltask}
						/>
					</button>
					Delete all Tasks
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.fetchget();
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
