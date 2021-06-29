const ModelShaper = {
  calculateTransactions: function (transactionDetails) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const calPoints = (price) => {
      if (price >= 50 && price < 100) {
        return price - 50;
      } else if (price > 100) {
        return 2 * (price - 100) + 50;
      }
      return 0;
    };

    const pointsPerTransaction = transactionDetails.map((transaction) => {
      const points = calPoints(transaction.amount);
      const month = new Date(transaction.transactionDate).getMonth();
      return { ...transaction, points, month };
    });

    let transactionOfUser = {};
    let totalPointsByUSer = {};
    pointsPerTransaction.map((eachTransaction) => {
      let { custid, name, month, points } = eachTransaction;
      if (!transactionOfUser[custid]) {
        transactionOfUser[custid] = [];
      }
      if (!totalPointsByUSer[custid]) {
        totalPointsByUSer[name] = 0;
      }
      totalPointsByUSer[name] += points;
      if (transactionOfUser[custid][month]) {
        transactionOfUser[custid][month].points += points;
        transactionOfUser[custid][month].monthNumber = month;
        transactionOfUser[custid][month].numTransactions++;
      } else {
        transactionOfUser[custid][month] = {
          custid,
          name,
          monthNumber: month,
          month: months[month],
          numTransactions: 1,
          points,
        };
      }
    });
    let monthlySummary = [];
    for (var custKey in transactionOfUser) {
      transactionOfUser[custKey].forEach((cRow) => {
        monthlySummary.push(cRow);
      });
    }

    let totalRewards = [];
    for (custKey in totalPointsByUSer) {
      totalRewards.push({
        name: custKey,
        points: totalPointsByUSer[custKey],
      });
    }
    return {
      monthlySummary: monthlySummary,
      pointsPerTransaction,
      totalRewards: totalRewards,
    };
  },
  //Function to get the monthly transactions.
  getMothlyTransaction: function (currentMonth, allTransaction) {
    let currentMonthTransction = allTransaction.filter((transaction) => {
      return (
        currentMonth.custid === transaction.custid &&
        currentMonth.monthNumber === transaction.month
      );
    });
    return currentMonthTransction;
  },
};

export default ModelShaper;
