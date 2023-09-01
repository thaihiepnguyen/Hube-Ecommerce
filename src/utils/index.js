import numeral from "numeral";
import ReactDOMServer from 'react-dom/server'

export function fCurrency(number?: number | string) {
  return `${numeral(number || 0).format('0,0')}${ReactDOMServer.renderToString(<>&nbsp;₫</>)}`
}