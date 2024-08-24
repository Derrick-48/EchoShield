import { Stack } from "expo-router";

const  InLayout = () => { 
    return ( 
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown : false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown : false }} />
        </Stack>
    );

};

export default  InLayout;

