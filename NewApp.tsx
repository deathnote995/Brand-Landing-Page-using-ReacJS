import './NewApp.css'
import Content from './components/content.tsx';
import Navbar from './components/navbar.tsx'


const App=()=>
    {
        return(
            <div>
                <Navbar/>
                <Content/>
            </div>
        );
    };
export default App;