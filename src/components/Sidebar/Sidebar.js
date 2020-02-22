import React, { Component } from 'react'
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";


const routes = ["LOGI", "LAND", "TAB"];

class Sidebar extends Component {
    render() {
        return (
            <Container>
                <Content style={{ position: 'relative'}}>
                    <Image
                        source={ require("../../assets/images/profbg1.jpg") }
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center",                            
                        }} />
                    <Image
                        square
                        style={{ height: 80, width: 70, position: 'absolute', top: '5%', left: 9 }}
                        source={ require("../../assets/images/benz.png")   }
                    />


                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                key={data}
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}


export default Sidebar;