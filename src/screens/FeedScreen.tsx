import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";
import { Headline } from "react-native-paper";

import { Starships } from "../components/Starships";
import { LoadingBox } from "../components/LoadingBox";
import { ErrorBox } from "../components/ErrorBox";
import { UseStarships } from "../Hooks/useStarships";
// import { data } from "../../data";

interface Item {
  name: string;
  model: string;
  crew: string;
  hyperdriveRating: string;
  costInCredits: string;
}

export const FeedScreen = () => {
  const { isLoading, isError, data } = UseStarships();

  if (isLoading) {
    return <LoadingBox />;
  }
  if (isError) {
    return <ErrorBox />;
  }

  const renderItem = ({ item }: { item: Item }) => {
    const { name, model, crew, hyperdriveRating, costInCredits } = item;
    return (
      <Starships
        name={name}
        model={model}
        crew={crew}
        hyperdriveRating={hyperdriveRating}
        costInCredits={costInCredits}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        <Headline style={styles.headline}>Starships</Headline>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // paddingHorizontal: 20,
  },
  headline: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
