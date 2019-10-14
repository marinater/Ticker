import { StyleSheet, StatusBar, Platform } from 'react-native';

let accentColor = '#21ce98'
let borderRadius = 2
let bgColor = (num) => '#' + ( 13 * num ).toString(16).padStart(2,'0').repeat(3)

export default StyleSheet.create({
	safeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: accentColor
	},
	mainScroller: {
		flex: 1,
		backgroundColor: accentColor,
	},
	bannerHeader: {
		flex: 1,
		justifyContent: 'flex-end',
		height: 100,
		backgroundColor: accentColor,
	},
	bannerHeaderText: {
		paddingStart: 20,
		fontSize: 40,
		fontWeight: '600',
		color: 'white',
	},
	bannerSticky: {
		padding: 20,
		backgroundColor: accentColor,
	},
	bannerSearchBar: {
		flex:1,
		justifyContent: 'center',
		height: 60,
		backgroundColor: bgColor(4),
		borderRadius
	},
	bannerSearchBarText: {
		paddingStart: 20,
		fontSize: 25,
		fontWeight: '300',
		color: 'white',
	},
	tileContainer: {
		backgroundColor: bgColor(1)
	},
	tileHeader: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		backgroundColor: accentColor,
		height: 60,
	},
	tile: {
		margin: 10,
		marginTop: 0,
		height: 400,
		backgroundColor: bgColor(3),
		borderRadius,
	},
	footer: {
		height: 100,
		backgroundColor: bgColor(2)
	},
});
