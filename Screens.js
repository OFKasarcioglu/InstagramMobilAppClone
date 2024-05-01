import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

//Icons

import { Home, HomeFilled, Search, SearchFilled, Reel, ReelFilled, ShopFilled,Shop } from "./Icons";


// Screens

import HomeScreen from './screens/home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';


function Screens(){
return(
    <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarInactiveTintColor:'#262626',
            tabBarActiveTintColor:'#000',
    }}>
        <Tab.Screen name="home" component={HomeScreen} options={{

                tabBarIcon:({ focused,color})=>{
                        if(focused)
                                return <HomeFilled size={30} fill={color}  />
                        return <Home size={30}  fill={color}/>
                }
        }}/>



        <Tab.Screen name="search" component={SearchScreen} options={{

            tabBarIcon:({ focused,color})=>{
                if(focused)
                    return <SearchFilled size={30} fill={color}  />
                return <Search size={30}  fill={color}/>
            }
        }} />




        <Tab.Screen name="reel" component={ReelScreen} options={{

            tabBarIcon:({ focused,color})=>{
                if(focused)
                    return <ReelFilled size={30} fill={color}  />
                return <Reel size={30}  fill={color}/>
            }
        }}/>



        <Tab.Screen name="shop" component={ShopScreen} options={{

            tabBarIcon:({ focused,color})=>{
                if(focused)
                    return <ShopFilled size={30} fill={color}  />
                return <Shop size={30}  fill={color}/>
            }
        }}/>


        <Tab.Screen name="profile" component={ProfileScreen} options={{

            tabBarIcon:({ focused,color})=>(
                <Image style={styles.avatar}
                source={{
                    uri:'https://media.licdn.com/dms/image/D4D03AQG6jKMZm9kD7g/profile-displayphoto-shrink_800_800/0/1708329213157?e=1720051200&v=beta&t=4oTYO2ruTd2VowgLeSXvUFbzjWWF__E-ppLwJN7Ob2U',
                }}
                />
            )

        }}/>




    </Tab.Navigator>
)
}

export {
        Screens
}

const styles = StyleSheet.create({
    avatar:{
        width:25,
        height:25,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:21
    }
})
