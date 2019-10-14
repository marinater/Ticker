import React from 'react'
import { SafeAreaView, View, ScrollView, Text, StyleSheet, Animated } from 'react-native'

export default class TileFlipper extends React.Component {
	state={ angle: 45 }

	render(){

		return (
			<Animated.View style={styles.root}>
				<View style={{
					flex:1,
					backgroundColor:'#333333',
					transform: [
						{ rotateX: this.state.angle + 'deg' }
					]
				}}/>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	root:{
		height: 100,
	}
})