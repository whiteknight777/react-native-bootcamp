import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colors, Headline } from "react-native-paper";

// Add a `NetworkProvider
// import { NetworkProvider } from 'react-native-offline';

interface Props {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
}

export const AppLayout = ({ title, children, withFooter = false }: Props) => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <Headline style={styles.headerText}>{title}</Headline>

      {children}
      {withFooter && <View style={styles.footer} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: Colors.grey200,
    marginTop: 36,
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  footer: {
    paddingBottom: 256,
  },
});
