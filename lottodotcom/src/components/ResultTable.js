import React from 'react';

function  ResultTable ({powerball, searchTerm})  {

return (
<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
<h3>Results for {searchTerm}</h3>
{ powerball.data?.draws.map((lottoItem, index) => {
return   (
    <div style={{borderStyle: 'solid', paddingTop: 5}}>
        <tbody>
        <p key={index}>Draw Id: {lottoItem.drawNumber}</p>
        {lottoItem.results ? (<p style={{fontWeight: 'bold'}} key={lottoItem.drawNumber}>Drawn Numbers: {lottoItem?.results[0].primary.reduce((acc, elem) => {return acc + ', ' + elem})}</p>) : <p>No Draw Results Found </p>}
        <p style={{paddingLeft: 10, paddingRight: 10}}>Date Drawn: {new Date(lottoItem.resultDate).toString()}</p>
        </tbody>
    </div>)
    })}
    </table>
)
}

export default ResultTable;