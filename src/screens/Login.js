import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';
import Container from '../components/Container';
import Label from '../components/Label';

export default class Login extends Component {

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='Username' />
                <TextInput placeholder='Password' />
                <View style={{margin:7}} />
                <Button 
                    onPress={this.props.onLoginPress}
                    title="Submit"
                />
                <Container>
                    <Button 
                        label="Forgot Login/Pass"
                        styles={{button: styles.alignRight, label: styles.label}} 
                        />
                </Container>
                <Container>
                    <Label text="Username or Email" />
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
        alignRight: {
        alignSelf: 'flex-end'
    },
});