import { useEffect, useState } from 'react';
import TaskItem from './components/TaskItem';
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            description: 'Estudar Programação',
            isCompleted: false,
        },
        {
            id: '2',
            description: 'Ler',
            isCompleted: true,
        },
    ]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/tasks');

            setTasks(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
