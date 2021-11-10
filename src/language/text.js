import React from 'react'
import { useSelector } from 'react-redux'
import { languages } from '../constants/actionTypes'
import { uzbek } from './uzbek'
import {english} from './english'

function Text({id}) {

    const language = useSelector(state => state.language)


    switch (language) {
        case languages.uzbek:
            return uzbek[id] ? uzbek[id] : id;
        case languages.english:
            return english[id] ? english[id] : id;
        default:
            return id;

    }

    return (
        <div>

        </div>
    )
}

export default Text
