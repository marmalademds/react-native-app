/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { 
  SafeAreaView, 
} from 'react-native'
import {
  Counter,
  List,
  BookDetailScreen,
} from './pages'
import {
  NavigationProvider,
  useNavigation,
  BookProvider,
} from './contexts'
import {
  text,
  layout
} from './styles'

export const App = () => {
  return (
    <NavigationProvider>
      <BookProvider>
        <SafeAreaView
          style={[
            layout.app,
          ]}
        >
          <RootNavigator />
        </SafeAreaView>
      </BookProvider>
    </NavigationProvider>
  )
}

const RootNavigator = () => {
  const { navigation, setNavigation, NAV } = useNavigation()
  console.log(navigation)
  if (navigation === NAV.HOME) {
    return <List />
  }

  if (navigation === NAV.DETAIL) {
    return <BookDetailScreen />
  }

  if (navigation === NAV.COUNTER) {
    return <Counter />
  }
}