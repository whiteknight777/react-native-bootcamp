import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

interface Starships {
  name: string;
  model: string;
  crew: string;
  hyperdriveRating: string;
  costInCredits: string;
}

export const Starships = ({
  name,
  model,
  crew,
  hyperdriveRating,
  costInCredits,
}: Starships) => (
  <View>
    <Card elevation={3} style={styles.card}>
      {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
      <Card.Content>
        <Title style={styles.title}>{name}</Title>
        <Paragraph style={styles.paragraph}>{model}</Paragraph>
        <Paragraph style={styles.paragraph}>{crew}</Paragraph>
        <Paragraph style={styles.paragraph}>{hyperdriveRating}</Paragraph>
        <Paragraph style={[styles.credit, styles.bold]}>
          {costInCredits} Credits
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Buy this spaceship</Button>
      </Card.Actions>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
  },
  paragraph: {
    fontSize: 12,
  },
  credit: {
    fontSize: 14,
  },
  bold: {
    fontWeight: "700",
  },
});
