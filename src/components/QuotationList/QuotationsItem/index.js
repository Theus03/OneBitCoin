import { View, Text, Image } from 'react-native';
import styles from './style'

export default function QuotationItem(props) {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logBitCoin} source={require("../../../img/logo-bit-coin.png")}/>
                    <Text style={styles.dayCotation}>{props.data}</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>{props.valor}</Text>
            </View>
        </View>

    )
}
