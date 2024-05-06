import { useState } from 'react'
import {Dimensions, Image, StyleSheet} from 'react-native';




function Ratioimage({src}) {

    const [height, setHeight] = useState(0);
    const screenWidth = Dimensions.get('window').width;
    Image.getSize(src, (width,height)=>{
        const ratio = width / screenWidth;
        setHeight( height/ ratio);

    })



    return(
        <Image
            style={{
                width:screenWidth ,
                height
            }}

            source={{

            uri:src

        }}/>
    )

}
export default Ratioimage;