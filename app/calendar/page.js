import Calendar from '../components/Calendar';
import NewTaskForm from '../components/newTaskForm';

export default function Page() {
  return(
    <div>
        <Calendar />
        <hr />
        <NewTaskForm />
        <div style={{ marginBottom: '1000px' }}></div> 
    </div>
)}