import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FormScreen from './Component/FormScreen';
import HomeScreen from './Component/ListScreen';

const AppNavigation = createStackNavigator({
    Form:{screen : FormScreen },
    List:{screen: HomeScreen }
})

const App = createAppContainer(AppNavigation);
export default App;