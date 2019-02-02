using BankTransactions.Model;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Mapping
{
    public class AccountTypeMapping : ClassMap<AccountType>
    {
        public AccountTypeMapping()
        {
            Table("AccountType");
            Id(x => x.Id);
            Map(x => x.Name)
                .Unique()
                .Not.Nullable();
            Map(x => x.CreatedAt)
                .Default("getdate()");
            Map(x => x.UpdatedAt)
                .Default("getdate()");
        }
    }
}
