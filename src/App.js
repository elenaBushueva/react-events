import React, {useState} from 'react';

const App = () => {

    const [totalAmount, setTotalAmount] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [years, setYears] = useState('');
    const [report, setReport] = useState([]);


    const onChangeTotalAmount = (e) => {
        setTotalAmount(e.target.value);
    };
    const onChangeDownPayment = (e) => {
        setDownPayment(e.target.value);
    };
    const onChangeYears = (e) => {
        const updatedYear = e.target.value;
        setYears(updatedYear);

        let newReport = [];
        const payment = (totalAmount - downPayment) / updatedYear;
        let debt = totalAmount - downPayment;

        for (let i = 1; i <= updatedYear; i++) {
            debt -= payment;
            newReport.push({year: i, payment, debt});
        }
        setReport(newReport);
    }

    return (
        <div>
            <label htmlFor="totalAmount">Total Amount :</label>
            <input id="totalAmount" type="number" value={totalAmount} onChange={onChangeTotalAmount}/>
            <br/><br/>

            <label htmlFor="downPayment">Down payment :</label>
            <input id="downPayment" type="number" value={downPayment} onChange={onChangeDownPayment}/>
            <br/><br/>

            <label htmlFor="downPayment">Years :</label>
            <input id="yars" type="number" value={years} onChange={onChangeYears}/>
            <br/><br/>

            <hr/>

            Total Amount : {totalAmount} <br/>
            Down payment : {downPayment} <br/>
            Credit : {totalAmount - downPayment} <br/>
            Down payment, % : {(downPayment / totalAmount * 100).toFixed(2)}
            <br/> <br/>

            <table border={1}>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Payment</th>
                    <th>Debt</th>
                </tr>
                </thead>

                <tbody>
                {report.map(el =>
                    <tr key={el.year}>
                        <td>{el.year}</td>
                        <td>{el.payment.toFixed()}</td>
                        <td>{el.debt.toFixed()}</td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    );
};

export default App;