import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class MainButtons extends Component {
    render() {
        return (
            <div>
                <>
                    <Button href="#">Link</Button> <Button type="submit">Show Pets</Button>{' '}
                    <Button as="input" type="button" value="Input" />{' '}
                    <Button as="input" type="submit" value="Submit" />{' '}
                    <Button as="input" type="reset" value="Reset" />
                </>

            </div>
        )
    }
}

export default MainButtons
