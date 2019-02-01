using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Model
{
    public class TransactionType : Entity
    {
        public virtual String Name { get; set; }
    }
}
