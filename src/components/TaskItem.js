const TaskItem = ({task}) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? 'Completed' : 'Não completa'}</p>
        </>
    )
};

export default TaskItem;