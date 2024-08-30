// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from "react-native-reanimated";
// import {
//   PanGestureHandler,
//   GestureHandlerRootView,
// } from "react-native-gesture-handler";

// const NotificationCard = ({ message }) => {
//   const translateY = useSharedValue(0);

//   // Define the gesture handler
//   const onGestureEvent = Animated.event(
//     [{ nativeEvent: { translationY: translateY } }],
//     { useNativeDriver: true }
//   );

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateY: withSpring(translateY.value) }],
//   }));

//   return (
//     <GestureHandlerRootView>
//       <PanGestureHandler onGestureEvent={onGestureEvent}>
//         <Animated.View style={[styles.card, animatedStyle]}>
//           <Text>{message}</Text>
//         </Animated.View>
//       </PanGestureHandler>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 8,
//     elevation: 5,
//   },
// });

// export default NotificationCard;
