import React from "react";

const AppointmentListItem = ({ appointment }) => {
	console.log(appointment);
	return (
		<li key={appointment.id} className="list-item">
			{appointment.day} {appointment.time}
		</li>
	);
};

export default AppointmentListItem;
