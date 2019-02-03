import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Title, Header, Content, List, ListItem, Text , Left, Right, Button, Icon} from 'native-base';





export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (

        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text>A</Text>
              </ListItem>
              <ListItem>
                <Text>Aaron Bennet</Text>
              </ListItem>
              <ListItem>
                <Text>Ali Connors</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>B</Text>
              </ListItem>
              <ListItem>
                <Text>Bradley Horowitz</Text>
              </ListItem>
            </List>
          </Content>

        </Container>

    );



  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
