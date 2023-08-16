import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Separate = () => {
    return (
        <LinearGradient colors={['rgba(51,51,51,1)', 'rgba(217,217,217,0)']} style={styles.linearGradient}></LinearGradient>
       
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        height: 16,
        width: '100%',
        opacity: 0.4,
        marginTop: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})

export default Separate