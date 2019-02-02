using BankTransactions.Model;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Mapping
{
    public class TransactionMapping : ClassMap<Transaction>
    {
        public TransactionMapping()
        {
            Table("`Transaction`");
            Id(x => x.Id);
            References(x => x.Account)
                .Not.Nullable();
            References(x => x.TransactionType)
                .Not.Nullable();
            Map(x => x.CreatedAt)
                .Default("getdate()");
            Map(x => x.UpdatedAt)
                .Default("getdate()");
        }
    }
}
