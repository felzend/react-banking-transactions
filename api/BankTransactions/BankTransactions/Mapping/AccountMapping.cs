using BankTransactions.Model;
using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Mapping
{
    public class AccountMapping : ClassMap<Account>
    {
        private string account_constraint_key = "bank_agency_account_key";

        public AccountMapping()
        {
            Table("Account");
            Id(x => x.Id);
            Map(x => x.Owner)
                .Length(50)
                .Not.Nullable();
            References(x => x.Bank)
                .UniqueKey(this.account_constraint_key)
                .Not.Nullable();
            Map(x => x.Agency)
                .UniqueKey(this.account_constraint_key)
                .Not.Nullable();
            Map(x => x.Number)
                .UniqueKey(this.account_constraint_key)
                .Not.Nullable();
            References(x => x.AccountType)                
                .Not.Nullable();

            Map(x => x.CreatedAt)
                .Default("getdate()");
            Map(x => x.UpdatedAt)
                .Default("getdate()");
        }
    }
}
