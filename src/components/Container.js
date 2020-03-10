import React, { Component } from "react";
import { render } from "@testing-library/react";
import PatientData from "./Data/PatientData";
import DentistsData from "./Data/DentistsData";
import AssistentsData from "./Data/AssistentsData";
import AppointmentsData from "./Data/AppointmentsData";
import AppointmentList from "./AppointmentList";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			dentists: DentistsData,
			assistents: AssistentsData,
			patients: PatientData,
			appointments: AppointmentsData
		};
	}

	// createCalendarView = () => {
	// 	const days = [];

	// 	for (let i = 1; i < 28; i++) {
	// 		if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
	// 			continue;
	// 		}
	// 		days.push(createDayOnCalendar(5));
	// 	}
	// };

	render() {
		console.log(this.state);
		return (
			<div className="calendarview">
				<div className="header">
					<div>Maandag</div>
					<div>Dinsdag</div>
					<div>Woensdag</div>
					<div>Donderdag</div>
					<div>Vrijdag</div>
				</div>
				<div className="table">
					<AppointmentList
						patients={this.state.patients}
						appointmentItems={this.state.appointments}
					/>
				</div>
			</div>
		);
	}
}

export default Container;
