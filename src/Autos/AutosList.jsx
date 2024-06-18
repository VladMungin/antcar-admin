import { List, TextField } from 'react-admin'
const AutosList = () => {
	return (
		<List>
			<TextField source='name'/>
			<TextField source='year'/>
			<TextField source='milage'/>
			<TextField source='firstRegData'/>
			<TextField source='fuelType'/>
			<TextField source='enginePower'/>
		</List>
	)
}

export default AutosList
