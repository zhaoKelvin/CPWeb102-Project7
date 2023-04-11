import { useState, useEffect } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import ReadCrew from './pages/ReadCrew'
import EditCrew from './pages/EditCrew'
import CreateCrew from './pages/CreateCrew'
import { Link } from 'react-router-dom'
import { supabase } from './client';


function App() {

  const [crew, setCrew] = useState([])

  let element = useRoutes([
    {
      path: "/",
      element:<ReadCrew data={crew}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrew data={crew} />
    },
    {
      path:"/create",
      element: <CreateCrew />
    }
  ]);

  useEffect(() => {
    const fetchCrew = async () => {
      const {data} = await supabase
      .from('Crew')
      .select()
      .order('created_at', { ascending: true })


      // set state of posts
      setCrew(data);
    }
    fetchCrew();
  }, [])

  return (
    <div className="App">
      <div className="header">
        <h1>MC Mob Creator</h1>
        <Link to="/"><button className="headerBtn"> View Your Mobs ☠️ </button></Link>
        <Link to="/create"><button className="headerBtn"> Create New Mob 🧠 </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App
