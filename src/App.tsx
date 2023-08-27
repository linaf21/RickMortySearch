import { CharacterProvider } from './context/CharactersProvider';
import { SideMenu } from './components/sideMenuComponents/SideMenu';
import { AppRouter } from './router/AppRouter';

const App = () => {

  return (
    <CharacterProvider>
      <div className='flex flex-wrap'>
        <SideMenu />
        <AppRouter />
      </div>
    </CharacterProvider>
  )
}
export default App;

