using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Model
{
    public class Bank : Entity
    {
        public virtual string Name { get; set; }
    }
}
