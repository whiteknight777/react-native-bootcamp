import React from "react";
import { SafeAreaView , StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import { Headline } from 'react-native-paper';
import Starships from "../components/Starships"
import { data } from "../../data";

const App = () => {
    const renderItem = ({ item }: {item : any}) => {
        const {name, model, crew, hyperdrive_rating, cost_in_credits } = item;
        return (
            <Starships
                name={name}
                model={model}
                crew={crew}
                hyperdrive_rating={hyperdrive_rating}
                cost_in_credits={cost_in_credits}
            />
        )
    };
    return (
        <>
            <SafeAreaView  style={styles.safeContainer} >
                <Headline style={styles.headline}>Starships</Headline>
                <FlatList
                    data={data.results}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                />
            </SafeAreaView >
        </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 20,
  },
    headline: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});

export default App;