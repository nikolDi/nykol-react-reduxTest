import React from "react";
import "../assets/styles/formats.scss";
import { Typography } from "antd";
import { NATIONALITIES } from "constants/nationalities";

const { Text } = Typography;

export const addressFormat = (address) => (
	<Text ellipsis={true}>
		<span className={"address__block"}>
			<span className={"address__block-country"}>/{address[0]}/</span>
			<span>
				{`${address[1]}
                        ${address[2]}
                        ${address[3]}
                        ${address[4]}`}
			</span>
		</span>
	</Text>
);

export const usDateFormat = (date) => {
	const config = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
 	return date.toLocaleDateString("en-US", config)
}

export const normalizingUserData = (data) =>
	data.map((user, index) => {
		const {
			login,
			gender,
			dob,
			picture,
			name,
			email,
			phone,
			location,
			nat,
		} = user;
		return {
			index: index,
			id: login.uuid,
			gender: gender,
			age: dob.age,
			avatar: picture.thumbnail,
			largePhoto: picture.large,
			namePrefix: Object.values(name).filter((name, key) => key === 0),
			fullName: Object.values(name)
				.filter((name, key) => key !== 0)
				.join(" "),
			birthday: usDateFormat(new Date(dob.date)),
			email: email,
			phone: phone,
			location: [
				location.country,
				location.street.number,
				location.street.name,
				location.city,
				location.state,
				location.postcode,
			],
			nationality: Object.entries(NATIONALITIES).find( el => el[0] === nat )[1],
		};
	});

	export const currentNationalities = (data) => [...new Set(data.map( el => el.nationality.name) )].sort()