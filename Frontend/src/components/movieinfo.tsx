import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Person, addPerson, removePerson, AppState} from '../store/store'

const Movieinfo = () => {
    const [newPerson, setNewPerson] = React.useState("");
    const updateNewPerson = () => (e: React.ChangeEvent<HTMLInputElement>) =>
        setNewPerson(e.currentTarget.value);

    const people: Person[] = useSelector((state: AppState) => state.people);
    const movieId: string = useSelector((state: AppState) => state.movieId);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addPerson(newPerson));
        setNewPerson("");
    };

    const dispatchNewPerson = (id: number) => () => {
        dispatch(removePerson(id));
    };

    return (
        <div>
          
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        <span>{person.name}</span>
                        <button onClick={dispatchNewPerson(person.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Enter name"
                    value={newPerson}
                    onChange={updateNewPerson()}
                />
                <button>Add</button>
            </form>
        </div>
    );
};

export default Movieinfo;

