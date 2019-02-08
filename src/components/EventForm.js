import React from 'react'

export default (props) => (
    <form onSubmit={props.onSubmit}>

        <label>Name</label>
        <input 
            name="name" 
            type="text" 
            value={props.name} 
            onChange={props.onChange}></input>

        <label>Date</label>
        <input 
            name="date" 
            type="date" 
            value={props.date} 
            onChange={props.onChange}></input>

        <label>Description</label>
        <input 
            name="description" 
            type="text" 
            value={props.description} 
            onChange={props.onChange}></input>
        
        <input type="submit"></input>
    </form>
)