import { SITE_URL } from './settings'

export default API = (function(){

  function evaluateExpression(expression, expressionType){
    return fetch(SITE_URL + 'evaluate', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              expression,
              expression_type: expressionType
            })
          }).then(response => response.json())
  }

  return {
    evaluateExpression
  }
})()
