import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { View } from 'native-base';
// @ts-ignore
import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/Ionicons';
import Collapsible from 'react-native-collapsible';


const CategoryScreen = ({ ...props }) => (
    <View style={styles.bg_primary}>
        <View style={styles.header_mobile}>
            <Text style={styles.title_ticket}>Danh mục</Text>
        </View>

        <View style={styles.content_body}>
            <View style={styles.box_home}>
                <View style={styles.box_menu}>
                    <TouchableOpacity style={styles.btn_user}>
                        <Text style={styles.txt_btn_user}>Dashboard </Text>
                        <Icon name="ios-arrow-forward" color='#fff' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_user} >
                        <Text style={styles.txt_btn_user}>Quản lý tài khoản </Text>
                        <Icon name="ios-arrow-forward" color='#fff' size={30} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.onToggle()} style={styles.btn_user}>
                        <Text style={styles.txt_btn_user}>Quản lý SDB</Text>
                        <Icon name="ios-add" color='#fff' size={30} />
                    </TouchableOpacity>
                    <Collapsible collapsed={props.collapsed} align="center">
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_collapsible}>Sự cố xảy ra (5)</Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_collapsible}>Sự cố xảy ra (5)</Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_collapsible}>Sự cố xảy ra (5)</Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_collapsible}>Sự cố xảy ra (5)</Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                        
                    </Collapsible>

                    <TouchableOpacity onPress={() => props.onToggle2()} style={styles.btn_user}>
                        <Text style={styles.txt_btn_user}>Quản lý Cetreon</Text>
                        <Icon name="ios-add" color='#fff' size={30} />
                    </TouchableOpacity>
                    <Collapsible collapsed={props.collapsed2} align="center">
                        <View style={styles.collapsed_menu}>
                            <TouchableOpacity style={styles.btn_user}>
                                <Text style={styles.txt_collapsible}>Tạo mới Cetreon</Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn_user} onPress={() => props.onCetreon()}> 
                                <Text style={styles.txt_collapsible}>Quản lý Cetreon</Text>
                                <Icon name="ios-arrow-forward" color='#fff' size={18} />
                            </TouchableOpacity>
                        </View>
                    </Collapsible>

                </View>
            </View>
        </View>
    </View>
);
export default CategoryScreen;
//# sourceMappingURL=index.js.map