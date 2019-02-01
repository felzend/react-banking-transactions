using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Model
{
    public class Account : Entity
    {
        public virtual string Owner { get; set; }
        public virtual string Bank { get; set; }
        public virtual int Agency { get; set; }
        public virtual int Number { get; set; }
        public virtual AccountType AccountType { get; set; }
    }
}
