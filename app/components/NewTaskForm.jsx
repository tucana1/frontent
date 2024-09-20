'use client'
import { useState } from "react"
import classes from "./new-student-form-styles.module.css";
<new></new>
function NewTaskForm() {
    async function onSubmit(){
        const newTaskBody = {
            Date: convertDate(Date),
            tasks,
        }
        const res = await fetch ("http://localhost:8080/calendar", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTaskBody)
        })
        window.location.reload()
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [Date, setDate] = useState("")
    const [tasks, settasks] = useState([''])
    const convertDate = (datestring) => {
        //Convert the date to unix timestamp
        const dateObj = new window.Date(datestring);
        const seconds = Math.floor(((dateObj.getTime() / 1000))) + 86400; // Convert to seconds  
        const nanoseconds = (dateObj.getTime() % 1000) * 1000000; // Convert milliseconds to nanoseconds
        return {"seconds": seconds, "nanoseconds": nanoseconds}  
        }
    return (
        <div>
            <h3>Add Date</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div className = {classes.mainForm}>
                <div>
                    <label htmlFor="Date">: Date </label>
                    <input 
                    value={Date}
                    placeholder="2024-09-01"
                    onChange = {(event) => setDate(event.target.value)}
                    />
                </div>
            </div>
            <h4>tasks</h4>
            {
                tasks.map((task, i) => 
                    <div key={i}>
                    <input 
                    value={task}
                    placeholder="sleep"
                    onChange={(event) => settasks(tasks.map((c, j) => {
                        return i === j ? event.target.value : c 
                    })
                )}
                    />
                    <br/><br/>
                    </div>
                )
            }
            <button onClick = {() => settasks(Array(...tasks, ""))}>
                Add New Task
            </button>
        </div>
    )
}
export default NewTaskForm