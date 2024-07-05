function mostProfitableDepartment(salesData) {
    const totalSalesByDepartment = {};

    salesData.forEach(item => {
        if (totalSalesByDepartment[item.department]) {
            totalSalesByDepartment[item.department] += item.sales;
        } else {
            totalSalesByDepartment[item.department] = item.sales;
        }
    });

    let maxSales = 0;
    let mostProfitableDept = null;
    Object.entries(totalSalesByDepartment).forEach(([dept, sales]) => {
        if (sales > maxSales) {
            maxSales = sales;
            mostProfitableDept = dept;
        }
    });

    return mostProfitableDept;
}

function mostProfitableDay(salesData) {
    const totalSalesByDay = {};

    salesData.forEach(item => {
        if (totalSalesByDay[item.day]) {
            totalSalesByDay[item.day] += item.sales;
        } else {
            totalSalesByDay[item.day] = item.sales;
        }
    });

    let maxSales = 0;
    let mostProfitableDay = null;
    Object.entries(totalSalesByDay).forEach(([day, sales]) => {
        if (sales > maxSales) {
            maxSales = sales;
            mostProfitableDay = day;
        }
    });

    return mostProfitableDay;
}

var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
];

console.log("Most profitable department:", mostProfitableDepartment(salesData));
console.log("Most profitable day:", mostProfitableDay(salesData));