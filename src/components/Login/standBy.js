import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Button,
    Text,
    Body, Left, Right,
    Card, CardItem,
    Thumbnail,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
} from 'react-native-popup-menu';

const { SlideInMenu } = renderers;


import { LoadingComponent } from '../../utils/LoadingComponent';
import { AlertModal } from '../../utils/Modals/AlertModal';
import { SettingsModal } from './SettingsModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconEnty from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMatCommu from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { SliderBox } from "react-native-image-slider-box";


const styles = StyleSheet.create({
    gracefulCurve: {
        borderWidth: 1,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 20,
        borderBottomColor: '#000',
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: '#272221',
        paddingTop: 15,
    },
    trigger: {
        padding: 5,
        margin: 5,
    },
    triggerText: {
        color: 'white',
    },
    disabled: {
        color: '#ccc',
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logView: {
        flex: 1,
        flexDirection: 'column',
    },
    logItem: {
        flexDirection: 'row',
        padding: 8,
    },
    slideInOption: {
        padding: 5,
    },
    text: {
        fontSize: 18,
    },
});



class standBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show_settings_modal: false,
            API_ADDRESS: '',
            loading: false,
            modal_Alert_Show: false,
            images: [
                require('../../assets/images/Food/shishlique.jpg'),
                require('../../assets/images/profbg1.jpg'),
                require('../../assets/images/Food/shishlique.jpg'),
                require('../../assets/images/profbg1.jpg'),
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?girl",
            ]
        }
    }

    // context menu item selected
    selectOptionType = async (value) => {
        // alert(value);
        switch (value) {
            case 'IP':
                this.setState({
                    show_settings_modal: true,
                    API_ADDRESS: await getData('@API_BASEURL')
                });
                break;
            case 'UPGRADE':
                alert('upgrade clicked  ');
                break;
            case 'SETTING':
                alert('Setting');
                break;
            case 'EXIT':
                //alert('exit');
                BackHandler.exitApp();
                break;
        }
    }



    render() {
        return (
            <>
                <MenuProvider >
                    <View style={{
                        flex: 1,
                        flexDirection: 'column', backgroundColor: '#F00',
                    }}>

                        <View style={{ flexDirection: 'row', backgroundColor: '#272221', }}>
                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 18, color: '#EEE' }}>Header</Text>
                            </View>
                            <Menu name="types" onSelect={value => this.selectOptionType(value)}
                                onBackdropPress={() => console.log('menu will be closed by backdrop')}
                                onOpen={() => console.log('menu is opening')}
                                onClose={() => console.log('menu is closing')}
                            >
                                <MenuTrigger
                                    onAlternativeAction={() => console.log('trigger longpressed')}
                                    style={styles.trigger}>
                                    <Text style={[styles.text, styles.triggerText]}><IconEnty name='dots-three-vertical' color='#EEE' size={20} /></Text>
                                </MenuTrigger>
                                <MenuOptions customStyles={{ optionText: styles.text }}>
                                    <MenuOption value="IP"><Text> <IconMatCommu name='server-network' size={18} style={{ color: '#44F' }} /> Server IP</Text></MenuOption>
                                    <MenuOption value="UPGRADE"><Text> <IconMaterial name='system-update' size={18} style={{ color: '#44F' }} /> upgrade version</Text></MenuOption>
                                    <MenuOption value="SETTING" disabled={true} ><Text style={{ color: '#AAA' }}><Ionicons name='ios-settings' size={20} style={{ color: '#AAA' }} /> Settings</Text></MenuOption>
                                    <View style={styles.divider} />
                                    {/* <MenuOption value={{ text: 'Hello world!' }} text='Object as value' /> */}
                                    <MenuOption value="EXIT" ><Text><IconAnt name='logout' size={18} style={{ color: '#44F' }} /> Exit</Text></MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>


                        {/* <View>
                            <SliderBox
                                images={this.state.images}
                                sliderBoxHeight={400}
                                dotColor="#FFEE58"
                                inactiveDotColor="#90A4AE"
                                onCurrentImagePressed={index =>
                                    //console.warn(`image ${index} pressed`)
                                    alert(`image ${index} pressed`)
                                }
                                // dotStyle={{
                                //     width: 15,
                                //     height: 15,
                                //     borderRadius: 15,
                                //     marginHorizontal: 10,
                                //     padding: 0,
                                //     margin: 0
                                // }}
                                //parentWidth={this.state.width}
                                paginationBoxVerticalPadding={20}
                                autoplay
                                circleLoop
                                resizeMethod={'resize'}
                                resizeMode={'cover'}
                                ImageComponentStyle={{
                                    borderRadius: 15,
                                    width: '97%',
                                    // height: 100,
                                    marginTop: 5
                                }}
                                imageLoadingColor="#2196F3"
                                paginationBoxStyle={{
                                    alignItems: "center",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    paddingVertical: 10,
                                    // zIndex: 1000,
                                    // elevation: 10
                                }}
                            />
                        </View> */}

                        <View style={{ flex: 1, backgroundColor: '#DDD', position: 'absolute', top: 0 }}>
                            <View style={{zIndex: 5}}> 
                                <SliderBox
                                    images={this.state.images}
                                    sliderBoxHeight={400}
                                    dotColor="#FFEE58"
                                    inactiveDotColor="#90A4AE"
                                    onCurrentImagePressed={index =>
                                        //console.warn(`image ${index} pressed`)
                                        alert(`image ${index} pressed`)
                                    }
                                    // dotStyle={{
                                    //     width: 15,
                                    //     height: 15,
                                    //     borderRadius: 15,
                                    //     marginHorizontal: 10,
                                    //     padding: 0,
                                    //     margin: 0
                                    // }}
                                    //parentWidth={this.state.width}
                                    paginationBoxVerticalPadding={20}
                                    autoplay
                                    circleLoop
                                    resizeMethod={'resize'}
                                    resizeMode={'cover'}
                                    ImageComponentStyle={{
                                        borderRadius: 15,
                                        width: '97%',
                                        // height: 100,
                                        marginTop: 5
                                    }}
                                    imageLoadingColor="#2196F3"
                                    paginationBoxStyle={{
                                        alignItems: "center",
                                        alignSelf: "center",
                                        justifyContent: "center",
                                        paddingVertical: 10,
                                        // zIndex: 1000,
                                        // elevation: 10
                                    }}
                                />
                            </View>
                            <View style={{
                                height: '90%',
                                backgroundColor: '#55F',
                                marginTop: -300,
                                zIndex: 10
                            }}>
                                <View style={{
                                    // flex: 1,
                                    // backgroundColor: '#FFF',
                                    backgroundColor: 'rgba(255,0,0,0.5)', 
                                    borderBottomRightRadius: 450,
                                    // borderBottomWidth: 200, 
                                    // borderRightWidth: 400,
                                    // borderLeftWidth: 400,                                
                                    borderBottomLeftRadius: 450,
                                    height: '60%',
                                    marginBottom: '15%',
                                    // elevation: 100
                                    zIndex: 10000
                                }}>



                                </View>
                            </View>

                            <TouchableOpacity
                            //onPress={} // end onPress
                            >
                                <View style={{ backgroundColor: '#FFDA00', marginTop: 10, width: '100%', borderRadius: 10, padding: 10 }}>
                                    <Text style={{ color: '#000', textAlign: 'center', height: 30 }}> Menu</Text>
                                </View>
                            </TouchableOpacity>

                            <Button transparent style={{ marginTop: 10, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                            //onPress={}
                            >
                                <Text>Login as Garson</Text>
                            </Button>



                            <View style={{ height: 50, backgroundColor: '#d778f6', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                                {/* <Text>fixed content: FOOD ICON SLIDER</Text> */}
                            </View>



                        </View>
                    </View>










                    {this.state.loading &&
                        <LoadingComponent />
                    }
                    <AlertModal
                        modalVisible={this.state.modal_Alert_Show}
                        returnTXT='return'
                        bodyTXT='Your request faced Error'
                        logoType='ERROR'
                        logoTXT='ERROR'
                        btnReturnCallback={this.close_AlertModal_callback_btnReturn}
                        closeCallback={this.close_AlertModal_callback}
                    />
                    <SettingsModal
                        modalVisible={this.state.show_settings_modal}
                        placehold={this.state.API_ADDRESS}
                        headerTXT=''
                        yesTXT='OK'
                        noTXT='Cancel'
                        bodyTXT="Set the API's base address:"
                        logoType='WARNING'
                        btnYesCallback={this.close_settingsModal_callback_btnYes}
                        btnNoCallback={this.close_settingsModal_callback_btnNo}
                    />
                </MenuProvider>
            </>
        )
    }
}


export default standBy;
