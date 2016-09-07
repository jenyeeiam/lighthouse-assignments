var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//need to do a for loop to check each object in the array
//this function will have to access the sales array from companySalesData and multiply by the taxrates.
//Use hasOwnProperty to check for the key
//want to output the sales and tax for ALL companies
function calculateSalesTax(sales, taxRates) {
  var result = {};
  sales.forEach(function(company) {
    var prov = company.province;
    var salesTotal = company["sales"].reduce(function(a, b) {
      return a + b;
    }, 0);
    //calc tax by pulling from taxRates
    var tax = salesTotal * taxRates[prov];
    result[prov] = {};
    result[prov].totalSales = salesTotal;


    result[prov].totalTaxes = tax;

  });

return result;


}

console.log(calculateSalesTax(companySalesData, taxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/