import React, {componant} from "react";

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrom'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends componant {
    render() {
        return(
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>

        )
    }
}

