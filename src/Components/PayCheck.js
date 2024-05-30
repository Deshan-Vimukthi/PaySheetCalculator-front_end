import React from "react";

const payCheck = ({basicSalary,earning,deduction}) =>{
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };
    let totalEarning = basicSalary;
    let totalEarningForEPF = basicSalary;
    let grossDeduction = 0;
    const sum = earning.map((item,key)=>{
        totalEarning = totalEarning+item.amount;
        if(item.isCheck){
            totalEarningForEPF = totalEarningForEPF+item.amount;
        }
    });
    const deduc = deduction.map((item,key)=>{
        grossDeduction = grossDeduction+item.amount;
    });
    const grossEarning = totalEarning - grossDeduction;
    const grossSalaryForEPF = totalEarningForEPF - grossDeduction;
    function rate(){
        if (totalEarningForEPF<=100000)
            return 0
        else if (100000 < totalEarningForEPF && totalEarningForEPF <= 141667)
            return 6
        else if (141667 < totalEarningForEPF && totalEarningForEPF <= 183333)
            return 12
        else if (183333 < totalEarningForEPF && totalEarningForEPF <= 225000)
            return 18
        else if (225000 < totalEarningForEPF && totalEarningForEPF <= 266667)
            return 24
        else if (266667 < totalEarningForEPF && totalEarningForEPF <= 308333)
            return 30
        else if (308333 < totalEarningForEPF)
            return 36
        else return 0}
    function constant(){
        if (totalEarningForEPF<=100000)
            return 0
        else if (100000 < totalEarningForEPF && totalEarningForEPF <= 141667)
            return 6000
        else if (141667 < totalEarningForEPF && totalEarningForEPF <= 183333)
            return 14500
        else if (183333 < totalEarningForEPF && totalEarningForEPF <= 225000)
            return 25500
        else if (225000 < totalEarningForEPF && totalEarningForEPF <= 266667)
            return 39000
        else if (266667 < totalEarningForEPF && totalEarningForEPF <= 308333)
            return 55000
        else if (308333 < totalEarningForEPF)
            return 73500
        else return 0}

    const employeeEPF8 = totalEarningForEPF * 8/100;
    const employeeEPF12 = totalEarningForEPF * 12/100;
    const employeeETF3 = totalEarningForEPF * 3/100;
    const APIT = (grossEarning * rate()/100) - constant();

    const netSalary = grossEarning - employeeEPF8 -APIT;
    const costForCompany = grossEarning + employeeEPF12 + employeeETF3;

    return(
        <div className={'main-form'}>
            <div className={'inner-form'}>
                <div className={'header'}>
                    <div className={'header-text'}>Your salary</div>
                </div>

            </div>
        </div>
    )
}

export default payCheck;