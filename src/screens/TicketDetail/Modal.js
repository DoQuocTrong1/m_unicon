import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../../styles/style_mobile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const RenderButton = ({ text, icon, onPress }) => {
    return (
        <TouchableOpacity style={styles.modal_btnBody} onPress={onPress}>
            <Icon name={icon} size={20} color={'#fff'} />
            <Text style={styles.panel_txtBody}>{text}</Text>
        </TouchableOpacity>
    );
};

const RenderModalContent = ({...props}) =>{
    return (
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <Text style={styles.modal_title}>Activiti</Text>
                <Icon.Button
                    name={'close'}
                    size={40} color={'#34373C'}
                    backgroundColor={'#22252A'}
                    style={{ marginRight: -20 }}
                    onPress={() => props.onCancel()}
                />
            </View>
            <View style={styles.modalBody}>
                <RenderButton text={'Resolved'} icon={'subdirectory-arrow-left'} onPress={null}/>
                <RenderButton text={'Tranfer'} icon={'upload'} onPress={null}/>
                <RenderButton text={'Comment'} icon={'comment-text-outline'} onPress={null}/>
                <RenderButton text={'Add images'} icon={'image'} onPress={null}/>
                <RenderButton text={'Update'} icon={'reload'} onPress={null}/>
            </View>
        </View>
    )
}

export default RenderModalContent;