import * as React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Details Screen</Text>
                <Text 
                style={{fontSize: 25 , fontWeight: 'italic'}}>VIDJIN ELODJI CORVAL</Text> 
        </View>
    );
}