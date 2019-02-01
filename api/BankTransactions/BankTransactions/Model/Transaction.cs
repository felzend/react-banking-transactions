using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Model
{
    public class Transaction : Entity
    {
        public virtual Account Account { get; set; }
        public virtual TransactionType TransactionType { get; set; }
        public virtual float Value { get; set; }
        public virtual string Description { get; set; }
        public virtual DateTime Date { get; set; }
    }
}
