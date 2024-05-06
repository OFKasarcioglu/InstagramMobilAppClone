import{ View,StyleSheet,Text,Image, TouchableOpacity} from "react-native";
import {Dots,Heart,Bookmarks,Comment,Share} from "../../Icons";
import Ratioimage  from "./Ratioimage";
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Post({post}) {
    return(
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image style={styles.avatar} source={{
                        uri:post.user.avatar
                    }}/>
                    <Text style={styles.text}>{post.user.name}</Text>

                </View>

                <Dots size={14} fill='#262626'/>
            </View>
            <Ratioimage src={post.image}/>
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftAction}>

                        <TouchableOpacity  style={styles.button} activeOpacity={0.6}>
                            <Heart size={24} fill='#262626'/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                            <Comment size={24} fill='#262626'/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                            <Share size={24} fill='#262626'/>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Bookmarks size={22} fill='#262626'/>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom:5 }}>
                    <Text style={styles.likes} >{post.likes} likes</Text>
                </View>
                <ReadMore numberOfLines={2}
                          seeMoreStyle={{ color:'#999'}}
                          seeMoreText="more"
                          expandOnly={true}
                          wrapperStyle={{
                              marginBottom:8
                          }}
                >


                    <Text style={styles.user}>{post.user.name}</Text>
                     {' '}
                    {post.description}

                </ReadMore>
                {post.comments > 0 &&(
                    <TouchableOpacity style={{paddingBottom:8}} activeOpacity="0.7">
                        <Text style={styles.comments}>View all {post.comments} commenst</Text>
                    </TouchableOpacity>
                )}
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
                    <Text style={styles.translation}>See Translation</Text>
                </View>

            </View>
        </View>

    )

}
export default Post;

const styles = StyleSheet.create({
    post:{
        marginBottom:30

    },
    header:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        height:49,
        paddingHorizontal:15,

    },
    avatar:{
        width:30,
        height:30,
        borderRadius:30
    },
    username:{
        flexDirection:'row',
        alignItems:"center",
        gap:10,
    },
    text:{
        fontWeight:"600",
        fontSize:14
    },
    content:{
        paddingHorizontal:15
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,

    },
    leftAction:{
        flexDirection:'row',

    },
    button:{
        marginRight:15
    },
    likes:{
        fontWeight:"600"
    },
    user:{
        fontWeight:"600"

    },
    comments:{
        opacity:0.5,
    },
    date:{
        fontSize:12,
        opacity:0.5
    },
    translation:{
        fontSize:12,
        marginLeft:10,
        fontWeight:"600"
    },


})