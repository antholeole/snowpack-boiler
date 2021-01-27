import { Button } from '@blueprintjs/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './home/home'
import { OvalNavbar } from './navigation/navbar'
import { createBrowserHistory } from "history"
import './styles.scss'
import { ReceiptParserPage } from './receipt_parser/receipt_parser_page'

const history = createBrowserHistory()

export const App = (): JSX.Element => {

  return (
    <div className="App">
      <OvalNavbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/trainReceiptParser" component={ReceiptParserPage} />
      </Switch>
    </div>
  )
}

export default App
