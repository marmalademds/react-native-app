/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useEffect } from 'react'
import { 
  SafeAreaView, 
  Text,
  ActivityIndicator,
} from 'react-native'
import {
  Counter,
  List,
  BookDetailScreen,
  Users,
} from './pages'
import {
  NavigationProvider,
  useNavigation,
  BookProvider,
  UserProvider,
  useRandomUser,
} from './contexts'
import {
  text,
  layout
} from './styles'

export const App = () => {
  return (
    <NavigationProvider>
      <BookProvider>
        <UserProvider>
          <SafeAreaView
            style={[
              layout.app,
            ]}
          >
            <RootNavigator />
          </SafeAreaView>
        </UserProvider>
      </BookProvider>
    </NavigationProvider>
  )
}

const RootNavigator = () => {
  const { navigation, setNavigation, NAV } = useNavigation()
  const { randomUsersIsLoading } = useRandomUser()
  console.log(navigation)

  useEffect(() => {
    if (randomUsersIsLoading) {
      console.log('Loading users...')
    }
    else {
      console.log('Users loaded')
    }
  }, [randomUsersIsLoading])

  if (randomUsersIsLoading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    )
  }

  switch (navigation) {
    case NAV.HOME:
      return <List />;
    case NAV.DETAIL:
      return <BookDetailScreen />;
    case NAV.COUNTER:
      return <Counter />;
    case NAV.USERS:
      return <Users />;
    default:
      return null;
  }
}