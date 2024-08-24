import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 ,  AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { View } from 'react-native';

const Layout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.grey,
          position: 'relative',
          bottom: 40,
          justifyContent: 'center',
          alignSelf: 'center',
          height: 63,
          marginHorizontal: 90,
          paddingHorizontal: 10,
          paddingVertical: 8,
          paddingBottom: 8,
          borderRadius: 50,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: '#333',
          borderTopColor: '#333',
          width : "60%",
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#F5B227',
        tabBarActiveTintColor: "white",
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex : 1,
                padding: 10,
                borderRadius: 30,
                backgroundColor: focused ? "#F5B227": Colors.grey,
              }}
            >
              <SimpleLineIcons name="disc" size={25} color={color} />
            </View>
          ),
       
        }}
      />
      <Tabs.Screen
        name="Aid"
        options={{
          tabBarLabel: 'Space-Aid',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex : 1,
                padding: 10,
                borderRadius: 30,
                backgroundColor: focused ? "#F5B227" : Colors.grey,
              }}
            >
              <AntDesign name="Safety" size={25} color={color} />
            </View>
          ),
       
        }}
      />
      <Tabs.Screen
        name="History"
        options={{
          tabBarLabel: 'Your History',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex : 1,
                padding: 10,
                borderRadius: 30,
                backgroundColor: focused ? "#F5B227" : Colors.grey,
              }}
            >
              <FontAwesome name="stack-overflow" size={25} color={color} />
            </View>
          ),
       
        }}
      />
      <Tabs.Screen
        name="Location"
        options={{
          tabBarLabel: 'Current Location',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                flex : 1,
                padding: 10,
                borderRadius: 30,
                backgroundColor: focused ? "#F5B227" : Colors.grey,
              }}
            >
              <FontAwesome name="map-o" size={25} color={color} />
            </View>
          ),
       
        }}
      />
      
    </Tabs>
  );
};

export default Layout;
