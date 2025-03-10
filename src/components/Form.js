import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            summary: '',
            course: 'btech',
            gender: 'male',
            skills: {
                option1: false,
                option2: false,
                option3: false,
                option4: false,
            }
        }
    }

    fullNameEventHander = event => {
        this.setState({ fullName: event.target.value })
    }

    summaryEventHander = event => {
        this.setState({ summary: event.target.value })
    }

    courseEventHander = event => {
        this.setState({ course: event.target.value })
    }

    genderEventHander = event => {
        this.setState({ gender: event.target.value })
    }
    
    skillsEventHander = event => {
        this.setState({
            skills: {
                ...this.state.skills,
                [event.target.name]: event.target.checked
            }
        })
    }

    submitEventHandler=event=>{
        event.preventDefault();
        console.log(`Name: ${this.state.fullName}, Gender: ${this.state.gender}, Course: ${this.state.course}`);
        console.log(`Summary: ${this.state.summary}`);
        let skills='';
        for(let skill in this.state.skills){
            if(skill==='option1' && this.state.skills[skill]===true)
                skills+='Angular,'
            if(skill==='option2' && this.state.skills[skill]===true)
                skills+='React,'
            if(skill==='option3' && this.state.skills[skill]===true)
                skills+='Java,'
            if(skill==='option4' && this.state.skills[skill]===true)
                skills+='Python'
        }
        console.log(`Skill: ${skills}`)
    }


    render() {
        let { fullName, summary, course, gender, skills } = this.state
        return (
            <div>
                <h1>Registration Form</h1>
                <form onSubmit={this.submitEventHandler}>
                    <div>
                        <label>Full Name:</label>
                        <input type='text' value={fullName} onChange={this.fullNameEventHander} />
                    </div>
                    <div>
                        <label>Summary:</label>
                        <textarea rows='2' value={summary} onChange={this.summaryEventHander}></textarea>
                    </div>
                    <div>
                        <label>Course:</label>
                        <select value={course} onChange={this.courseEventHander}>
                            <option value='btech'>B.Tech</option>
                            <option value='bsc'>BSC</option>
                            <option value='bca'>BCA</option>
                        </select>
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={this.genderEventHander} />Male
                        <input type='radio' name='gender' value='female' checked={gender === 'female'} onChange={this.genderEventHander} />Female
                    </div>
                    <div>
                        <label>Skills:</label>
                        <input type='checkbox' name='option1' checked={skills.option1} onChange={this.skillsEventHander} />Angular
                        <input type='checkbox' name='option2' checked={skills.option2} onChange={this.skillsEventHander} />React
                        <input type='checkbox' name='option3' checked={skills.option3} onChange={this.skillsEventHander} />Java
                        <input type='checkbox' name='option4' checked={skills.option4} onChange={this.skillsEventHander} />Python
                    </div>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Form
