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
        height:36,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:15,

    },
    action:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
    }

})