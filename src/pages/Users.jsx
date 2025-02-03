import { useRandomUser, useNavigation } from '../contexts'
import { 
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native'
import { layout, text } from '../styles'

export const Users = () => {
    const {
        navigation, 
        setNavigation, 
        NAV
    } = useNavigation()
    
    const { randomUsers } = useRandomUser()

    const onHomePress = () => {
        setNavigation(NAV.HOME)
    }

    return (
        <View>
            <FlatList
                data={randomUsers}
                renderItem={renderItem}
                keyExtractor={(item) => item.email}
            >
            </FlatList>
            <TouchableOpacity
                onPress={onHomePress}
            >
                <Text style={[
                    text.flinksmall,
                    layout.flatListItem
                ]}
                >
                    Home Page
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const renderItem = (item) => {
    console.log(item)
    return (
        <View style={[
            layout.flatListItem
          ]}>
            <Image
                style={[
                    layout.thumbnail
                ]}
                source={{uri: item.item.picture.thumbnail}}
            />
            <Text>
                {item.item.name.first} {item.item.name.last}
            </Text>
            <Text>
                {item.item.email}
            </Text>

        </View>
    )
}