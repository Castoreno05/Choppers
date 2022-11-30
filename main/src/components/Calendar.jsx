import React from 'react'

export default function Calendar(props) {
    return props.calActive ? (
        <div>Calendar</div>
    ) : (
        ""
    );
}
