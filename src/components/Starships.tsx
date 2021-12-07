import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';

interface Starships { name: string, model:string, crew:string, hyperdrive_rating:string, cost_in_credits:string,}


const Starships = ({ name, model, crew, hyperdrive_rating, cost_in_credits }: Starships) => (
    <View>
        <Card elevation={3} style={styles.card}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title style={styles.title}>{name}</Title>
                <Paragraph style={styles.paragraph}>{model}</Paragraph>
                <Paragraph style={styles.paragraph}>{crew}</Paragraph>
                <Paragraph style={styles.paragraph}>{hyperdrive_rating}</Paragraph>
                <Paragraph style={styles.paragraph}>{cost_in_credits}</Paragraph>
            </Card.Content>
        </Card>
    </View>
);

export default Starships;

const styles = StyleSheet.create({
  card: {
        marginTop: 20,
      marginHorizontal: 10
  },
  title: {
    fontSize: 14,
  },
  paragraph: {
    fontSize: 12,
  },
});