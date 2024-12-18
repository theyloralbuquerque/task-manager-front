import { useEffect, useState } from 'react';
import axios from 'axios';

import './Tasks.scss';

const Tasks = () => {
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
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas Tarefas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <p>{lastTask.description}</p>
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Conscluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                            <p>{completedTask.description}</p>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
