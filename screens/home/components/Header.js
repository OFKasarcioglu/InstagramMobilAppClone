import {StyleSheet, View, TouchableOpacity} from "react-native";

import {
    Logo,
    Plus,
    Heart,
    Messenger
} from "../../../Icons";

function Header() {
    return(
        <View style={styles.header}>
            <Logo fill='#000'/>
            <View style={styles.action}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Plus size={24} fill='#000'/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>

                    <Heart size={24} fill='#000'/>
                    <View style={styles.notificationContainer}>
                        <View style={styles.notification}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}>
                    <Messenger size={24} fill='#000'/>
                </TouchableOpacity>
            </View>
        </View>

        )
}

export {
    Header
}

const  styles = StyleSheet.create({
    header:{
        height:45,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,
        backgroundColor:'#fff',
        paddingBottom:4,

    },
    action:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
    },
    notification:{
        backgroundColor: '#FE3650',
        width:8,
        height:8,
        borderRadius:10,


    },
    notificationContainer:{
        zIndex:2,
        width:11,
        height:11,
        borderRadius:13,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:'center',
        position:'absolute',
        top:0,
        right:0,

    }

})