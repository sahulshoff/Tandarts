import React from "react";
import AppointmentListItem from "./AppointmentListItem";

const AppointmentList = () => {
	const { appointmentItems } = this.props;
	const appointments = appointmentItems.map(appointment => (
		<AppointmentListItem
			key={appointment.id}
			className="list-item"
			appointment={appointment}
		/>
	));

	return (
		<div className="uldiv">
			<ul className="ulList">{appointments}</ul>
		</div>
	);
};

export default AppointmentList;
