import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {useState} from "react";
import {Settings} from "./Settings/Settings.tsx";

function App() {

    const [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    return (
        <div className={'main'}>
            {!editMode && <Counter
                changeEditMode={changeEditMode}
                maxValue={5}
                startValue={0}
            />}
            {editMode && <Settings changeEditMode={changeEditMode}/>}
        </div>
    )
}

export default App
