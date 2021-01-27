import React from 'react'
import { Alignment, Button, Navbar } from '@blueprintjs/core'
import { useHistory } from 'react-router-dom'

export const OvalNavbar = (): JSX.Element => {
    const history = useHistory()

    return <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Oval Admin</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="compressed" text="Train Receipt Parser" onClick={() => history.push('/trainReceiptParser')} />
        </Navbar.Group>
    </Navbar>
}