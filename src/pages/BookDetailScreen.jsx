import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
    text,
    layout
} from '../styles'
import { useNavigation, useBook } from '../contexts';

export const BookDetailScreen = () => {
    const { navigation, setNavigation, NAV } = useNavigation()
    const { selectedBook, setSelectedBook } = useBook()
    const onBackPress = () => {
        setNavigation(NAV.HOME)
        setSelectedBook(null)
    }

    return (
        <View>
            <Text style={[
                text.fboldsmall,
                layout.flatListItem
            ]}>
                Details about this book:
            </Text>
            <View style={[
                layout.flatListItem
            ]}>
                <Text style={[
                    text.fboldheader
                ]}>
                    {selectedBook.title}
                </Text>
                <Text style={[
                    text.fboldsmall
                ]}>
                    {selectedBook.author}
                </Text>
                <Text>
                    {selectedBook.description}
                </Text>
            </View>
            <TouchableOpacity
                    onPress={onBackPress}
                >
                    <Text style={[
                        text.flinksmall,
                        layout.flatListItem
                    ]}
                    >
                        Back
                    </Text>
            </TouchableOpacity>
        </View>
    )
}