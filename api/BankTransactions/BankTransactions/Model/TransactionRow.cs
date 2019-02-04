using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Model
{
    public class TransactionRow
    {
        public float Value { get; set; }
        public string Description { get; set; }
        public int TransactionType_id { get; set; }
        public DateTime Date { get; set; }
    }
}
