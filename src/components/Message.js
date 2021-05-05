import React, { useEffect, useState, useCallback } from "react";
// console.info('Include Message');

export const Message = ({ objMessage, send }) => {

    const [answer, setAnswer] = useState([
        {
            'author': '',
            'message': '',
            'date': '',
        }
    ]);

    useEffect(() => {
        if (send == true) {
            setAnswer(
                [...answer, {
                    'author': objMessage.author,
                    'message': objMessage.myMessage,
                    'date': new Date().toLocaleTimeString(),
                }]
            );
        }
    }, [send]);

    return (
        <>
            {
                answer.length > 1 &&
                answer.map((v, index) =>
                v.date != '' &&
                    <fieldset key={index} style={{width:300}}>
                        <legend>{v.date} - {v.author}</legend>
                        <p>{v.message}</p>
                    </fieldset>
                )
            }
        </>
    )

}
