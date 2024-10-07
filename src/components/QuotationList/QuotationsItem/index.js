import { View, Text, Image } from 'react-native';
import styles from './style'

export default function QuotationItem() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logBitCoin} source={require("../../../img/logo-bit-coin.png")}/>
                    <Text style={styles.dayCotation}>07/05/2021</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
        </View>

    )
}
