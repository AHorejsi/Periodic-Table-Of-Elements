"use strict";

import React from "react";


class NumberRow extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<table>
				<tr>
					<td className="number numberRow bolded">1</td>
					<td className="number numberRow bolded">2</td>
					<td className="number numberRow bolded">3</td>
					<td className="number numberRow bolded">4</td>
					<td className="number numberRow bolded">5</td>
					<td className="number numberRow bolded">6</td>
					<td className="number numberRow bolded">7</td>
					<td className="number numberRow bolded">8</td>
					<td className="number numberRow bolded">9</td>
					<td className="number numberRow bolded">10</td>
					<td className="number numberRow bolded">11</td>
					<td className="number numberRow bolded">12</td>
					<td className="number numberRow bolded">13</td>
					<td className="number numberRow bolded">14</td>
					<td className="number numberRow bolded">15</td>
					<td className="number numberRow bolded">16</td>
					<td className="number numberRow bolded">17</td>
					<td className="number numberRow bolded">18</td>
				</tr>
			</table>
		);
	}
}

class NumberColumn extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<table>
				<tr>
					<td className="number numberColumn bolded">1</td>
				</tr>
				<tr>
					<td className="number numberColumn bolded">2</td>
				</tr>
				<tr>
					<td className="number numberColumn bolded">3</td>
				</tr>
				<tr>
					<td className="number numberColumn bolded">4</td>
				</tr>
				<tr>
					<td className="number numberColumn bolded">5</td>
				</tr>
				<tr>
					<td className="number numberColumn bolded">6</td>
				</tr>
				<tr>
					<td className="number numberColumn bolded">7</td>
				</tr>
			</table>
		);
	}
}

export {NumberRow, NumberColumn}
