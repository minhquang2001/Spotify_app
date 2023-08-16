import { ScrollView, StyleSheet, Text, View } from 'react-native'



const ListType = () => {

    return (
        <View>
            <View style={styles.wrapView} >
                <ScrollView horizontal={true}>
                    <Text style={[styles.text, styles.active]}> Artists </Text>
                    <Text style={styles.text}> Album </Text>
                    <Text style={styles.text}> Podcast </Text>
                    <Text style={styles.text}> Genre </Text>
                </ScrollView>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    wrapView: {
        flexDirection: 'row',
        marginTop: 32,
        marginLeft: 25
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginRight: 48,
        opacity: 0.6
    },
    active: {
        fontWeight: '700',
        opacity: 1
    }
})
export default ListType
