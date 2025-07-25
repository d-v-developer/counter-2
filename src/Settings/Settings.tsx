import {Button} from "../Button/Button.tsx";
type Props = {
    changeEditMode: () => void;
}

export const Settings = ({ changeEditMode }: Props) => {
    return (
        <div>
            <h1>settings</h1>
            <Button title={'save'} callback={changeEditMode}/>
        </div>
    );
};