import React, { Component } from 'react';
import { Keybord, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';

import { 
  Container, Form, Input, SubmitButton, List, User, Avatar, Name, Bio,
  ProfileButton, ProfileButtonText
} from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false,
    notFound: false, 
  };

  handleAddUser = async () => {
      const { users, newUser } = this.state;

      this.setState({loading: true})

      try{
        const response = await axios.get(`https://api.github.com/users/${newUser}`)

        const data = {
          name: response.data.name, 
          login: response.data.login,
          bio: response.data.bio, 
          avatar: response.data.avatar_url
        };


        this.setState({
          users: [...users, data],
          newUser: '',
          loading: false, 
        })

      }catch(err)
      {
        this.setState({
          loading: false,
        })
      }
  
  };

  handleNavigate = (user) => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  }
  
  render()
  {
    const { users, newUser, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            { loading ? 
              <ActivityIndicator color="FFF" /> : 
              <Icon name="add" size={20} color="#FFF"/>
            }
          </SubmitButton>
        </Form>

        <List 
          data={users}
          keyExtracotr={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name> {item.name} </Name>
              <Bio> {item.bio} </Bio>

              <ProfileButton onPress={() => this.handleNavigate(item)}> 
                <ProfileButtonText> Ver perfil </ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container> 
    );
  };
}

Main.navigationOptions = {
  title: 'Usuários'
};