import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useBook } from '../contexts';
import {
  text,
  layout
} from '../styles'

const books = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    description: 'A novel about racial injustice in the Deep South.',
    author: 'Harper Lee',
  },
  {
    id: '2',
    title: '1984',
    description: 'A dystopian novel about totalitarianism and surveillance.',
    author: 'George Orwell',
  },
  {
    id: '3',
    title: 'The Great Gatsby',
    description: 'A story about the American dream set in the 1920s.',
    author: 'F. Scott Fitzgerald',
  },
  {
    id: '4',
    title: 'Moby-Dick',
    description: 'A seafaring tale of obsession and revenge.',
    author: 'Herman Melville',
  },
  {
    id: '5',
    title: 'Pride and Prejudice',
    description: 'A classic romance novel that critiques societal norms.',
    author: 'Jane Austen',
  },
  {
    id: '6',
    title: 'The Catcher in the Rye',
    description: 'A coming-of-age story about a rebellious teenager.',
    author: 'J.D. Salinger',
  },
  {
    id: '7',
    title: 'Brave New World',
    description: 'A novel about a dystopian society where technology controls everything.',
    author: 'Aldous Huxley',
  },
];  

export const List = () => {
  const [searchText, setSearchText] = useState()
  const [filteredBooks, setFilteredBooks] = useState(books)
  const { navigation, setNavigation, NAV } = useNavigation()
  const { selectedBook, setSelectedBook } = useBook()
   
  const onChangeText = (text) => {
    setSearchText(text)

    if (text === '') {
      setFilteredBooks(books)
    }
    else {
      const filtered = (books.filter((book) => {
        return (
          book.title.toLowerCase().includes(text.toLowerCase()) ||
          book.description.toLowerCase().includes(text.toLowerCase())
        )
      }))
      setFilteredBooks(filtered)
    }
  }

  const onSelectBook = (book) => {
    setSelectedBook(book)
    console.log(book)
    setNavigation(NAV.DETAIL)
  }

  const onUsersPress = () => {
    setNavigation(NAV.USERS)
  }

  return(
    <View style={[
      // {backgroundColor: 'red'}
    ]}>
      <Search 
        onChangeText={onChangeText}
        searchText={searchText}
      />
      <FlatList
        data={filteredBooks}
        renderItem={({item}) => renderItem({item, onPress: onSelectBook})}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
          onPress={onUsersPress}
      >
          <Text style={[
              text.flinksmall,
              layout.flatListItem
          ]}
          >
              Users Page
          </Text>
      </TouchableOpacity>
    </View>
  )
}

const Search = (props) => {
  const { onChangeText, searchText } = props

  return (
    <TextInput 
      style = {[
        layout.searchBar
      ]}
      onChangeText={onChangeText}
      value={searchText}
      placeholder="Search Keyword"
    />
  )
}

const renderItem = ({item, onPress}) => {

  return (
    <View style={[
      layout.flatListItem
    ]}>
      <TouchableOpacity 
        style={[]}
        onPress={() => onPress(item)}
      >
        <Text style={[
          text.fboldsmall
        ]}>
          {item.title} by {item.author}
        </Text>
        <Text>
          {item.description}
        </Text>
      </TouchableOpacity>
    </View>
  )
}