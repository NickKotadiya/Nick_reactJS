import './App.css';

// import Task1 from './components/Task=1.All/Task1';
// import Task2 from './components/Task=1.All/Task2';
// import Task3 from './components/Task=1.All/Task3';
// import Task4 from './components/Task=1.All/Task4';

// import Props from './components/Props/Props'; 
// import Props2 from './components/Props/Props2';
// import PTask3 from './components/Props/PTask3';

// import Lacture1 from './components/react_conditional_rendering/Lacture1';
// import Task_1 from './components/react_conditional_rendering/Task/Task_1'
// import Task_2 from './components/react_conditional_rendering/Task/Task_2'
// import Task_3 from './components/react_conditional_rendering/Task/Task_3'

// import Lacture2 from './components/react_list_rendering/Lacture2';
// import SearchBar from './components/react_list_rendering/SearchBar';

// import { Clock }  from './components/Keeping_Components_Pure/Clock'

// import Use_State from './components/React_useState_Hook/Use_State';

// import Zeronumber from './components/React_useState_Hook/Zeronumber';
// import './components/React_useState_Hook/Zero.css'
// import Listof_r from './components/React_useState_Hook/Listof_r';
// import './components/React_useState_Hook/R_list.css'

import Com_A from './components/Com/Com_A';
import { createContext } from 'react';

const data = createContext()
const data1 = createContext()


//contextAPI :- createContext , Provider , Consumer

function App() {

  const name = "Nick"
  const Age = 17
  return (
    <>
      {/* TASK 1  */}
      {/* <Task1/> */}

      {/* Task 2 */}
      {/* <Task2/> */}

      {/* Task 3 */}
      {/* <Task3/> */}

      {/* Task 4 */}
      {/* <Task4/> */}


      {/* Props */}

      {/* TASK 1 FOR Props */}
      {/* <div class='flex justify-center m-20 space-x-10'>
      <Props name='The' img='https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <Props name='Coldest' img='https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <Props name='Sunset' img='https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    </div> */}

      {/* TASK 2 FOR*/}
      {/* <Props2/> */}

      {/* TASK 3 FOR*/}
      {/* <PTask3/> */}

      {/* TASK 4 FOR */}


      {/* react_conditional_rendering */}
      {/* <Lacture1/> */}
      {/* <Task_1/> */}
      {/* <Task_2/> */}
      {/* <Task_3/> */}


      {/* react_list_rendering */}
      {/* <Lacture2 /> */}


      {/* Keeping_Components_Pure */}
      {/* <Clock/> */}

      {/* React_useState_Hook */}
      {/* <Use_State/> */}
      {/* <Zeronumber/> */}
      {/* <Listof_r/> */}

      {/* Com */}
      <data.Provider value={name}>
        <data1.Provider value={Age}>
          <Com_A />
        </data1.Provider>
      </data.Provider>

    </>
  );
}

export default App;
export { data , data1 }
