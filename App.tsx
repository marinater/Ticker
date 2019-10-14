import React from 'react'
import { SafeAreaView, View, ScrollView, Text, Animated } from 'react-native'

import styles from './Styles'
// import TileFlipper from './Components/TileFlipper';

export default function App() {
	const hRotation = new Animated.Value(0)
	const mappedHRotation = hRotation.interpolate({
		inputRange: [0, 400],
		outputRange: ['0deg', '360deg'],
	})

	const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: hRotation } } }], {useNativeDriver: true});

	return (
		<SafeAreaView style={ styles.safeArea }>
			<Animated.ScrollView
				style={ styles.mainScroller }
				stickyHeaderIndices={[1]}
				indicatorStyle='white'
				onScroll={onScroll}
			>
				<View style={ styles.bannerHeader }>
					<Text style={ styles.bannerHeaderText }> Browse </Text>
				</View>
				<View style={ styles.bannerSticky }>
					<Animated.View style={{
						height: 80,
						width: 80,
						backgroundColor: 'white',
						transform: [{ rotateX: mappedHRotation }]
					}}/>
				</View>
				<View style={ styles.tileContainer }>
					<View style={ styles.tileHeader }/>
					<View style={ styles.tile }/>
					<View style={ styles.tile }/>
					<View style={ styles.tile }/>
					<View style={ styles.tile }/>
				</View>
			</Animated.ScrollView>
			<View style={ styles.footer }>
			
			</View>
		</SafeAreaView>
	);
}